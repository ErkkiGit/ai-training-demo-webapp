# Harjutus 4 — Testid CI-sse + AI triaaž (12 min, paaris)

**Eesmärk:** testid jooksevad automaatselt igal push'il ja AI aitab läbikukkunud jooksu kiiresti triaažida.
**Sisend:** teie repo koopia, fail `4_CI_logi_naidis.txt`.
**Valmis, kui:** (1) failis `.github/workflows/tests.yml` on töö, mis jooksutab `npm run test:stable`
ja eraldi karantiinitöö flaky testidele; (2) näidislogi iga läbikukkunud testi kohta on tabelirida ja otsus,
kas PR-i võib merge'ida.
**Arutelus jagate:** workflow fail (või Actions vahekaart) + triaaži tabel.

## Sammud (promptid: `PROMPTID.md` → Harjutus 4)

1. **Workflow (6 min):** agent loob `.github/workflows/tests.yml`. See fail ütleb **GitHubile**, mida igal push'il
   teha — testid jooksevad GitHubi pilvemasinas, mitte teie arvutis. Fail jääb teile alles ja sobib ka teie
   projekti. **Valikuline:** kui teil on GitHubis fork, push'ige — **Actions** vahekaart näitab jooksu ja PR-i
   juures on kõigile nähtav roheline/punane märk. GitLabis on sama loogika failiga `.gitlab-ci.yml`.
2. **Triaaž (6 min):** agent loeb `4_CI_logi_naidis.txt` ja teeb tabeli
   test | viga koodis / flaky / keskkond / test on vale | tõend logist | järgmine samm.

Edasi Töötoas 2: seal ehitate ise agendi, mis teeb PR-ide eelülevaatust automaatselt.

