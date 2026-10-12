# Harjutus 2 — Testikomplekt olemasolevale moodulile (30 min, individuaalne)

Valige **üks rada** — see, mis on lähem teie tööle.

| | Rada A — kood | Rada B — SQL-andmeladu |
|---|---|---|
| Kellele | UI/API/äriloogika testijad | EDW / Snowflake / dbt testijad |
| Moodul | `src/booking/priceCalculator.js` | `edw/transform.sql` (staging → dim/fact/reject) |
| Nõuded | `demo-scenarios/session-4-restful-booker/1_Broneeringu_nouded_mustand.md` | `edw/LDM.md` (reeglid R1–R9) |
| Testid | Jest → `tests/booking/priceCalculator.test.js` | 0-rea SQL-testid → `edw/tests/R<nr>_<nimi>.sql` |
| Käivitus | `npx jest tests/booking` | `npm run edw:test` |

---

## Rada A — hinnamoodul

**Eesmärk:** agent kirjutab olemasolevale koodile testid nõuete järgi ja testid leiavad päris vead.
**Sisend:** `src/booking/priceCalculator.js` + nõuded 2.1, 2.2, 3.1, 3.2, 3.4, 4.1, 4.2, 7.1.
**Valmis, kui:** iga nimetatud nõude kohta on vähemalt üks test; iga punase testi kohta on otsus
„viga koodis / viga testis“; refaktoori järel on punaseid täpselt sama palju kui enne.
**Arutelus jagate:** `npx jest tests/booking` väljund + punaste testide tabel.

**Sammud** (promptid: `PROMPTID.md` → Harjutus 2, rada A)
1. **Kaart (5 min):** agent teeb tabeli funktsioon | nõue ja loetelu nõuetest, mille kontrolli koodis pole.
2. **Testid (12 min):** agent kirjutab testid nõuete järgi ja käivitab need. Ta ei paranda midagi.
3. **Triaaž (8 min):** iga punane test — viga koodis või testis? Koodivea kohta bug report'i pealkiri.
4. **Refaktoor (5 min):** nädalavahetuse hinnaloogika ühte abifunktsiooni; punaste arv ei muutu.

**Codexi kasutajad (kohustuslik, 3 min):** tehke samm 1 ka Claude'i või GitHub Copilotiga ja kirjutage
üles üks erinevus (`PROMPTID.md` → Harjutus 2, rada A).

## Rada B — andmeladu

**Eesmärk:** agent kirjutab LDM-i järgi 0-rea testid — ja te tõestate, et iga test **suudab kukkuda**.
**Sisend:** `edw/LDM.md` (R1–R9), `edw/transform.sql`, staging `edw/staging.sql`.
**Valmis, kui:** iga reegli R1–R9 kohta on test; `npm run edw:test -- --rikutud` näitab **kõik testid punasena**;
iga puhaste andmete punase testi kohta on otsus „viga teisenduses / viga testis“.
**Arutelus jagate:** `npm run edw:test` ja `npm run edw:test -- --rikutud` väljund + vigade tabel.

**Sammud** (promptid: `PROMPTID.md` → Harjutus 2, rada B)
1. **Ehitage ja vaadake (3 min):** `npm run edw:build`; agent selgitab, mida `transform.sql` teeb.
2. **Testid (12 min):** üks fail reegli kohta (`edw/tests/R1_….sql` …). Test = päring, mis tagastab
   vigased read; **0 rida = roheline**. Käivitage `npm run edw:test`.
3. **Kas test suudab kukkuda? (7 min):** `npm run edw:test -- --rikutud` laadib meelega rikutud andmed.
   Test, mis jääb siin roheliseks, ei kontrolli midagi — laske agendil see ümber kirjutada.
4. **Triaaž (8 min):** iga puhaste andmete punane test — viga teisenduses või testis? Mitu punast testi
   võib tulla **samast juurpõhjusest**.

Andmed on väljamõeldud ja kohalikud — erinevalt LIVE-koopiast saate neid siin vabalt rikkuda ja parandada.

**Varuvariant (Node.js puudub):** kleepige `LDM.md` ja `transform.sql` vestlusesse ja laske agendil
näidata iga reegli kohta, millised staging-read selle rikuksid.
