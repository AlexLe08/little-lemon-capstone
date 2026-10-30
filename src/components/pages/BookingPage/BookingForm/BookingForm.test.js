import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const bookingPageProps = {
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};

describe("BookingForm Component renders correctly", () => {
  test("Renders the BookingForm heading", () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  test("Renders the date input field", () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);
    const dateInput = screen.getByLabelText("Choose date*");
    expect(dateInput).toBeInTheDocument();
  });

  test("Renders the time select field", () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);
    const timeSelect = screen.getByLabelText("Choose time*");
    expect(timeSelect).toBeInTheDocument();
  });

  test("Renders the guests input field", () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);
    const guestsInput = screen.getByLabelText("Number of guests*");
    expect(guestsInput).toBeInTheDocument();
  });

  test("Renders the occasion select field", () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toBeInTheDocument();
  });

  test("Renders the submit button", () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);
    const submitButton = screen.getByText("Fill in all required fields");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("disabled");
    expect(submitButton).toHaveAttribute("aria-label", "Fill in all required fields before clicking");
  });
});

describe("BookingForm Component validation", () => {
  test("Submit button is disabled when required fields are empty", () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);
    const submitButton = screen.getByText("Fill in all required fields");
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled when required fields are filled", () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);
    const dateInput = screen.getByLabelText("Choose date*");
    const timeSelect = screen.getByLabelText("Choose time*");
    const guestsInput = screen.getByLabelText("Number of guests*");

    fireEvent.change(dateInput, { target: { value: "2024-07-01" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });

    const submitButton = screen.getByText("Make Your Reservation");
    expect(submitButton).toBeEnabled();
    expect(submitButton).toHaveAttribute("aria-label", "On Click Make Your Reservation");
  });

  test("Displays validation errors when required fields are empty", async () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);

    const dateInput = screen.getByLabelText("Choose date*");
    const timeSelect = screen.getByLabelText("Choose time*");
    const guestsInput = screen.getByLabelText("Number of guests*");

    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.change(timeSelect, { target: { value: "" } });
    fireEvent.change(guestsInput, { target: { value: "0" } });
    fireEvent.blur(dateInput);
    fireEvent.blur(timeSelect);
    fireEvent.blur(guestsInput);

    await screen.findByText("Date Required");
    await screen.findByText("Time Required");
    await screen.findByText("Must be at least 1 guest");

    const dateError = screen.getByText("Date Required");
    const timeError = screen.getByText("Time Required");
    const guestsError = screen.getByText("Must be at least 1 guest");

    expect(dateError).toBeInTheDocument();
    expect(timeError).toBeInTheDocument();
    expect(guestsError).toBeInTheDocument();
  });

  test("Calls submitForm when form is submitted with valid data", async () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);
    const dateInput = screen.getByLabelText("Choose date*");
    const timeSelect = screen.getByLabelText("Choose time*");
    const guestsInput = screen.getByLabelText("Number of guests*");

    fireEvent.change(dateInput, { target: { value: "2024-07-01" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.blur(dateInput);
    fireEvent.blur(timeSelect);
    fireEvent.blur(guestsInput);

    const submitButton = screen.getByText("Make Your Reservation");
    fireEvent.click(submitButton);

    expect(bookingPageProps.submitForm).toHaveBeenCalled();
  });

  test("Calls dispatch with correct action when date is changed", async () => {
    render(<BookingForm bookingPageProps={bookingPageProps} />);
    const dateInput = screen.getByLabelText("Choose date*");
    fireEvent.change(dateInput, { target: { value: new Date() } });
    fireEvent.blur(dateInput);

    expect(bookingPageProps.dispatch).toHaveBeenCalledWith({
      type: "update_date",
      payload: new Date().toISOString().split("T")[0],
    });
  });
});
