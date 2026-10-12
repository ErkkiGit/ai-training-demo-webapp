-- Sabotage: deliberately breaks every LDM rule R1–R9 once.
-- npm run edw:test -- --rikutud loads this on top of the normal build.
-- A good test goes RED here. A test that stays green cannot catch the error it is meant to catch.

DELETE FROM dim_room WHERE room_key = 103;                                       -- R1: room missing
INSERT INTO dim_room VALUES (102, 'Double', 15000, 'Y');                         -- R1: duplicate room
INSERT INTO dim_room VALUES (105, 'suite', 30000, 'Y');                          -- R2: unmapped type
INSERT INTO dim_room VALUES (106, NULL, 12000, 'Y');                             -- R2: NULL type
INSERT INTO dim_room VALUES (107, 'Single', 10000, 'X');                         -- R3: invalid flag
INSERT INTO fact_booking VALUES (1001, 101, 101, '2026-10-05', '2026-10-07', 2, 20000, '2026-10-12 03:00'); -- R4: duplicate
INSERT INTO fact_booking VALUES (2001, NULL, 101, '2026-12-01', '2026-12-03', 2, 20000, '2026-10-12 03:00'); -- R5: missing key
INSERT INTO fact_booking VALUES (2002, 101, 101, '2026-12-05', '2026-12-05', 0, 0, '2026-10-12 03:00');     -- R6: 0 nights
UPDATE fact_booking SET total_price_cents = 12345 WHERE booking_id = 1004;       -- R7: wrong price
DELETE FROM reject_booking WHERE booking_id = 1009;                              -- R8, R9: cancelled booking lost
