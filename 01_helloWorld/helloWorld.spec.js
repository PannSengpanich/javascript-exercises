const helloWorld = require("./helloWorld"); //import helloWorld.js

describe("Hello World", function () {
  test('says "Hello, World!"', function () {
    expect(helloWorld()).toEqual("Hello, World!");
  });
});
