# Harjutus 5 — Lokaalne mudel vs pilv (15 min, individuaalne)

**Eesmärk:** näha oma silmaga, mida lokaalne mudel suudab — et osata otsustada, kus pilve-AI-d kasutada ei tohi
(nt pangaandmed, mis ei tohi EL-ist väljuda).
**Sisend:** lokaalne mudel `qwen3:4b`, fail `src/booking/priceCalculator.js`, prompt `PROMPTID.md` → Harjutus 5.
**Valmis, kui:** sama prompt on antud lokaalsele ja pilvemudelile, mõlema testid on käivitatud ja
võrdlustabel (allpool) on täidetud.
**Näitate lõpus:** võrdlustabel + üks lause: millise oma tööülesande jaoks lokaalsest mudelist piisaks.

## Enne koolitust (kodus, ~10 min — mudel on 2,5 GB)

1. Paigaldage **Ollama**: https://ollama.com/download
2. Terminalis: `ollama pull qwen3:4b`
3. Kontroll: `ollama run qwen3:4b "Ütle tere eesti keeles"` — vastab ka ilma internetita.

Graafilise liidesega alternatiiv: **LM Studio** (https://lmstudio.ai) → otsige „qwen3 4b“ → Download.

## Sammud

1. **Lokaalne (6 min):** `ollama run qwen3:4b` + prompt → salvestage `tests/booking/local.test.js` → `npx jest tests/booking/local.test.js`. Mõõtke aeg.
2. **Pilv (4 min):** sama prompt oma pilvetööriistale → `tests/booking/cloud.test.js` → käivitage.
3. **Tabel (5 min):**

| | Lokaalne (qwen3:4b) | Pilv (__________) |
|---|---|---|
| Aeg vastuse lõpuni (s) | | |
| Kas testifail käivitus ilma parandamata? | | |
| Mitu 3-st peidetud veast testid leidsid? (2.1/2.2, 4.1, 7.1) | | |
| Kuhu teie kood liikus? | ainult teie arvuti | |
| Kasutaksin seda … | | |

**Valikuline:** agent lokaalse mudeliga — `ollama launch claude` (Ollama ≥ 0.14) või `codex --oss -m qwen3:4b`.
Väikesed mudelid kirjutavad teksti, aga tööriistade kasutamine jääb sageli pooleli.

**Varuvariant (mudelit pole):** töötage kolleegiga, kellel see on, ja täitke tabel tema ekraani põhjal.
