import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

const availableTimesReducer = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    dispatch: jest.fn(),
};

test('Renders the BookingForm heading', () => {
    render(
        <BookingForm availableTimesReducer={availableTimesReducer} />
    );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the date input field', () => {
    render(<BookingForm availableTimesReducer={availableTimesReducer} />);
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toBeInTheDocument();
});

test('Renders the time select field', () => {
    render(<BookingForm availableTimesReducer={availableTimesReducer} />);
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toBeInTheDocument();
});

test('Renders the guests input field', () => {
    render(<BookingForm availableTimesReducer={availableTimesReducer} />);
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toBeInTheDocument();
});

test('Renders the occasion select field', () => {
    render(<BookingForm availableTimesReducer={availableTimesReducer} />);
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toBeInTheDocument();
});

test('Renders the submit button', () => {
    render(<BookingForm availableTimesReducer={availableTimesReducer} />);
    const submitButton = screen.getByRole("button", { name: "Make Your reservation" });
    expect(submitButton).toBeInTheDocument();
});

