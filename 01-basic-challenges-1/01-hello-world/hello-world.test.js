const helloWorld = require('./hello-world');

test("Returning 'Hello, World!' as a string", () => {
  const result = helloWorld();
  expect(result).toString('Hello World!');
});
