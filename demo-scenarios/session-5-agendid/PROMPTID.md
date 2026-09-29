# Promptid ja käsud — Sessioon 5

Kõik promptid töötavad Claude Code'is, Codexis ja Copilot agent mode'is ühtemoodi:
kleepige prompt agendile repo juurkaustas. Veebiversioonis (claude.ai / chatgpt.com /
Copilot Chat) lisage vestlusesse ka nimetatud failide sisu.

---

## Harjutus 0 — Kontekstifail

Pärast `/init` käsku:

```
Lisa kontekstifaili (CLAUDE.md / AGENTS.md / .github/copilot-instructions.md) jaotis
"Testimise reeglid" täpselt nende neljaga:
1. Testid on Jestis, failid kaustas tests/, nimi <moodul>.test.js.
2. Rahasummad on sentides (täisarvud), kuupäevad YYYY-MM-DD UTC-s.
3. Äriloogika reeglid on failis demo-scenarios/session-4-restful-booker/1_Broneeringu_nouded_mustand.md.
   Testi oodatav tulemus tuleb nõudest, mitte koodist.
4. Kui test kukub, ära muuda oodatavat tulemust ilma minult küsimata.
Ära muuda midagi muud.
```

---

## Praktika 1 — Testikomplekt hinnamoodulile (30 min)

**Sisend:** `src/booking/priceCalculator.js` + nõuded 2.1, 2.2, 3.1, 3.2, 3.4, 4.1, 4.2, 7.1
failist `demo-scenarios/session-4-restful-booker/1_Broneeringu_nouded_mustand.md`.
**Väljund:** fail `tests/booking/priceCalculator.test.js` + tabel „punased testid“ + refaktooritud moodul.

**Samm 1 — Navigeeri (5 min):**
```
Loe src/booking/priceCalculator.js. Ära muuda midagi.
Tee tabel: funktsioon | sisendid | väljund | milliseid nõudeid failist
1_Broneeringu_nouded_mustand.md see funktsioon katab (nõude number).
Eraldi loetelu: nõuded 2.1, 2.2, 3.1, 3.2, 3.4, 4.1, 4.2, 7.1, mille kontrolli sa koodist EI leia.
```

**Samm 2 — Kirjuta testid (12 min):**
```
Kirjuta fail tests/booking/priceCalculator.test.js.
Iga nõude 2.1, 2.2, 3.1, 3.2, 3.4, 4.1, 4.2, 7.1 kohta vähemalt üks test,
piirväärtustega nõuetel (2.2, 4.1, 7.1) test vahetult alla piiri, piiril ja üle piiri.
Testi nimi algab nõude numbriga, nt "4.1 ...".
Oodatav tulemus tuleb nõudest, mitte koodist. Kui nõue on mitmeti mõistetav,
kirjuta testi kohale kommentaar "KÜSIMUS:" ja vali rangem tõlgendus.
Käivita: npx jest tests/booking. Ära paranda midagi — ütle ainult, mis kukkus.
```

**Samm 3 — Triaaž (5 min):**
```
Iga punase testi kohta: kas viga on koodis või testis?
Tabel: test | nõue | oodatud | tegelik | viga koodis / viga testis | üks lause, miks.
Koodivigade kohta kirjuta bug report'i pealkiri (max 12 sõna).
```

**Samm 4 — Refaktoor (5 min):**
```
Funktsioonides calculatePrice ja quoteNightly on nädalavahetuse hinna loogika kahes kohas.
Tõsta see ühte abifunktsiooni. Ära muuda käitumist ega paranda vigu.
Käivita enne ja pärast: npx jest tests/booking — rohelisi ja punaseid teste
peab olema täpselt sama palju.
```

