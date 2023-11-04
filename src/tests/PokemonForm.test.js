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
    //ARRANGE
    const onSearch = jest.fn();

    render(<PokemonForm onSearch={onSearch} />);

    const nameInput = screen.getByPlaceholderText(/Enter Pokémon name/i);
    const submitButton = screen.getByText(/Submit/i);

    //ACT
    fireEvent.change(nameInput, { target: { value: "pikachu" } });
    fireEvent.click(submitButton);

    //ASSERT
    expect(onSearch).toHaveBeenCalledWith("pikachu");
  });
});
