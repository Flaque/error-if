const errorIf = require("./index.js");

test("errorIf spits can spit out an error", () => {
  expect(() => {
    errorIf(true, "Oh no!");
  }).toThrow();
});

test("errorIf won't throw an error if there's nothing wrong", () => {
  errorIf(false, "This is not error!");
});
