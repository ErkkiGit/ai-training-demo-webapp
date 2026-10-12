# Harjutus 4 — Testid CI-sse + AI triaaž (12 min, paaris)

**Eesmärk:** testid jooksevad automaatselt igal push'il ja AI aitab kukkunud jooksu kiiresti triaažida.
**Sisend:** teie fork, fail `4_CI_logi_naidis.txt`.
**Valmis, kui:** (1) failis `.github/workflows/tests.yml` on töö, mis jooksutab `npm run test:stable`
ja eraldi karantiinitöö flaky testidele; (2) näidislogi iga kukkunud testi kohta on tabelirida ja otsus,
kas PR-i võib merge'ida.
**Näitate lõpus:** workflow fail (või Actions vahekaart) + triaaži tabel.

## Sammud (promptid: `PROMPTID.md` → Harjutus 4)

1. **Workflow (6 min):** agent loob `.github/workflows/tests.yml` → push forki → **Actions** vahekaart.
2. **Triaaž (6 min):** agent loeb `4_CI_logi_naidis.txt` ja teeb tabeli
   test | viga koodis / flaky / keskkond / test on vale | tõend logist | järgmine samm.

Edasi Töötoas 2: seal ehitate ise agendi, mis teeb PR-ide eelülevaatust automaatselt.

**Varuvariant (GitHubi kontot pole):** tehke ainult samm 2.
