// Runs the flaky test suite N times and prints how often each test failed.
// Usage: npm run test:repeat -- 10
const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const runs = Number(process.argv[2]) || 10;
const jestBin = require.resolve('jest/bin/jest');
const reportFile = path.join(os.tmpdir(), `flaky-report-${process.pid}.json`);
const failures = {};
let redRuns = 0;

for (let i = 1; i <= runs; i += 1) {
  spawnSync(process.execPath, [
    jestBin, 'tests/flaky', '--watchman=false', '--randomize',
    '--testPathIgnorePatterns=/node_modules/', '--json', `--outputFile=${reportFile}`
  ], { stdio: 'ignore' });

  const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
  const failed = report.testResults
    .flatMap((file) => file.assertionResults)
    .filter((t) => t.status === 'failed')
    .map((t) => t.title);

  if (failed.length > 0) redRuns += 1;
  failed.forEach((title) => { failures[title] = (failures[title] || 0) + 1; });
  console.log(`Run ${String(i).padStart(2)}: ${failed.length === 0 ? 'GREEN' : `RED (${failed.length} failed)`}`);
}

fs.rmSync(reportFile, { force: true });
console.log(`\n${runs - redRuns}/${runs} runs green.`);
Object.entries(failures)
  .sort((a, b) => b[1] - a[1])
  .forEach(([title, count]) => console.log(`  failed ${count}/${runs}  ${title}`));
process.exitCode = redRuns > 0 ? 1 : 0;
