import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Star } from ".";

describe("<Star />", () => {
  test("it renders the Star component", () => {
    render(<Star />);

    const renderedStar = screen.getByRole("img", {name:"star"});
    expect(renderedStar).toBeInTheDocument();

  });
});
