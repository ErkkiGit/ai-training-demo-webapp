# Harjutus 4 — CI näidislogi triaaž

Allikas: `4_CI_logi_naidis.txt` (PR #14, sama commit'i kaks jooksu).

| Test | Kategooria | Tõend logist | Järgmine samm |
| --- | --- | --- | --- |
| `3.2 Saturday and Sunday nights are 20% more expensive` | Test on vale | `Expected: 24000` / `Received: 22000`; test kasutab 10.–12.10.2026 ehk laupäeva ja pühapäeva ööd. Nõue 3.2 ütleb **reede ja laupäev**. Sama test kukkus ka teisel jooksul. | Muuta testi sisend või ootus nõude järgi ja käivitada uuesti. Toote nädalavahetuse loogikat selle logi põhjal mitte muuta. |
| `7.1 regular guest can book 30 nights` | Viga koodis | `Stay too long: 30 nights (max 14)` ja `const maxNights = options.regular ? MAX_NIGHTS_REGULAR : MAX_NIGHTS;`. Sama test kukkus ka teisel jooksul. | Kontrollida püsikliendi tunnuse nime: hinnakalkulaator kasutab `isRegular`, piirangu kontroll aga `regular`. Parandada tunnuse kasutus ning testida 14 ja 30 öö piire. |
| `5.1 cancelling exactly 48 hours before check-in is free` | Flaky | Esimesel jooksul `Expected: 0` / `Received: 12000`; test määrab `checkinAt = Date.now() + 48 * HOUR`, teeb seejärel `await recordAudit('cancel-requested')` ja kutsub `cancellationFee` välja. Sama testi teine jooks läbis. | Kasutada tühistamishetkena fikseeritud aega või anda sama algne aeg funktsioonile `cancelledAt` kaudu; säilitada täpse 48 tunni ootus. |

**Merge'i otsus:** seda PR-i ei saa näidislogi põhjal veel merge'ida. Püsikliendi 30 öö test kukub mõlemal jooksul koodivea tõttu; ka 3.2 testiootus tuleb nõudega kooskõlla viia ja CI uuesti roheliseks saada.
