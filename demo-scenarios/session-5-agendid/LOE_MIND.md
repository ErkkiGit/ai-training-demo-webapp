# Sessioon 5 — Automaattestimine ja tarkvaraarendusagendid: harjutuste materjalid

Täna töötame **päris koodiga**: selles samas repos on väike Node.js-rakendus (Õnnepood)
ja uus broneeringu hinnamoodul `src/booking/priceCalculator.js`. Hinnareeglid on samad,
mida analüüsisite Sessioonis 4 (`demo-scenarios/session-4-restful-booker/1_Broneeringu_nouded_mustand.md`).
Kõik andmed on väljamõeldud — AI tohib kogu repot vabalt näha.

## Valige üks agent ja kasutage seda terve päeva

| | Claude Code | Codex | GitHub Copilot |
|---|---|---|---|
| Kus töötab | terminal (ka VS Code'i laiendus) | terminal (ka VS Code'i laiendus, rakendus) | VS Code, agent mode |
| Kontekstifail | `CLAUDE.md` | `AGENTS.md` | `.github/copilot-instructions.md` |
| Taustaagent (issue → PR) | Claude Code on the web | Codex cloud | Copilot coding agent |
| CI/CD | `anthropics/claude-code-action` | `openai/codex-action` | Copilot code review, GitHub Agentic Workflows |
| Lokaalne mudel | `ollama launch claude` | `codex --oss` | Ollama laiendus (Ask-režiim) |
| Kui install ei õnnestu | claude.ai | chatgpt.com | Copilot Chat github.com-is |

Paigaldus ja esimesed sammud: `0_Seadistus.md`.

## Alustuseks: tehke repost oma koopia

1. Avage https://github.com/merikris/ai-training-demo-webapp ja vajutage **Fork**
   (oma GitHubi kontole). Nii saate oma koopias PR-e teha ja GitHub Actionsit käivitada.
2. Kloonige **oma** fork: `git clone https://github.com/<teie-kasutaja>/ai-training-demo-webapp.git`
3. Kaustas: `npm install` ja seejärel `npm test` — peab olema roheline (32 testi).

Ilma GitHubi kontota: **Code → Download ZIP**, pakkige lahti ja jätkake samm 3-st.
Ilma Node.js-ita: töötate brauseris (vt iga harjutuse varuvarianti).

## Failid harjutuste kaupa

| Fail / kaust | Harjutus | Plokk |
|---|---|---|
| `0_Seadistus.md` | Harjutus 0 — agent tööle + kontekstifail | A |
| `0_Taustaulesanne_issue.md` | Taustaülesanne — taustaagent teeb PR-i | A → C |
| `src/booking/priceCalculator.js` | Praktika 1 — testikomplekt hinnamoodulile | B |
| `tests/flaky/bookingFlaky.test.js` | Praktika 2 — flaky testide diagnoos ja parandus | C |
| `3_CI_logi_naidis.txt` | Harjutus 3 — CI/CD + AI | D |
| `4_Lokaalne_mudel.md` | Praktika 3 — lokaalne mudel vs pilv | E |
| `PROMPTID.md` | Kõik promptid ja käsud | Kogu päev |

## Kasulikud käsud

| Käsk | Mida teeb |
|---|---|
| `npm test` | Kõik stabiilsed testid (flaky testid ei ole siin sees) |
| `npm run test:flaky` | Flaky testid üks kord, juhuslikus järjekorras |
| `npm run test:repeat -- 10` | Flaky testid 10 korda järjest + kokkuvõte, mis mitu korda kukkus |
| `npx jest tests/booking` | Ainult teie Praktika 1 testid |
