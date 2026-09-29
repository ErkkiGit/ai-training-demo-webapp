// Session 5, Praktika 2: these tests pass on some runs and fail on others.
// Run them many times: npm run test:repeat -- 10
const { createBooking, recordAudit, listBookings } = require('../../src/booking/bookingStore');
const { calculatePrice, cancellationFee } = require('../../src/booking/priceCalculator');

const HOUR = 60 * 60 * 1000;

describe('booking store', () => {
  test('F1: first guest to submit gets the room when two book at once', async () => {
    const [mari, jyri] = await Promise.all([
      createBooking({ roomId: 201, guest: 'Mari', checkin: '2026-11-06', checkout: '2026-11-08' }),
      createBooking({ roomId: 201, guest: 'Jüri', checkin: '2026-11-07', checkout: '2026-11-09' })
    ]);

    expect(mari.ok).toBe(true);
    expect(jyri.ok).toBe(false);
  });

  test('F2a: room 101 can be booked for 1-3 October', async () => {
    const result = await createBooking({
      roomId: 101, guest: 'Õie', checkin: '2026-10-01', checkout: '2026-10-03'
    });

    expect(result.ok).toBe(true);
  });

  test('F2b: room 101 can be booked for 2-4 October', async () => {
    const result = await createBooking({
      roomId: 101, guest: 'Šarlote', checkin: '2026-10-02', checkout: '2026-10-04'
    });

    expect(result.ok).toBe(true);
    expect(listBookings(101)).toHaveLength(1);
  });
});

describe('prices and cancellation', () => {
  test('F3: cancelling exactly 48 hours before check-in is free', async () => {
    const checkinAt = Date.now() + 48 * HOUR;
    await recordAudit('cancel-requested');

    expect(cancellationFee({ totalCents: 24000, checkinAt })).toBe(0);
  });

  test('F4: any valid stay has a positive price', () => {
    const nights = 1 + Math.floor(Math.random() * 20);
    const checkout = new Date(Date.UTC(2026, 10, 2 + nights)).toISOString().slice(0, 10);

    const price = calculatePrice({
      nightlyRateCents: 8000,
      checkin: '2026-11-02',
      checkout
    });

    expect(price.totalCents).toBeGreaterThan(0);
  });
});
