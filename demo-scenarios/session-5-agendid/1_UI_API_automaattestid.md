# Harjutus 1 — Agent kirjutab UI- ja API-automaattestid (40 min, individuaalne)

**Eesmärk:** muuta Sessioon 4 käsitsi stsenaariumid automaattestideks, mis jooksevad edaspidi
**ilma AI-ta** — iga öö, iga PR-i juures. Koodi kirjutab agent; teie annate stsenaariumi ja kontrollite tulemust.

**Sisend:**
- UI: `demo-scenarios/session-4-restful-booker/7_Brauseri_stsenaariumid.md` (S1–S3)
- API: `demo-scenarios/session-4-restful-booker/3_API_testi_kontrollnimekiri.md`
- Süsteem: https://automationintesting.online (UI) ja https://restful-booker.herokuapp.com (API)

**Valmis, kui:** (1) teil on vähemalt **2 UI-testi ja 2 API-testi**, mis käivituvad ühe käsuga;
(2) **S1 on roheline**; (3) **nõude 2.1 test (lahkumine enne saabumist) on punane** — see on päris viga,
mille leidsite Sessioon 4-s käsitsi; (4) iga punase testi kohta oskate öelda: viga süsteemis või testis.

**Arutelus jagate:** käsu väljund (rohelised + punane) ja ühe testi kood koos selgitusega, mida see kontrollib.

## Agent kui testija vs agent kui autor

| | Sessioon 4: agent **testib** | Täna: agent **kirjutab testi** |
|---|---|---|
| Kuidas töötab | Agent avab brauseri ja käib stsenaariumi läbi | Agent kirjutab skripti; skript jookseb ise |
| Iga jooks | vajab agenti (aeg, raha, võib otsustada eri moodi) | sekundid, iga kord ühtemoodi, AI-d pole vaja |
| Sobib | uurimiseks, ühekordseks kontrolliks | regressiooniks, CI-ks, igaööseks jooksuks |

## Valige raamistik (sama, mida kasutate tööl)

| Rada | Raamistik | Käivitus | Märkus |
|---|---|---|---|
| UI | **Selenium (JavaScript)** — repos valmis | `npm run test:ui` | Kasutab teie Chrome'i. Failid kausta `tests/ui/` |
| UI | Selenide / Selenium (Java) | teie projekti käsk | Kui teil on Java-projekt juba seadistatud |
| UI | Playwright / Cypress | teie projekti käsk | Kui kasutate neid tööl |
| API | **Postmani kollektsioon** — repos valmis | `npm run test:api -- automation/api/<fail>.json` | Saab avada ka Postmani rakenduses (Import) |
| API | REST Assured / muu | teie projekti käsk | Kui kasutate seda tööl |

## Sammud

1. **Agent uurib (5 min)** — lubage agendil avada leht ja käia S1 läbi, et ta näeks päris välju ja nuppe
   (`PROMPTID.md` → Harjutus 1, samm 1). Ilma brauseritööriistata: kleepige stsenaarium ja lehe URL.
2. **UI-testid (15 min)** — agent kirjutab S1, S2, S3 testideks ja käivitab need (samm 2).
3. **API-testid (10 min)** — agent kirjutab kontrollnimekirja põhjal vähemalt 2 testi ja käivitab need (samm 3).
4. **Kontrollige agenti (7 min)** — iga testi kohta: kas see saab kukkuda? Laske agendil üks oodatav
   tulemus ajutiselt valeks muuta ja vaadake, et test läheb punaseks (samm 4).
5. **Salvestage (3 min)** — `git` haru `harjutus1-<nimi>` (vt `LOE_MIND.md` → Kuidas tulemust jagada).

**Testandmed:** eesnimi `Test`, perenimi `Koolitus`, e-post `test@example.com`, telefon `+37255500000`.
Süsteem on avalik ja jagatud — kasutage juhuslikke kuupäevi vähemalt 3 kuud ette, et teie broneering
ei põrkuks kellegi teise omaga.

**Varuvariant (Node.js või brauser ei tööta):** API-rada Postmani rakenduses — agent kirjutab
kollektsiooni JSON-faili, teie impordite selle Postmani ja vajutate **Run**.
