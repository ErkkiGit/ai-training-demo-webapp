# Harjutus 0 — Agent tööle + kontekstifail (15 min, individuaalne)

**Eesmärk:** agent töötab teie repos ja teab teie testimise reegleid ilma, et peaksite neid iga kord kordama.
**Sisend:** teie fork sellest repost (vt `LOE_MIND.md` → Alustuseks).
**Valmis, kui:** pärast agendi taaskäivitust vastab ta küsimusele „Kust sa tead, mis on testi oodatav tulemus?“ viitega nõuete failile.
**Näitate lõpus:** oma kontekstifaili jaotist „Testimise reeglid“.

## Sammud

**1. Paigaldage agent (5 min)**

| Agent | Paigaldus | Käivitus |
|---|---|---|
| Claude Code | macOS/Linux: `curl -fsSL https://claude.ai/install.sh \| bash` · Windows PowerShell: `irm https://claude.ai/install.ps1 \| iex` | repo kaustas: `claude` |
| Codex | `npm i -g @openai/codex` (macOS ka `brew install codex`) | repo kaustas: `codex` |
| GitHub Copilot | VS Code + laiendus „GitHub Copilot“ | Copilot Chat → režiim **Agent** |

Kontroll: küsige „Mis rakendus selles repos on? Vasta 3 lausega.“ — vastus mainib Expressi, tooteid ja tellimusi.

**2. Looge kontekstifail (5 min):** kõigil kolmel on sama käsk `/init`
(→ `CLAUDE.md` / `AGENTS.md` / `.github/copilot-instructions.md`).

**3. Lisage testimise reeglid (3 min):** `PROMPTID.md` → Harjutus 0.

**4. Kontrollige (2 min):** sulgege agent, avage uuesti, küsige „Kust sa tead, mis on testi oodatav tulemus?“

**Varuvariant (install ei õnnestu 5 minutiga, nt Citrix):** kasutage sama tootja veebiversiooni
(claude.ai / chatgpt.com / Copilot Chat github.com-is) ja kleepige failide sisu vestlusesse.
Võimalusel töötage koos kolleegiga, kelle arvutis agent töötab.
