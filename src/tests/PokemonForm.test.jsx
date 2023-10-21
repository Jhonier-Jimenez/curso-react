import { render, screen, fireEvent } from "@testing-library/react";
import PokemonForm from "../components/PokemonForm";

describe("<PokemonForm />", () => {
  test("render the Pokemon form component", () => {
    render(<PokemonForm />);

    const nameInput = screen.getByPlaceholderText(/Enter Pokémon name/i);
    const submitButton = screen.getByText(/Submit/i);

    expect(nameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("calls onSubmit function when the form is submitted", () => {
    const onSearch = jest.fn();
    render(<PokemonForm onSearch={onSearch} />);

    const inputElement = screen.getByPlaceholderText(/Enter Pokémon name/i);
    const submitButton = screen.getByText(/Submit/i);

    fireEvent.change(inputElement, { target: { value: "pikachu" } });
    fireEvent.click(submitButton);

    expect(onSearch).toHaveBeenCalledWith("pikachu");
  });
});
