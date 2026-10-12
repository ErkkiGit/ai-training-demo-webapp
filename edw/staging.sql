-- Staging: what the nightly load brings in from the source system (Restful-booker).
-- Every update to a booking arrives as a new row with a newer load_ts.

CREATE TABLE stg_room (
  room_id      INTEGER,
  room_type    TEXT,    -- source codes: 'single', 'double', 'family'
  nightly_rate_cents INTEGER,
  is_active    TEXT,    -- 'Y' / 'N'
  load_ts      TEXT
);

INSERT INTO stg_room VALUES
  (101, 'single', 10000, 'Y', '2026-10-12 02:00'),
  (102, 'double', 15000, 'Y', '2026-10-12 02:00'),
  (103, 'family', 22500, 'Y', '2026-10-12 02:00'),
  (104, 'single', 10000, 'N', '2026-10-12 02:00');

CREATE TABLE stg_booking (
  booking_id   INTEGER,
  room_id      INTEGER,
  guest_name   TEXT,
  checkin      TEXT,
  checkout     TEXT,
  discount_pct INTEGER,
  status       TEXT,    -- 'NEW', 'UPDATED', 'CANCELLED'
  load_ts      TEXT
);

INSERT INTO stg_booking VALUES
  (1001, 101, 'Mari Tamm',      '2026-10-05', '2026-10-07', 0,  'NEW',       '2026-10-12 02:00'),
  (1002, 102, 'Jüri Kask',      '2026-10-09', '2026-10-11', 10, 'NEW',       '2026-10-12 02:00'),
  (1003, 103, 'Õie Saar',       '2026-10-12', '2026-10-15', 0,  'NEW',       '2026-10-12 02:00'),
  (1004, 101, 'Šarlote Mets',   '2026-10-16', '2026-10-17', 0,  'NEW',       '2026-10-12 02:00'),
  (1005, 102, 'Test Koolitus',  '2026-10-20', '2026-10-22', 0,  'NEW',       '2026-10-12 02:00'),
  (1005, 102, 'Test Koolitus',  '2026-10-20', '2026-10-23', 0,  'UPDATED',   '2026-10-12 02:30'),
  (1006, 104, 'Ants Lepp',      '2026-10-24', '2026-10-26', 0,  'NEW',       '2026-10-12 02:00'),
  (1007, 101, 'Kai Kuusk',      '2026-10-28', '2026-10-26', 0,  'NEW',       '2026-10-12 02:00'),
  (1008, 103, 'Peeter Pärn',    '2026-11-02', '2026-11-09', 100,'NEW',       '2026-10-12 02:00'),
  (1009, 102, 'Liis Org',       '2026-11-06', '2026-11-08', 0,  'CANCELLED', '2026-10-12 02:00'),
  (1010, 101, 'Toomas Sepp',    '2026-11-13', '2026-11-27', 15, 'NEW',       '2026-10-12 02:00');
