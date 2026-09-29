# Taustaülesanne — taustaagent teeb PR-i (2 min andmiseks, ülevaade Plokis C)

**Sisend:** allolev issue tekst, teie fork GitHubis.
**Väljund:** taustaagendi pull request teie forgis (vaadatakse üle Plokis C).

## Kuidas ülesanne anda

| Agent | Kuidas |
|---|---|
| GitHub Copilot | Teie forgis: **Issues → New issue**, kleepige tekst, **Assignees → Copilot** |
| Codex | chatgpt.com/codex → valige oma fork → kleepige tekst → **Code** |
| Claude Code | claude.ai/code → valige oma fork → kleepige tekst |

Copilot Pro+ või Enterprise'i puhul saab sama issue anda ka `@Claude` või `@Codex`
agendile (GitHub Agent HQ, public preview).

**Kui teil taustaagenti pole:** käivitage sama tekst oma tavalises agendis *eraldi
harus* (`git checkout -b fix/orders-400`) ja jätke see pausi ajaks tööle.

## Issue tekst (kopeerige täpselt)

```
Pealkiri: POST /api/orders tagastab vigase ostukorvi korral 500, peaks olema 400

Praegu:
- POST /api/orders kehaga {} → 500 {"error":"Unexpected demo shop error"}
- POST /api/orders kehaga {"cart": []} → 500
- POST /api/orders kehaga {"cart": "x"} → 500

Oodatud:
- Vigane või puuduv ostukorv → 400 ja JSON {"error": "<mis on valesti>"}.
- 500 jääb ainult ootamatute serverivigade jaoks.

Aktsepteerimiskriteeriumid:
1. Kõik kolm ülaltoodud päringut tagastavad 400 ja selge veateate.
2. tests/app.test.js-s on iga juhtumi kohta test.
3. npm test on roheline. Olemasolevaid teste ei ole kustutatud ega nõrgendatud.
4. PR-i kirjelduses on loetelu muudetud failidest ja põhjus iga muudatuse kohta.
```
