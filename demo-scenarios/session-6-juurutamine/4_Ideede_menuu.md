# Ideede menüü meeskondadele — kui oma ideed ei tule

Iga meeskonna tüübi kohta 4 ideed, mis tulevad **teie endi** materjalist: eelküsitlus, projektide kaardistus,
ideede tabel ja sessioonid 1–5. Valige üks ja kohandage oma projektile — või kasutage all olevat
eeltäidetud canvast alguspunktina.

---

## 1. Andmeladu (SQL, dbt, Snowflake)

| Idee | Allikas |
|---|---|
| LDM-i veeru kirjeldusest → 0-rea SQL-testid | Sessioon 5 rada B, projektide kaardistus |
| Regressioonikomplekti optimeerimine, et see jookseks 1 tunniga | ideede tabel |
| „Kas test üldse suudab läbi kukkuda?“ — kontroll meelega rikutud andmetega | Sessioon 5 rada B |
| Igahommikune kokkuvõte öise laadimise testidest | eelküsitlus, Sessioon 5 |

**Eeltäidetud canvas: LDM → SQL-testid**
- Probleem: iga uue veeru jaoks kirjutatakse testid käsitsi LDM-i kirjelduse järgi; kirjeldus on segane
- Praegune olukord: ___ min veeru kohta × ___ veergu kuus
- Lahendus: agent loeb LDM-i ja kirjutab 0-rea testi + vastupidise testi; testija vaatab üle ja kontrollib rikutud andmetega
- Oodatav mõju: ___ → ___ min veeru kohta
- Andmed: LDM (sisemine/klientide), testkeskkond — mitte LIVE-koopia
- Risk: test, mis ei saa läbi kukkuda → kontroll rikutud andmetega on kohustuslik

---

## 2. UI/API automaatika

| Idee | Allikas |
|---|---|
| E2E testide code review skill + kontroll, et Xray kirjeldus ja testikood klapivad | ideede tabel |
| Automaattestide agent mitte-automatiseerijale (valmis seadistus) | ideede tabel, Sessioon 5 Harjutus 1 |
| Öine flaky-triaaž → hommikuks kokkuvõte kategooriate kaupa | Sessioon 5 |
| TEST vs LIVE raportite võrdlus | projektide kaardistus |

**Eeltäidetud canvas: E2E testide review skill**
- Probleem: teste kirjutavad eri taseme tiimiliikmed; review on ebaühtlane
- Praegune olukord: ___ PR-i nädalas × ___ min review
- Lahendus: SKILL.md tiimi reeglitega + Xray kirjelduse ja koodi võrdlus; inimene teeb lõpliku review
- Oodatav mõju: review ___ → ___ min; leitud vigade arv enne merge'i
- Andmed: testikood ja Xray (klientide tase → kliendi luba)
- Risk: AI kiidab heaks testi, mis ei saa läbi kukkuda → skill kontrollib seda eraldi

---

## 3. Manuaal- ja UAT-testimine

| Idee | Allikas |
|---|---|
| UAT testijate vigade raporteerimise tööriist + duplikaatide tuvastus | ideede tabel |
| Confluence'i spekist → testilood Xray formaati | Sessioon 4, eelküsitlus |
| Testandmete leidja („klient kindlas staatuses“) | projektide kaardistus |
| Pika Jira pileti kokkuvõte enne testimist | ideede tabel |

**Eeltäidetud canvas: spekk → testilood**
- Probleem: testilugude kirjutamine spekist võtab palju aega, spekk on laiali (Confluence, Jira, Teams)
- Praegune olukord: ___ min pileti kohta × ___ piletit kuus
- Lahendus: AI koostab testiloo mustandi koos piirväärtuste ja küsimustega analüütikule; testija täiendab
- Oodatav mõju: ___ → ___ min pileti kohta
- Andmed: spekk ja pilet (klientide tase)
- Risk: AI mõtleb välja reegli, mida spekis pole → „küsimus analüütikule“ on kohustuslik väli

---

## 4. Testijuhtimine ja raporteerimine

| Idee | Allikas |
|---|---|
| JIRA ja Exceli testihalduse sünkroon — üks tõeallikas | ideede tabel |
| Testi kokkuvõte kliendile / Jira kommentaariks tulemustest | eelküsitlus |
| Muudatuse mõjuanalüüs: millised testid ja ärivood on mõjutatud | projektide kaardistus |
| „Mis on täna oluline“ — kokkuvõte pärast nädalavahetust | ideede tabel |

**Eeltäidetud canvas: testi kokkuvõte**
- Probleem: testi tulemuste kokkuvõtte kirjutamine Jirasse või kliendile on korduv käsitsi töö
- Praegune olukord: ___ min kokkuvõtte kohta × ___ korda kuus
- Lahendus: AI koostab tulemustest kokkuvõtte mustandi kokkulepitud formaadis; testijuht kinnitab
- Oodatav mõju: ___ → ___ min
- Andmed: testitulemused, piletid (klientide tase)
- Risk: vale number kliendile → numbrid kontrollitakse allikast enne saatmist

---

## 5. Tugi ja admin: üldine automatiseerimine

| Idee | Allikas |
|---|---|
| Pakkumiste koostamine: hanke nõuded → sobivad konsultandid ja kohandatud CV mustand | eelküsitlus, ideede tabel |
| Aja raporteerimise mustand kalendrist ja piletitest | ideede tabel |
| AI-juhitud sisseelamine uuele konsultandile (assistent juhiste ja kontrollnimekirjaga) | ideede tabel |
| Koosolekute otsused, ülesanded ja vastutajad | ideede tabel |

**Eeltäidetud canvas: pakkumise CV-de ettevalmistus**
- Probleem: iga pakkumise jaoks otsitakse sobivad konsultandid ja kohandatakse CV-d käsitsi
- Praegune olukord: ___ h pakkumise kohta × ___ pakkumist kuus
- Lahendus: AI võrdleb hanke nõudeid CV-dega ja teeb kohandatud CV mustandi; inimene valib ja kinnitab
- Oodatav mõju: ___ → ___ h pakkumise kohta
- Andmed: CV-d = isikuandmed → äriplaan, töötajate teavitamine, mitte isiklik konto
- Risk: **EU AI Act** — AI kasutamine töötajate või kandidaatide valimiseks ja hindamiseks on kõrge
  riskiga kasutus. Siin AI ainult valmistab ette, otsuse teeb inimene; värbamisotsuseid AI-ga mitte teha.
