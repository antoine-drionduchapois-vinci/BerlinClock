// berlinClock.test.js
const { berlinClock } = require('../berlinClock');

test('Add minutes', () => {
    expect(berlinClock(1)).toEqual([1, 0, 0, 0]);
});
