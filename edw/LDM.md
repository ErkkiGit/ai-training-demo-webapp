# LDM — broneeringute andmeladu (mini-EDW)

Igaöine laadimine: `stg_room` + `stg_booking` → `dim_room`, `fact_booking`, `reject_booking`.
Teisendus on failis `edw/transform.sql`. Summad on sentides, kuupäevad `YYYY-MM-DD`.

## dim_room

| Reegel | Veerg | Teisendus |
|---|---|---|
| R1 | room_key | = `stg_room.room_id`. Üks rida iga toa kohta, **ka mitteaktiivsed toad** (is_active = 'N'), sest ajaloolised broneeringud viitavad neile. |
| R2 | room_type | Allika koodid: `single` → `Single`, `double` → `Double`, `family` → `Family`. Teisi väärtusi ei tohi olla; NULL ei ole lubatud. |
| R3 | is_active | Ainult `Y` või `N`. |

## fact_booking

| Reegel | Veerg | Teisendus |
|---|---|---|
| R4 | booking_id | **Üks rida iga broneeringu kohta.** Kui allikas on sama `booking_id` mitu korda, võetakse uusima `load_ts`-ga rida. |
| R5 | room_key | Viitab `dim_room.room_key`-le. Kui `stg_booking.room_id` ei ole NULL, ei tohi `room_key` olla NULL. |
| R6 | nights | `checkout − checkin` päevades. Peab olema vähemalt 1. Read, kus see pole nii, lähevad tabelisse `reject_booking` põhjusega `invalid_dates` — **mitte faktitabelisse**. |
| R7 | total_price_cents | `nightly_rate_cents × nights × (100 − discount_pct) / 100`, ümardatud täissendini. Ei tohi olla negatiivne. |

## reject_booking

| Reegel | Kirjeldus |
|---|---|
| R8 | `CANCELLED` staatusega broneeringud lähevad siia põhjusega `cancelled`. |
| R9 | **Täielikkus:** iga erinev `stg_booking.booking_id` on täpselt ühes kohas — kas `fact_booking`-us või `reject_booking`-us. |

---

*Kommentaar analüütikult: „vaata ka Confluence'i, seal on täpsem“ (lehte ei ole).*
