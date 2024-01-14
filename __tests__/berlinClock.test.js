// berlinClock.test.js
const { berlinClock } = require('../berlinClock');

test('Add minutes 1', () => {
    expect(berlinClock(1)).toEqual([1, 0, 0, 0]);
});

test('Add minutes 2', () => {
    expect(berlinClock(2)).toEqual([0, 1, 0, 0]);
});

test('Add minutes 3', () => {
    expect(berlinClock(3)).toEqual([0, 0, 1, 0]);
});

test('Add minutes 4', () => {
    expect(berlinClock(4)).toEqual([0, 0, 0, 1]);
});
