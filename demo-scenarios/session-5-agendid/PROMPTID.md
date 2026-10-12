# Promptid — Sessioon 5

Pealkirjad on samad mis harjutuste failides (`0_…` kuni `5_…`). Kleepige prompt agendile repo
juurkaustas. Veebiversioonis (claude.ai / chatgpt.com / Copilot Chat) lisage ka nimetatud failide sisu.

---

## Harjutus 0 — Agent tööle + kontekstifail

Pärast `/init`, **samm 3a — stiilijuhis olemasolevatest testidest:**
```
Loe kõik olemasolevad testifailid kaustas tests/ (mitte tests/flaky/). Ära muuda neid.
Kirjuta kontekstifaili jaotis "Testide stiil": failide ja testide nimetamine, describe/test struktuur,
kuidas testandmed luuakse, millised kontrollid (expect) on tavalised, mida välditakse.
Iga reegli juurde üks lühike näide olemasolevast testist. Max 15 rida.
```

**Samm 3b — testimise reeglid:**
```
Lisa kontekstifaili (CLAUDE.md / AGENTS.md / .github/copilot-instructions.md) jaotis
"Testimise reeglid" täpselt nende neljaga:
1. Testid on Jestis, failid kaustas tests/, nimi <moodul>.test.js. SQL-testid on kaustas edw/tests/.
2. Rahasummad on sentides (täisarvud), kuupäevad YYYY-MM-DD UTC-s.
3. Äriloogika on failides demo-scenarios/session-4-restful-booker/1_Broneeringu_nouded_mustand.md
   ja edw/LDM.md. Testi oodatav tulemus tuleb nõudest, mitte koodist.
4. Kui test kukub, ära muuda oodatavat tulemust ilma minult küsimata.
Ära muuda midagi muud.
```

---

## Harjutus 1 — Agent kirjutab UI- ja API-automaattestid

**Samm 1 — uuri lehte** (brauseritööriistaga agent):
```
Ava https://automationintesting.online/reservation/1?checkin=2027-05-10&checkout=2027-05-12
ja vajuta "Reserve Now". Kirjelda mulle: millised väljad vormil on (placeholder'id),
millised nupud, mis tekst kuvatakse pärast edukat broneeringut. Ära veel teste kirjuta.
```

**Samm 2 — UI-testid:**
```
Kirjuta stsenaariumide S1, S2 ja S3 kohta failist
demo-scenarios/session-4-restful-booker/7_Brauseri_stsenaariumid.md automaattestid.
Raamistik: <Selenium JavaScript kausta tests/ui/ | minu projekti raamistik: ...>.
Reeglid:
- Järgi kontekstifaili jaotist "Testide stiil".
- Iga stsenaarium = üks test; testi nimi algab stsenaariumi ID-ga (nt "S1 ...").
- Oodatav tulemus tuleb stsenaariumist, mitte sellest, mida leht praegu teeb.
- Kasuta testandmeid failist; kuupäevad juhuslikult vähemalt 3 kuud ette.
- Kui nupp on ekraanilt väljas, keri see enne klikkimist nähtavale.
Käivita testid (npm run test:ui) ja ütle iga testi kohta: roheline või punane ja miks.
Ära muuda ühegi testi oodatavat tulemust, et see roheliseks saada.
```

**Samm 3 — API-testid:**
```
Kirjuta failis demo-scenarios/session-4-restful-booker/3_API_testi_kontrollnimekiri.md
kirjeldatud API kohta vähemalt 4 automaattesti, sh test nõude 2.1 kohta (lahkumine enne saabumist).
Formaat: <Postmani kollektsioon automation/api/broneering.postman_collection.json | minu raamistik: ...>.
Iga test kontrollib nii staatuskoodi kui ka seda, mis kehas tegelikult salvestati.
Käivita (npm run test:api -- automation/api/broneering.postman_collection.json)
ja ütle iga testi kohta: roheline või punane ja miks.
```

**Samm 4 — kas test suudab kukkuda:**
```
Vali üks roheline test ja muuda selle oodatav tulemus AJUTISELT valeks (nt teine tekst või
staatuskood). Käivita — test peab nüüd olema punane. Seejärel taasta õige oodatav tulemus.
Ütle iga testi kohta, mis on see üks asi, mille rikkumist see test püüab.
```

---

## Harjutus 2 — Testikomplekt olemasolevale moodulile

### Rada A — hinnamoodul

**Samm 1 — kaart:**
```
Loe src/booking/priceCalculator.js. Ära muuda midagi.
Tee tabel: funktsioon | sisendid | väljund | milliseid nõudeid failist
demo-scenarios/session-4-restful-booker/1_Broneeringu_nouded_mustand.md see katab.
Eraldi loetelu: nõuded 2.1, 2.2, 3.1, 3.2, 3.4, 4.1, 4.2, 7.1, mille kontrolli koodist EI leia.
```

