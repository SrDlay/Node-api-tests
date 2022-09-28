import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "./create-appointment";
import { getFutureDate } from "../utils/getFutureDate";

describe("Create Appointment", () => {
  it("should able to create a appointment", () => {
    const createAppointment = new CreateAppointment();

    const startsAt = getFutureDate("2022-10-10");
    const endsAt = getFutureDate("2022-10-11");

    expect(
      createAppointment.execute({
        customer: "John Doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
