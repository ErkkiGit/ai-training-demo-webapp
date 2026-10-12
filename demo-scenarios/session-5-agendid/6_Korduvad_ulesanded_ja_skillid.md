# Korduvad ülesanded ja skill'id — viitematerjal

Seis 12.10.2026. Funktsioonid muutuvad kiiresti — kontrollige enne kasutamist ametlikust dokumentatsioonist.

## Põhimõte: üheksa korda mõõda, üks kord lõika

Iga ülesanne, mille agent teeb ise (ajakava järgi või sündmuse peale), vajab enne käivitamist:

1. **Eesmärki** — mis on valmis tulemus?
2. **Mõõdupuud** — kuidas te näete, et tulemus on õige? (test, 0-rea päring, checklist)
3. **Piire** — mida agent ei tohi teha (nt merge, kustutamine, LIVE-andmete muutmine)

Agent töötab teie nimel: tema commit'id, PR-id ja sõnumid on teie nimega. Vastutus jääb teile.

## Keskne CI vs isiklik agent

| | Keskne CI (GitHub Actions, GitLab CI, CircleCI) | Isiklik agent ajakavas |
|---|---|---|
| Kellele | Kogu meeskond | Teile endale |
| Näide | Testid igal PR-il, blokeerib merge'i | Hommikune kokkuvõte öistest punastest testidest |
| Reegel | Peab kehtima kõigile | Aitab teie tööd |

## Kus agent jookseb ja kas arvuti peab olema sees

| Võimalus | Kus jookseb | Arvuti sees? | Käivitaja |
|---|---|---|---|
| Claude Code `/loop` | teie arvuti, avatud sessioon | jah | intervall (≥ 1 min) |
| Claude Desktop ajastatud ülesanne | teie arvuti, kohalikud failid | jah, app avatud (vahelejäänud jooks → üks järelkäivitus ärkamisel) | ajakava |
| Claude Code routine (research preview) | Anthropicu pilv, repo värske kloon | ei | ajakava (≥ 1 h), API-kutse, GitHubi PR/release |
| Codexi ajastatud ülesanne | teie arvuti (worktree) või pilv | jah, kui vajab kohalikke faile | ajakava, sündmused (sõltub plaanist) |
| GitHub Actions / Agentic Workflows | GitHubi pilv | ei | push, PR, cron |
| OpenAI Dots (29.09.2026) | OpenAI pilv, agendi oma pilvearvuti | ei | eesmärk; suhtlus ChatGPT, Slack, Teams |
| n8n | teie server või n8n cloud | server peab jooksma | ajakava, sündmused — ehitamine Töötoas 2 |

Allikad: [Claude Code routines](https://code.claude.com/docs/en/routines) ·
[Claude Desktop scheduled tasks](https://code.claude.com/docs/en/desktop-scheduled-tasks) ·
[Codex scheduled tasks](https://learn.chatgpt.com/docs/automations) ·
[GitHub Agentic Workflows](https://github.github.com/gh-aw/) ·
[OpenAI Dots (TechCrunch, 29.09.2026)](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/)

## Agendid GitHubis igal push'il ja PR-il

| Tööriist | Mida teeb |
|---|---|
| Copilot code review | Automaatne PR-i ülevaatus `.github/copilot-instructions.md` järgi |
| [claude-code-action](https://code.claude.com/docs/en/github-actions) / [openai/codex-action](https://developers.openai.com/codex/github-action) | Agent GitHub Actionsi sammuna: ülevaatus, parandus, triaaž |
| [GitHub Agentic Workflows](https://github.github.com/gh-aw/) | Workflow Markdownis; nt CI Doctor (uurib kukkunud CI-d), Test Improver (lisab teste) |
| Claude Code routine + GitHubi päästik | Jookseb `pull_request.opened` peale teie checklistiga |
| Dependabot | Sõltuvuste uuenduste PR-id (ei ole AI) — agent võib need üle vaadata |

## Näited: korduvad QA-ülesanded

- **Iga hommik:** öiste testide punased → kokkuvõte ja kategooria (viga / flaky / keskkond)
- **Iga päev:** eilsed merge'id läbi teie review-checklisti → kommentaarid, mitte merge
- **Iga nädal:** sõltuvuste kontroll (`npm audit`, `npm outdated`) → kokkuvõte + uuenduse PR
- **Iga nädal:** `npm run test:repeat -- 20` → kas mõni test on muutunud flaky'ks
- **Andmeladu:** pärast öist laadimist 0-rea testid + kokkuvõte, mis muutus

## Skill'id (SKILL.md)

Skill on kaust failiga `SKILL.md` (juhis + valikulised skriptid). Avatud standard
([agentskills.io](https://agentskills.io)) töötab Claude Code'is, Codexis ja GitHub Copilotis.

| Repo | Mis seal on |
|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | Anthropicu ametlikud skill'id, sh `webapp-testing` |
| [openai/skills](https://github.com/openai/skills) | Codexi ametlik kataloog |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | Kogukonna kogu Copilotile, sh `sql-code-review`; `gh skills install github/awesome-copilot <nimi>` |
| [dbt-labs/dbt-agent-skills](https://github.com/dbt-labs/dbt-agent-skills) | dbt ametlikud skill'id, sh `adding-dbt-unit-test` |
| [Snowflake-Labs/coco-skills](https://github.com/Snowflake-Labs/coco-skills) | Cortex Code'i (CoCo) skill'id; CoCo-s endas palju sisseehitatud skill'e (`/skill`) |

**Enne paigaldamist lugege skill läbi** — see on juhis ja skriptid, mis jooksevad teie õigustega.

## Uued testid nagu olemasolevad

1. Laske agendil lugeda olemasolevad testid ja kirjutada stiilijuhis (nimed, struktuur, kontrollid, testandmed).
2. Pange juhis kontekstifaili või skill'i.
3. Iga uus test järgib juhist. Kui tulemus ei näe välja nagu kolleegi kirjutatud — täiendage juhist, mitte testi.
