# Praktika 2a — ideede jaht

## Samm 1 — ajakulu kaart (üksi, 5 min)

Mõelge oma kahele viimasele töönädalale. Kirjutage iga etapi juurde, mis võttis aega ja kui palju (umbes).

| Testimise etapp | Mis võttis aega? | Tunde nädalas (umbes) |
|---|---|---|
| Nõuded ja analüüs (Jira, Confluence, spekk, LDM) | | |
| Testjuhtumite / testilugude kirjutamine | | |
| Testandmete leidmine või loomine | | |
| Testide käivitamine (käsitsi / automaatselt) | | |
| Tulemuste ülevaatamine ja vigade triaaž | | |
| Raporteerimine (Jira kommentaarid, Excel, kokkuvõtted) | | |
| Regressioon ja selle hooldus | | |
| Koosolekud, admin, sisseelamine | | |

## Samm 2 — AI-intervjuu (10 min)

Prompt: `PROMPTID.md` → Praktika 2a.

## Samm 3 — meeskonniti (10 min)

Pange ideed kokku, kontrollige duplikaate ideede tabeliga ja lisage tabelisse 2–3 uut ideed —
**igal ideel peab olema täidetud „Mõõdetav väärtus“** (vt valem allpool).

## Starter-kaardid — kui ideed ei tule, võtke kaart ja kohandage oma projektile

Vaadake ka `4_Ideede_menuu.md` — ideed teie meeskonnatüübile koos eeltäidetud canvastega.

| # | Idee | Kus see aitab | Mõõdetava väärtuse vihje |
|---|---|---|---|
| 1 | **LDM → SQL-testid**: agent loeb LDM-i veeru kirjelduse ja kirjutab 0-rea testid (Sessioon 5 rada B) | andmeladu | testide kirjutamise aeg veeru kohta × veergude arv |
| 2 | **TEST vs LIVE raportite võrdlus**: agent võrdleb kaht raportit ja klassifitseerib iga erinevuse | aruandlus, andmevahetus | käsitsi võrdlemise tunnid release'i kohta |
| 3 | **Testandmete leidja**: „leia klient, kes on võlas, aga pole inkassos“ — päring + selgitus | äriloogika testimine | andmete otsimise aeg testi kohta |
| 4 | **Muudatuse mõjuanalüüs**: piletist ja diffist → millised testid ja ärivood on mõjutatud | regressioon | regressiooni ulatus (testide arv) enne/pärast |
| 5 | **Spekk → testjuhtumid Xray formaati** (Sessioon 4) | testide disain | testilugude kirjutamise aeg pileti kohta |
| 6 | **Öine flaky-triaaž**: hommikuks kokkuvõte punastest testidest kategooriate kaupa (Sessioon 5) | automaattestid | hommikuse triaaži minutid × tööpäevad |
| 7 | **Duplikaatvigade leidmine** enne uue pileti loomist | vigade haldus | duplikaatpiletite arv kuus |
| 8 | **Pileti kokkuvõte**: pikk kommentaariahel → seis, otsused, avatud küsimused | kõik projektid | lugemisaeg pileti kohta × piletite arv |
| 9 | **Lõpparve kontroll**: BASE64 → PDF → võrdlus päris võlaseisuga | arveldus, finants | ühe kontrolli minutid × kontrollide arv |
| 10 | **Testkokkuvõtte mustand** Jira kommentaariks testi tulemustest | raporteerimine | kommentaari kirjutamise aeg × piletite arv |

## Mõõdetav väärtus — kuidas kirjutada

**Aeg ühe korra kohta × mitu korda (nädalas / kuus) × kes** — enne ja pärast.

Mõõdik ei pea olema aeg või raha. Oluline on lähtetase (praegu), sihttase ja kuidas mõõdate.

- ❌ „Test manageri vaimne tervis +30%“ — 30% millest? Kuidas mõõdate?
- ✅ „Test manageri stress anonüümses küsitluses (1–5) 4 → 2,5 kvartaliga; ületunnid 10 → 4 h kuus“ — ka pehmet väärtust saab mõõta: rahulolu, stress, ületunnid, haiguspäevad (ainult koondandmetena)
- ❌ „Kiirem testimine“ — kui palju? millest?
- ✅ „Regressiooni jooks 3 h → 1 h, 5 korda nädalas = 10 h nädalas vähem ootamist“
- ✅ „Testilugude kirjutamine 45 min → 15 min pileti kohta, ~20 piletit kuus = 10 h kuus“
