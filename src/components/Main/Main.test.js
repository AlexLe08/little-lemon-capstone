import { initializeTimes, updateTimes } from "./Main";

test('initializeTimes returns the correct initial times', () => {
  const initialTimes = initializeTimes();
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  expect(initialTimes).toEqual(expectedTimes);
});

test('updateTimes returns the correct times for update_date action', () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "update_date", payload: "2024-07-01" };
  const newState = updateTimes(initialState, action);

  expect(newState).toEqual(initialState);
});