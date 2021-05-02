import { decode, encode } from "../src/encoding";

let testObject = {
  name: "Yony Calsin",
  github: "https://github.com/yonycalsin",
};

const encodingExpectedValue =
  "%7B%22name%22%3A%22Yony%20Calsin%22%2C%22github%22%3A%22https%3A%2F%2Fgithub.com%2Fyonycalsin%22%7D";

test("encoding", () => {
  expect(encode(testObject)).toEqual(encodingExpectedValue);
});

test("decoding", () => {
  expect(decode(encodingExpectedValue)).toEqual(testObject);
});
