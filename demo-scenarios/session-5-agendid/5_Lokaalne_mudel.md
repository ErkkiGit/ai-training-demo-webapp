# Lokaalne mudel vs pilv — kodus proovimiseks (valikuline)

Koolitusel näeme seda **demona**. Kui soovite ise proovida, kulub ~20 minutit.

**Eesmärk:** näha oma silmaga, mida lokaalne mudel suudab — et osata otsustada, kus pilve-AI-d kasutada
ei tohi (nt pangaandmed, mis ei tohi EL-ist väljuda) ja kas lokaalsest mudelist piisab.
**Sisend:** lokaalne mudel `qwen3:4b`, fail `src/booking/priceCalculator.js`, prompt `PROMPTID.md` → Lokaalne mudel vs pilv.
**Valmis, kui:** sama prompt on antud lokaalsele ja pilvemudelile, mõlema testid on käivitatud ja tabel on täidetud.

## Paigaldus (~10 min, mudel on 2,5 GB)

1. **Ollama**: https://ollama.com/download
2. Terminalis: `ollama pull qwen3:4b`
3. Kontroll: `ollama run qwen3:4b "Ütle tere eesti keeles"` — vastab ka ilma internetita.

Graafilise liidesega alternatiiv: **LM Studio** (https://lmstudio.ai) → otsige „qwen3 4b“ → Download.

## Sammud

1. **Lokaalne:** `ollama run qwen3:4b` + prompt → salvestage kood faili `tests/booking/local.test.js` → `npx jest tests/booking/local.test.js`. Mõõtke aeg.
2. **Pilv:** sama prompt oma pilvetööriistale → `tests/booking/cloud.test.js` → käivitage.
3. **Tabel:**

| | Lokaalne (qwen3:4b) | Pilv (__________) |
|---|---|---|
| Aeg vastuse lõpuni | | |
| Kas järgis „vasta ainult koodiga“? | | |
| Kas testifail käivitus? | | |
| Mitu 3-st peidetud veast leiti? (2.1/2.2, 4.1, 7.1) — õigel põhjusel? | | |
| Kuhu teie kood liikus? | ainult teie arvuti | |

**Mida koolituse demos nägime (12.10.2026, Apple M-kiip, 16 GB):** üks jooks kestis ~4 minutit ja leidis
kõik 3 viga; teine jooks samal promptil ~6 minutit ning kasutas väljamõeldud välja — testid olid punased
vale põhjusel. Punane test ei tähenda alati leitud viga.

**Valikuline:** agent lokaalse mudeliga — `ollama launch claude` või `codex --oss -m qwen3:4b`.
Väikesed mudelid kirjutavad teksti, aga tööriistade kasutamine jääb sageli pooleli.
