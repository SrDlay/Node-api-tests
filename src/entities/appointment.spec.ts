import { expect, test } from "vitest";
import { Appointment } from "./appointment";
import { getFutureDate } from "../utils/getFutureDate";

test("create an appointment", () => {
  const startsAt = getFutureDate("2022-10-10");
  const endsAt = getFutureDate("2022-10-11");

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = getFutureDate("2022-10-10");
  const endsAt = getFutureDate("2022-10-09");

  expect(
    () =>
      new Appointment({
        customer: "John Doe",
        startsAt,
        endsAt,
      })
  ).toThrow();
});
