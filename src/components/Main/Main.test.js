import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "../../fetchAPI";

jest.mock("../../fetchAPI");



const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];




test("initializeTimes returns a nonempty array", () => {
  fetchAPI.mockReturnValue(expectedTimes);
  const initialTimes = initializeTimes();
  expect(fetchAPI).toHaveBeenCalled();
  expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});



test('updateTimes returns times with selected date', () => {
  const selectedDate = "2024-07-01";
  fetchAPI.mockReturnValue(expectedTimes);

  const action = { type: "update_date", payload: selectedDate };

  const result = updateTimes([], action);

  expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
  expect(result).toEqual(expectedTimes);
});

test('updateTimes returns current state for unknown action type', () => {
  const currentState = ["17:00", "18:00"];
  const action = { type: "unknown_action", payload: "2024-07-01" };

  const result = updateTimes(currentState, action);

  expect(result).toBe(currentState);
});
