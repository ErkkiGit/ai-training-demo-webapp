# Harjutus 3 — Flaky testide diagnoos ja parandus (25 min, kolmekesi)

**Eesmärk:** leida ebastabiilsete testide **juurpõhjus** ja parandada see — mitte peita (retry, pikem ooteaeg, skip).
**Sisend:** `tests/flaky/bookingFlaky.test.js`, `src/booking/bookingStore.js`, `src/booking/priceCalculator.js`.
**Valmis, kui:** `npm run test:repeat -- 20` näitab **„20/20 runs green“** ja iga testi F1–F4 kohta on
täidetud rida: test | kategooria | tõend (fail + rida) | parandus.
**Näitate lõpus:** 20/20 väljund + tabel + ühe lausega: kas kõik rühma agendid leidsid sama põhjuse?

**Kuidas kolmekesi töötada:** **igaüks parandab kõik neli testi oma agendiga** (kõik teevad sama tööd,
keegi ei tee „käsitsi“). Viimased 4 minutit võrdlete. Tulemuse jagamine: oma haru `harjutus3-<nimi>`
(vt `LOE_MIND.md` → Kuidas tulemust jagada). Tartu osalejad moodustavad oma rühma videokõnes.

## Sammud (promptid: `PROMPTID.md` → Harjutus 3)

1. **Mõõtke (3 min):** `npm run test:repeat -- 10` — kirjutage üles iga testi kukkumiste arv.
2. **Diagnoos (8 min):** agent annab iga testi kohta juurpõhjuse, kategooria
   (võidujooks / jagatud olek / aeg-kell / juhuslikud andmed), tõendi ja ütleb, kas viga on testis või koodis.
3. **Parandus (8 min):** ilma retry, pikema timeout'i ja skip'ita; kontrolli ei tohi nõrgendada.
4. **Tõestus (2 min):** `npm run test:repeat -- 20`.
5. **Võrdlus (4 min):** sama põhjus? Kas mõni agent üritas „parandada“ retry'ga?

**Varuvariant (Node.js puudub):** kleepige kolm faili vestlusesse, tehke samm 2 ja küsige sammu 4 asemel:
„Tõesta iga paranduse kohta, miks see ei saa enam juhuslikult kukkuda.“