**Samm 5 — Teine agent (3 min, kohustuslik ainult Codexi kasutajatele):**
Kleepige Samm 1 prompt ja `priceCalculator.js` sisu kas **Claude'i** (claude.ai või
Claude Code) või **GitHub Copiloti** (Copilot Chat github.com-is või VS Code'is) vestlusesse.
Kirjutage üles üks asi, mida see leidis teisiti kui Codex.

**Kui Node.js puudub:** tehke sammud 1–3 veebiversioonis; „käivita“ asemel küsige:
„Millised neist testidest praeguse koodiga kukuksid ja miks? Näita arvutust.“

---

## Praktika 2 — Flaky testid (kolmeses rühmas, 30 min)

**Sisend:** `tests/flaky/bookingFlaky.test.js`, `src/booking/bookingStore.js`, `src/booking/priceCalculator.js`.
**Väljund:** parandatud testifail + tabel + tõend: 20/20 käivitust rohelised.

Rühmas võimalusel erinevad agendid — igaüks parandab kõik testid oma agendiga,
lõpus võrdlete.

**Samm 1 — Mõõda (3 min):** `npm run test:repeat -- 10`
Kirjutage üles: mitu käivitust 10-st olid rohelised, iga testi kukkumiste arv.

**Samm 2 — Diagnoos (10 min):**
```
Testid failis tests/flaky/bookingFlaky.test.js kukuvad juhuslikult.
Mõõtmise tulemus (10 käivitust): <kleepige npm run test:repeat väljund>.
Iga testi F1–F4 kohta:
1. juurpõhjus ühe lausega,
2. kategooria: võidujooks (race) / jagatud olek / aeg-kell / juhuslikud andmed / muu,
3. tõend koodist (fail + rida),
4. kas viga on testis või tootekoodis.
Ära veel midagi muuda.
```

**Samm 3 — Paranda (10 min):**
```
Paranda testid F1–F4 nii, et need on deterministlikud.
Reeglid: ära lisa retry'd, ära pikenda timeout'e, ära kustuta ega jäta vahele ühtegi testi,
ära nõrgenda kontrolli, mida test kontrollib. Kui test kontrollib valet asja, ütle seda
ja paku õige kontroll. Muuda ainult testifaili, kui tootekoodis pole viga.
```

**Samm 4 — Tõesta (3 min):** `npm run test:repeat -- 20` → peab olema `20/20 runs green`.

**Samm 5 — Võrdle rühmas (4 min):** kas kõik agendid leidsid sama juurpõhjuse?
Kas mõni agent „parandas“ testi retry, pikema ooteaja või `skip`-iga?

**Kui Node.js puudub:** kleepige kolme faili sisu vestlusesse ja tehke Samm 2;
Samm 4 asemel küsige: „Tõesta iga paranduse kohta, miks see ei saa enam juhuslikult kukkuda.“

---

## Plokk C — Taustaagendi PR-i ülevaatus (10 min)

Avage oma forgis taustaagendi PR (või haru `fix/orders-400`). Kontrollige:

1. Kas kõik 4 aktsepteerimiskriteeriumit on täidetud? (issue tekstist)
2. Kas mõni olemasolev test on kustutatud või nõrgendatud? (`git diff main -- tests/`)
3. Kas agent muutis faile, mida issue ei nõudnud?
4. Kas `npm test` on teie masinas roheline?

Otsus: **merge** / **muutused vajalikud** (kirjutage PR-i kommentaar, agent parandab) / **sulge**.

---

## Harjutus 3 — CI/CD + AI (paaris, 15 min)

**Sisend:** teie fork, `3_CI_logi_naidis.txt`.
**Väljund:** `.github/workflows/tests.yml` + AI-triaaži tabel CI logist.

**Samm 1 — Workflow (6 min):**
```
Loo .github/workflows/tests.yml:
- käivitub igal push'il ja pull request'il,
- ubuntu-latest, Node.js 24, npm ci,
- töö "tests": npm test (peab olema roheline, muidu PR-i ei saa merge'ida),
- töö "flaky-karantiin": npm run test:repeat -- 5, continue-on-error: true
  (flaky testid ei blokeeri, aga tulemus on nähtav).
Selgita iga rida ühe lausega.
```
Push forki → **Actions** vahekaart: kas „tests“ on roheline?

**Samm 2 — AI triaaž CI logist (6 min, kõigile):**
```
Lisatud on GitHub Actionsi logi (3_CI_logi_naidis.txt).
Iga kukkunud testi kohta: tabel test | viga koodis / flaky / keskkond / test on vale |
tõend logist (rea tsitaat) | järgmine samm.
Lõpus üks lause: kas selle PR-i võib merge'ida?
```

**Samm 3 — AI samm pipeline'i (3 min, valikuline):** vaadake oma agendi ametlikku juhendit
ja arutage paarilisega, millisesse workflow sammu see sobiks:
- Claude Code: https://code.claude.com/docs/en/github-actions (`anthropics/claude-code-action`)
- Codex: https://developers.openai.com/codex/github-action (`openai/codex-action`)
- Copilot: automaatne Copilot code review igal PR-il (repo Settings → Rules) ja
  GitHub Agentic Workflows (https://github.github.com/gh-aw/)

NB: Claude'i ja Codexi action vajab API-võtit GitHubi *secret*'ina — ärge kunagi pange
võtit workflow faili endasse.

---

## Praktika 3 — Lokaalne mudel vs pilv (20 min)

Vt `4_Lokaalne_mudel.md`.
