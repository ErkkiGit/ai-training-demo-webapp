# Praktika 3 — Lokaalne mudel vs pilv (individuaalne, 20 min)

**Sisend:** `src/booking/priceCalculator.js`, allolev prompt, lokaalne mudel `qwen3:4b`.
**Väljund:** fail `tests/booking/local.test.js` + täidetud võrdlustabel (allpool).

## Enne koolitust (kodus, ~10 min)

Mudel on 2,5 GB — laadige see alla **enne** koolitust, mitte koolituse WiFi-s.

1. Paigaldage **Ollama**: https://ollama.com/download (macOS, Windows, Linux)
2. Terminalis: `ollama pull qwen3:4b`
3. Kontroll: `ollama run qwen3:4b "Ütle tere eesti keeles"` — vastus tuleb ilma internetita.

Alternatiiv graafilise liidesega: **LM Studio** (https://lmstudio.ai) → otsige „qwen3 4b“ → Download.

Kui arvutisse ei saa midagi paigaldada: töötate koolitusel paarilisega, kellel mudel on,
ja täidate tabeli tema ekraani põhjal.

## Samm 1 — Sama ülesanne lokaalsele mudelile (7 min)

`ollama run qwen3:4b`, seejärel kleepige:

```
Kirjuta Jest testid (JavaScript) funktsioonile calculatePrice allolevas koodis.
Nõuded:
2.1 Saabumine peab olema enne lahkumist.
2.2 Minimaalne peatus on 1 öö, maksimaalne 14 ööd.
4.1 Sissemakse on kohustuslik, kui peatus on üle nädala.
7.1 Püsikliendid (isRegular: true) võivad broneerida kuni 30 ööd.
Piirväärtuste kohta test alla piiri, piiril ja üle piiri. Testi nimi algab nõude numbriga.
Moodul imporditakse nii: const { calculatePrice } = require('../../src/booking/priceCalculator');
Vasta ainult koodiga.

<kleepige siia kogu src/booking/priceCalculator.js sisu>
```

Mõõtke stopperiga aeg vastuse lõpuni. Salvestage kood faili `tests/booking/local.test.js`
ja käivitage: `npx jest tests/booking/local.test.js`.

## Samm 2 — Sama prompt pilveagendile (5 min)

Kleepige **täpselt sama prompt** oma pilvetööriista (Claude / ChatGPT / Copilot Chat).
Salvestage `tests/booking/cloud.test.js` ja käivitage.

## Samm 3 — Võrdlustabel (5 min)

| | Lokaalne (qwen3:4b) | Pilv (__________) |
|---|---|---|
| Aeg vastuse lõpuni (s) | | |
| Kas testifail käivitus ilma parandamata? | | |
| Mitu 3-st peidetud veast testid leidsid? (2.1/2.2, 4.1, 7.1) | | |
| Kuhu teie kood liikus? | ainult teie arvuti | |
| Kulu | 0 € (+ arvuti ressurss) | |
| Kasutaksin seda … | | |

## Samm 4 — Agent lokaalse mudeliga (3 min, valikuline)

| Agent | Käsk |
|---|---|
| Claude Code | `ollama launch claude` (Ollama ≥ 0.14) |
| Codex | `codex --oss -m qwen3:4b` |
| Copilot | VS Code → Ollama laiendus → mudelivalikust `qwen3:4b` (Ask-režiim) |

Andke sama Praktika 1 Samm 1 prompt. Mida märkate? (Vihje: väiksed mudelid
kirjutavad teksti, aga tööriistade kasutamine — failide lugemine, käskude käivitamine —
jääb sageli pooleli. Agentse töö jaoks soovitatakse vähemalt 64K konteksti ja suuremat mudelit.)

## Millal lokaalset mudelit kasutada

| Olukord | Lokaalne | Pilv |
|---|---|---|
| Kliendi kood / andmed, mis ei tohi majast välja | ✅ | ❌ (kui lepingut pole) |
| Internetita keskkond, lennuk, suletud võrk | ✅ | ❌ |
| Keeruline mitme faili muudatus, pikk agentne töö | ⚠️ nõrk | ✅ |
| Kiire ja kvaliteetne vastus avaliku koodi kohta | ⚠️ aeglasem | ✅ |
