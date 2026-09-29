# Harjutus 0 — Agent tööle ja kontekstifail (15 min)

**Sisend:** teie fork sellest repost (vt `LOE_MIND.md`).
**Väljund:** töötav agent + kontekstifail repo juurkaustas, mida agent ise loeb.

## Samm 1 — Paigaldage oma agent (5 min)

| Agent | Paigaldus | Käivitus | Konto |
|---|---|---|---|
| Claude Code | macOS/Linux: `curl -fsSL https://claude.ai/install.sh \| bash` · Windows PowerShell: `irm https://claude.ai/install.ps1 \| iex` | repo kaustas: `claude` | Claude Pro/Max/Team või API |
| Codex | `npm i -g @openai/codex` (macOS ka `brew install codex`) | repo kaustas: `codex` | ChatGPT Plus/Pro/Business või API |
| GitHub Copilot | VS Code + laiendus „GitHub Copilot“ | Copilot Chat → režiim **Agent** | GitHubi konto, millel on Copilot |

Kontroll: küsige agendilt „Mis rakendus selles repos on? Vasta 3 lausega.“
Kui vastus mainib Expressi, tooteid ja tellimusi — agent näeb repot.

**Kui paigaldus ei õnnestu** (nt Citrix, administraatori õigused): kasutage sama
tootja veebiversiooni (claude.ai / chatgpt.com / Copilot Chat github.com-is) ja kleepige
failide sisu vestlusesse. Harjutused töötavad ka nii, lihtsalt aeglasemalt.

## Samm 2 — Kontekstifail (8 min)

| Agent | Käsk | Fail |
|---|---|---|
| Claude Code | `/init` | `CLAUDE.md` |
| Codex | `/init` | `AGENTS.md` |
| Copilot | Copilot Chatis: `/init` | `.github/copilot-instructions.md` |

Kõigil kolmel on sama käsk: agent loeb repo läbi ja kirjutab esimese versiooni ise.

Seejärel paluge agendil lisada faili täpselt need 4 reeglit (prompt: `PROMPTID.md` → Harjutus 0):

1. Testid on Jestis, failid kaustas `tests/`, nimi `<moodul>.test.js`.
2. Rahasummad on sentides (täisarvud), kuupäevad `YYYY-MM-DD` UTC-s.
3. Äriloogika reeglid on failis `demo-scenarios/session-4-restful-booker/1_Broneeringu_nouded_mustand.md` —
   testi oodatav tulemus tuleb nõudest, mitte koodist.
4. Kui test kukub, ära muuda oodatavat tulemust ilma küsimata.

Kontroll: sulgege agent, avage uuesti ja küsige: „Kust sa tead, mis on testi oodatav tulemus?“
Õige vastus viitab nõuete failile.

## Samm 3 — Andke taustaagendile ülesanne (2 min)

Vt `0_Taustaulesanne_issue.md`. Agent töötab sel ajal, kui teie teete Praktika 1 ja 2.
Vaatame tema PR-i üle Plokis C.