**Samm 2 — testid:**
```
Kirjuta fail tests/booking/priceCalculator.test.js. Järgi kontekstifaili jaotist "Testide stiil".
Iga nõude 2.1, 2.2, 3.1, 3.2, 3.4, 4.1, 4.2, 7.1 kohta vähemalt üks test; piirväärtustega
nõuetel (2.2, 4.1, 7.1) test alla piiri, piiril ja üle piiri. Testi nimi algab nõude numbriga.
Oodatav tulemus tuleb nõudest, mitte koodist. Mitmeti mõistetava nõude juurde kommentaar "KÜSIMUS:".
Käivita: npx jest tests/booking. Ära paranda midagi — ütle ainult, mis kukkus.
```

**Samm 3 — triaaž:**
```
Iga punase testi kohta: tabel test | nõue | oodatud | tegelik | viga koodis / viga testis | miks.
Koodivigade kohta bug report'i pealkiri (max 12 sõna).
```

**Samm 4 — refaktoor:**
```
Funktsioonides calculatePrice ja quoteNightly on nädalavahetuse hinnaloogika kahes kohas.
Tõsta see ühte abifunktsiooni. Ära muuda käitumist ega paranda vigu.
Käivita enne ja pärast npx jest tests/booking — punaseid ja rohelisi peab olema sama palju.
```

### Rada B — andmeladu

**Samm 1 — ehita ja selgita:**
```
Käivita npm run edw:build. Loe edw/LDM.md ja edw/transform.sql. Ära muuda midagi.
Tee tabel: reegel (R1–R9) | tabel.veerg | kas transform.sql teeb seda nii, nagu LDM ütleb (jah / ei / ei tea) | miks.
```

**Samm 2 — testid:**
```
Kirjuta iga LDM reegli R1–R9 kohta üks SQL-test kausta edw/tests/, failinimi R<nr>_<lühinimi>.sql.
Test on päring, mis tagastab reeglit rikkuvad read: 0 rida = korras.
Oodatav tulemus tuleb LDM-ist, mitte transform.sql-ist. Ära muuda transform.sql-i.
Käivita npm run edw:test ja ütle iga punase testi kohta, milliseid ridu see leidis.
```

**Samm 3 — kas test suudab kukkuda:**
```
Käivita npm run edw:test -- --rikutud. Fail edw/rikutud_andmed.sql rikub meelega iga reeglit.
Iga test, mis jääb seal roheliseks, ei kontrolli seda, mida peab — selgita miks ja kirjuta see ümber.
Korda, kuni kõik testid on rikutud andmetel punased.
```

**Samm 4 — triaaž:**
```
Puhaste andmete iga punase testi kohta: viga transform.sql-is või testis? Mitu punast testi
võib tulla samast juurpõhjusest — rühmita need. Iga juurpõhjuse kohta bug report'i pealkiri
ja transform.sql-i rida, kus viga on.
```

---

## Harjutus 3 — Flaky testide diagnoos ja parandus

**Samm 2 — diagnoos:**
```
Testid failis tests/flaky/bookingFlaky.test.js kukuvad juhuslikult.
Mõõtmise tulemus (10 jooksu): <kleepige npm run test:repeat väljund>.
Iga testi F1–F4 kohta: juurpõhjus ühe lausega; kategooria (võidujooks / jagatud olek /
aeg-kell / juhuslikud andmed / muu); tõend (fail + rida); kas viga on testis või tootekoodis.
Ära veel midagi muuda.
```

**Samm 3 — parandus:**
```
Paranda testid F1–F4 nii, et need on deterministlikud.
Ära lisa retry'd, ära pikenda timeout'e, ära kustuta ega jäta vahele ühtegi testi, ära nõrgenda
kontrolli. Muuda ainult testifaili, kui tootekoodis pole viga.
```

---

## Harjutus 4 — Testid CI-sse + AI triaaž

**Samm 1 — workflow:**
```
Loo .github/workflows/tests.yml:
- käivitub igal push'il ja pull request'il; ubuntu-latest, Node.js 24, npm ci;
- töö "tests": npm run test:stable (peab olema roheline);
- töö "flaky-karantiin": npm run test:repeat -- 5, continue-on-error: true.
Selgita iga rida ühe lausega.
```

**Samm 2 — triaaž:**
```
Lisatud on GitHub Actionsi logi (4_CI_logi_naidis.txt).
Iga kukkunud testi kohta tabel: test | viga koodis / flaky / keskkond / test on vale |
tõend logist (rea tsitaat) | järgmine samm. Lõpus üks lause: kas selle PR-i võib merge'ida?
```

---

## Lokaalne mudel vs pilv (koolitusel demo, kodus valikuline)

Sama prompt nii `ollama run qwen3:4b` kui ka pilvetööriistale:
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
