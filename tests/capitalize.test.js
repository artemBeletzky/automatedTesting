import { strict as assert } from "assert";
import capitalize from "../src/capitalize.js";

assert.strictEqual(
  capitalize("hello"),
  "Hello",
  "This function doesn't work properly"
);

assert.strictEqual(
  capitalize(""),
  "",
  "The string should empty if empty string is passed as an argument."
);

console.log("All tests passed!");
