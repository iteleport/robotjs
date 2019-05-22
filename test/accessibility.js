var robot = require('..');
var os = require('os');

describe('Accessibility', () => {
  it('Request permission.', function() {
    expect(robot.requestControlAccessibility() === 1).toBeTruthy();
  });
});

