import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

describe("Home", () => {
  it("renders a button", () => {
    render(<Header />);

    const text = screen.getByText(/Movies/i);

    expect(text).toBeInTheDocument();
  });
});
