var robot = require('..');
var lastKnownPos, currentPos;

//Increase delay to help it reliability.
robot.setMouseDelay(100);

describe('Mouse', () => {
  it('Get the initial mouse position.', function()
  {
    expect(lastKnownPos = robot.getMousePos()).toBeTruthy();
    expect(lastKnownPos.x !== undefined).toBeTruthy();
    expect(lastKnownPos.y !== undefined).toBeTruthy();
  });

  it('Move the mouse.', function()
  {
    lastKnownPos = robot.moveMouse(0, 0);
    expect(robot.moveMouse(100, 100) === 1).toBeTruthy();
    currentPos = robot.getMousePos();
    expect(currentPos.x === 100).toBeTruthy();
    expect(currentPos.y === 100).toBeTruthy();

    expect(function()
    {
      robot.moveMouse(0, 1, 2, 3);
    }).toThrowError(/Invalid number/);

    expect(function()
    {
      robot.moveMouse(0);
    }).toThrowError(/Invalid number/);

    expect(robot.moveMouse("0", "0") === 1).toBeTruthy();

test('Click the mouse.', function(t) 
{
	t.plan(11);
	t.ok(robot.mouseClick(), 'click the mouse (no button specified).');
	t.ok(robot.mouseClick("left") === 1, 'click the left mouse button.');
	t.ok(robot.mouseClick("middle") === 1, 'click the middle mouse button.');
	t.ok(robot.mouseClick("right") === 1, 'click the right mouse button.');
	
	t.ok(robot.mouseClick("left", 1), 'double click the left mouse button.');
	
	t.throws(function()
	{
		robot.mouseClick("party");
	}, /Invalid mouse/, 'click an incorrect mouse button (party).');
	
	t.throws(function()
	{
		robot.mouseClick("0");
	}, /Invalid mouse/, 'click an incorrect mouse button (0).');

	var modifiers = []
	modifiers.push('shift')
	modifiers.push('control')
	t.ok(robot.mouseClick("left", 0, modifiers), 'Successfully clicked the left mouse button while Ctrl+Shift were pressed down.');
	t.ok(robot.mouseClick("left", 0, modifiers), 'Successfully clicked the left mouse button while Ctrl+Shift were pressed down.');

	t.throws(function()
	{
		robot.mouseClick("left", 0, "test");
	}, /Invalid key flag specified./, 'click the mouse with wrong modifier argument.');

	t.throws(function()
	{
		robot.mouseClick("left", 0, modifiers, "test");
	}, /Invalid number/, 'click the mouse with an extra argument.');
	
});

test('Drag the mouse.', function(t) 
{
	t.plan(4);
	
	t.ok(robot.dragMouse(5, 5) === 1, 'successfully dragged the mouse.');
	
	t.throws(function()
	{
		robot.dragMouse(0);
	}, /Invalid number/, 'drag mouse to (0).');
	
	t.throws(function()
	{
		robot.dragMouse(1, 1, "left", 5);
	}, /Invalid number/, 'drag mouse with extra argument.');
	
	t.throws(function()
	{
		robot.dragMouse(2, 2, "party");
	}, /Invalid mouse/, 'drag an incorrect mouse button (party).');

});

    expect(function()
    {
      robot.mouseClick("party");
    }).toThrowError(/Invalid mouse/);

    expect(function()
    {
      robot.mouseClick("0");
    }).toThrowError(/Invalid mouse/);

    expect(function()
    {
      robot.mouseClick("left", 0, "it");
    }).toThrowError(/Invalid number/);

  });

  it('Drag the mouse.', function()
  {

    expect(robot.dragMouse(5, 5) === 1).toBeTruthy();

    expect(function()
    {
      robot.dragMouse(0);
    }).toThrowError(/Invalid number/);

    expect(function()
    {
      robot.dragMouse(1, 1, "left", 5);
    }).toThrowError(/Invalid number/);

    expect(function()
    {
      robot.dragMouse(2, 2, "party");
    }).toThrowError(/Invalid mouse/);

  });

  it('Mouse scroll.', function()
  {
    expect(lastKnownPos = robot.getMousePos()).toBeTruthy();
    expect(robot.mouseClick() === 1).toBeTruthy();
    expect(robot.scrollMouse(0, 1 * 120) === 1).toBeTruthy();
    expect(robot.scrollMouse(0, 20 * 120) === 1).toBeTruthy();
    expect(robot.scrollMouse(0, -5 * 120) === 1).toBeTruthy();
    expect(robot.scrollMouse(1 * 120, 0) === 1).toBeTruthy();
    expect(robot.scrollMouse(20 * 120, 0) === 1).toBeTruthy();
    expect(robot.scrollMouse(-5 * 120, 0) === 1).toBeTruthy();
    expect(robot.scrollMouse(-5 * 120, -5 * 120) === 1).toBeTruthy();
  });

  it('Mouse Toggle', function()
  {
    expect(lastKnownPos = robot.getMousePos()).toBeTruthy();
    expect(robot.mouseToggle('up', 'right') === 1).toBeTruthy();
  });
});
