# Sessioon 5 — Automaattestimine ja tarkvaraarendusagendid

Täna laseme AI-agendil kirjutada **päris automaatteste**: UI- ja API-teste, ühiktestid
olemasolevale koodile, SQL-andmetestid andmelaole — ning parandame ebastabiilsed testid ja
paneme testid CI-sse. Programmeerimisoskust ei eeldata: koodi kirjutab agent, teie annate
sisendi ja kontrollite tulemust.

Kõik andmed on väljamõeldud või avalikud — AI tohib kogu repot vabalt näha.

## Iga harjutus on kirjeldatud samamoodi

| Väli | Mida tähendab |
|---|---|
| **Eesmärk** | Üks lause: miks me seda teeme |
| **Sisend** | Täpsed failid, millest alustate |
| **Sammud** | Nummerdatud sammud; prompt on failis `PROMPTID.md` sama pealkirja all |
| **Valmis, kui** | Kontrollitav tingimus — siis olete valmis („üheksa korda mõõda, üks kord lõika“) |
| **Arutelus jagate** | Mida arutelus ekraanil näitate |

## Harjutused

| Fail | Harjutus | Kestus |
|---|---|---|
| `0_Seadistus.md` | Harjutus 0 — agent tööle + kontekstifail | 15 min |
| `1_UI_API_automaattestid.md` | Harjutus 1 — agent kirjutab UI- ja API-automaattestid | 40 min |
| `2_Testikomplekt_moodulile.md` | Harjutus 2 — testikomplekt olemasolevale moodulile (rada A: kood, rada B: SQL-andmeladu) | 30 min |
| `3_Flaky_testid.md` | Harjutus 3 — agent parandab flaky testid iseseisvalt (kolmekesi) | 25 min |
| `4_CI_ja_AI.md` | Harjutus 4 — testid CI-sse + AI triaaž | 12 min |
| `5_Lokaalne_mudel.md` | Lokaalne mudel vs pilv — koolitusel demo, kodus valikuline | — |
| (ideede tabel, QR slaidil) | Harjutus 5 — AI-ideed teie projektidest (rühmades) | 10 min |
| `6_Korduvad_ulesanded_ja_skillid.md` | Viitematerjal: agendid ajakava järgi, GitHubi agendid, skill'id | — |
| `PROMPTID.md` | Kõik promptid, samade pealkirjade all | — |

## Alustuseks

1. Avage https://github.com/merikris/ai-training-demo-webapp → **Fork** (oma GitHubi kontole)
2. `git clone https://github.com/<teie-kasutaja>/ai-training-demo-webapp.git`
3. Kaustas: `npm install`, siis `npm run test:stable` → peab olema roheline

Ilma GitHubi kontota: **Code → Download ZIP**. Ilma Node.js-ita: vt iga harjutuse varuvarianti.

## Valige üks agent terveks päevaks

| | Claude Code | Codex | GitHub Copilot |
|---|---|---|---|
| Kus töötab | terminal, VS Code | terminal, VS Code, rakendus | VS Code (agent mode) |
| Kontekstifail (`/init`) | `CLAUDE.md` | `AGENTS.md` | `.github/copilot-instructions.md` |
| Brauseri kasutamine | Claude in Chrome | ChatGPT Browser | VS Code brauseritööriistad |
| Lokaalne mudel | `ollama launch claude` | `codex --oss` | Ollama laiendus (Ask-režiim) |
| Kui install ei õnnestu | claude.ai | chatgpt.com | Copilot Chat github.com-is |

## Kuidas tulemust jagada (rühmatöö ja arutelu)

Vestluse jagamise lingid ei tööta tööriistade vahel usaldusväärselt (nt Codexi jagatud
vestlus avaneb brauseris, aga mitte töölauarakenduses). Seepärast jagame **tulemust, mitte vestlust**:

1. **Kood ja testid → git:** `git checkout -b harjutus3-<nimi>` → `git add -A` → `git commit -m "…"`
   → `git push -u origin harjutus3-<nimi>`. Jagage rühmale haru link oma forgis.
2. **Vestlus failina (kui vaja):** Claude Code'is `/export` → salvestage fail kausta `jagamine/`
   ja lisage samasse commit'i. Codexis ja Copilotis kopeerige agendi viimane kokkuvõte faili.
3. **Ekraanil:** arutelus näitate oma terminali või harusse pushitud faile — mitte jagatud vestlust.

## Käsud

| Käsk | Mida teeb |
|---|---|
| `npm run test:stable` | Stabiilsed ühiktestid (seadistuse kontroll) |
| `npm run test:ui` | Teie UI-testid kaustas `tests/ui/` (Selenium, Chrome) |
| `npm run test:api -- automation/api/<fail>.json` | Teie Postmani kollektsioon Newmaniga |
| `npx jest tests/booking` | Teie hinnamooduli testid (Harjutus 2, rada A) |
| `npm run edw:build` / `npm run edw:test` | Andmeladu ja teie SQL-testid (Harjutus 2, rada B) |
| `npm run edw:test -- --rikutud` | Samad testid meelega rikutud andmetel — hea test peab kukkuma |
| `npm run test:repeat -- 10` | Flaky testid 10 korda + kokkuvõte (Harjutus 3) |
