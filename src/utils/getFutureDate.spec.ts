import { getFutureDate } from "./getFutureDate";
import { expect, test } from "vitest";

test("get a future date", () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-10-11`).getFullYear()).toEqual(year + 1);
});
