// Mini data warehouse for Session 5 (Node's built-in SQLite, no installs).
//   npm run edw:build                      build edw/edw.db from staging + transform
//   npm run edw:sql -- "SELECT ..."        run one query (or a path to a .sql file)
//   npm run edw:test                       run every edw/tests/*.sql: green = 0 rows
//   npm run edw:test -- --rikutud          same, on deliberately broken data (edw/rikutud_andmed.sql)
const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const dir = path.join(__dirname, '..', 'edw');
const dbFile = path.join(dir, 'edw.db');
const read = (name) => fs.readFileSync(path.join(dir, name), 'utf8');

function build(sabotage = false) {
  fs.rmSync(dbFile, { force: true });
  const db = new DatabaseSync(dbFile);
  db.exec(read('staging.sql'));
  db.exec(read('transform.sql'));
  if (sabotage) db.exec(read('rikutud_andmed.sql'));
  return db;
}

function printRows(rows) {
  if (rows.length === 0) { console.log('(0 rida)'); return; }
  console.table(rows.map((r) => ({ ...r })));
}

const [cmd, ...args] = process.argv.slice(2);

if (cmd === 'build') {
  const db = build();
  for (const t of ['dim_room', 'fact_booking', 'reject_booking']) {
    console.log(`${t}: ${db.prepare(`SELECT COUNT(*) AS n FROM ${t}`).get().n} rida`);
  }
} else if (cmd === 'sql') {
  const input = args.join(' ');
  const sql = fs.existsSync(input) ? fs.readFileSync(input, 'utf8') : input;
  const db = fs.existsSync(dbFile) ? new DatabaseSync(dbFile) : build();
  printRows(db.prepare(sql).all());
} else if (cmd === 'test') {
  const sabotage = args.includes('--rikutud');
  const db = build(sabotage);
  const testDir = path.join(dir, 'tests');
  const files = fs.existsSync(testDir) ? fs.readdirSync(testDir).filter((f) => f.endsWith('.sql')).sort() : [];
  if (files.length === 0) { console.log('Teste pole: lisage failid kausta edw/tests/ (üks test = üks .sql fail).'); process.exit(1); }
  console.log(sabotage ? 'RIKUTUD ANDMED: hea test peab siin olema PUNANE\n' : 'PUHTAD ANDMED\n');
  let red = 0;
  for (const f of files) {
    let rows;
    try { rows = db.prepare(fs.readFileSync(path.join(testDir, f), 'utf8')).all(); }
    catch (e) { console.log(`VIGA     ${f}: ${e.message}`); red += 1; continue; }
    const ok = rows.length === 0;
    if (!ok) red += 1;
    const note = sabotage && ok ? '   <- ei kuku läbi ka rikutud andmetel: kas see test üldse kontrollib midagi?' : '';
    console.log(`${ok ? 'ROHELINE' : 'PUNANE  '} ${f}${ok ? '' : ` (${rows.length} rida)`}${note}`);
  }
  console.log(`\n${files.length - red}/${files.length} rohelised`);
  process.exitCode = red > 0 ? 1 : 0;
} else {
  console.log('Kasutus: npm run edw:build | npm run edw:sql -- "SELECT ..." | npm run edw:test [-- --rikutud]');
}
