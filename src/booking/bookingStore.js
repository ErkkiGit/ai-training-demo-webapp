// In-memory booking store used by the Session 5 flaky-test exercise.
// Simulates a slow database: each write takes a random 5-40 ms.

const bookings = [];
let nextId = 1;

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function createBooking({ roomId, guest, checkin, checkout }) {
  await delay(5 + Math.floor(Math.random() * 35));
  const clash = bookings.find(
    (b) => b.roomId === roomId && b.checkin < checkout && checkin < b.checkout
  );
  if (clash) {
    return { ok: false, error: 'Room already booked for these dates' };
  }
  const booking = { id: nextId, roomId, guest, checkin, checkout };
  nextId += 1;
  bookings.push(booking);
  return { ok: true, booking };
}

// Audit writes are usually instant (cached), sometimes they hit the slow path.
async function recordAudit(event) {
  if (Math.random() < 0.3) {
    await delay(3);
  }
  return { event, at: Date.now() };
}

function listBookings(roomId) {
  return bookings.filter((b) => roomId === undefined || b.roomId === roomId);
}

function clearBookings() {
  bookings.length = 0;
  nextId = 1;
}

module.exports = { createBooking, recordAudit, listBookings, clearBookings };
