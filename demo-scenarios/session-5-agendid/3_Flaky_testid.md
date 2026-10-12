# Harjutus 3 — Flaky testide diagnoos ja parandus (25 min, kolmekesi)

**Eesmärk:** agent töötab **iseseisvalt**, kuni testid on stabiilsed — teie annate eesmärgi ja piirid ning kontrollite,
et parandus on aus (mitte peidetud retry, pikema ooteaja või skip'iga).
**Sisend:** `tests/flaky/bookingFlaky.test.js`, `src/booking/bookingStore.js`, `src/booking/priceCalculator.js`.
**Valmis, kui:** `npm run test:repeat -- 20` näitab **„20/20 runs green“** ja iga testi F1–F4 kohta on
täidetud rida: test | kategooria | tõend (fail + rida) | parandus.
**Arutelus jagate:** 20/20 väljund + tabel + ühe lausega: kas kõik rühma agendid leidsid sama põhjuse?

**Kuidas kolmekesi töötada:** **igaüks laseb oma agendil kõik neli testi parandada** (kõik teevad sama tööd,
keegi ei tee „käsitsi“). Viimased 4 minutit võrdlete ekraanidelt. Tartu osalejad moodustavad oma rühma videokõnes.

## Sammud (promptid: `PROMPTID.md` → Harjutus 3)

1. **Mõõtke (3 min):** `npm run test:repeat -- 10` — kirjutage üles iga testi kukkumiste arv.
2. **Lubage agendil töötada küsimata (1 min)** — ainult selles harjutusrepos, mitte päris projektis:
   - Claude Code: `Shift+Tab`, kuni olekuribal on automaatne režiim (auto / accept edits)
   - Codex: `/permissions` → **Auto**
   - Copilot (VS Code): chati lubade valikust **Allow all** (ainult selles sessioonis)
3. **Agent töötab ise (12 min):** andke `PROMPTID.md` → Harjutus 3 prompt. Agent diagnoosib, parandab ja
   käivitab `npm run test:repeat -- 20` ise uuesti, kuni tulemus on „20/20 runs green“ — teie ei kinnita samme.
4. **Kontrollige agendi tööd (5 min):** `git diff` (ilma git'ita: paluge agendil näidata kõik muudatused) — kas agent lisas retry, pikendas timeout'i, kasutas skip'i,
   nõrgendas kontrolli või muutis tootekoodi? Kui jah, ei ole see parandus.
5. **Võrdlus (4 min):** kas kõigi agendid leidsid sama põhjuse? Kas mõni üritas „petta“?

**Varuvariant (Node.js puudub):** kleepige kolm faili vestlusesse koos `PROMPTID.md` promptiga ja küsige
20/20 asemel: „Tõesta iga paranduse kohta, miks see ei saa enam juhuslikult kukkuda.“
