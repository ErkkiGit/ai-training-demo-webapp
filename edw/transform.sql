-- Transformation: staging -> dimension, fact and reject tables.
-- Business rules: edw/LDM.md

CREATE TABLE dim_room AS
SELECT
  room_id                         AS room_key,
  CASE room_type
    WHEN 'single' THEN 'Single'
    WHEN 'double' THEN 'Double'
    WHEN 'family' THEN 'Family'
  END                             AS room_type,
  nightly_rate_cents,
  is_active
FROM stg_room
WHERE is_active = 'Y';

CREATE TABLE fact_booking AS
SELECT
  b.booking_id,
  r.room_key,
  b.room_id,
  b.checkin,
  b.checkout,
  CAST(julianday(b.checkout) - julianday(b.checkin) AS INTEGER) AS nights,
  CAST(ROUND(r.nightly_rate_cents
             * (julianday(b.checkout) - julianday(b.checkin))
             * (100 - b.discount_pct) / 100.0) AS INTEGER)       AS total_price_cents,
  b.load_ts
FROM stg_booking b
LEFT JOIN dim_room r ON r.room_key = b.room_id
WHERE b.status <> 'CANCELLED';

CREATE TABLE reject_booking AS
SELECT b.booking_id, 'cancelled' AS reason, b.load_ts
FROM stg_booking b
WHERE b.status = 'CANCELLED';
