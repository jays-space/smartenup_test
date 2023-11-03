import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Statistic } from ".";

describe("<Text />", () => {
  const content = {
    value: 300,
    text: "test text",
  };

  test("it renders the statistic component with default styles", () => {
    render(<Statistic text={content.text} value={content.value} />);

    const renderedValue = screen.getByText(content.value);
    const renderedPlusSign = screen.getByTestId(/plus-sign/i);
    const renderedText = screen.getByText(content.value);

    expect(renderedValue).toBeInTheDocument();
    expect(renderedPlusSign).toBeInTheDocument();
    expect(renderedText).toBeInTheDocument();

    expect(renderedValue).toHaveClass("default-value-styles");
    expect(renderedPlusSign).toHaveClass("default-plus-sign-styles");
  });

  test("it renders the statistic component with colored bg styles", () => {
    render(<Statistic text={content.text} value={content.value} color />);

    const renderedValue = screen.getByText(content.value);
    const renderedPlusSign = screen.getByTestId(/plus-sign/i);
    const renderedText = screen.getByText(content.value);

    expect(renderedValue).toBeInTheDocument();
    expect(renderedPlusSign).toBeInTheDocument();
    expect(renderedText).toBeInTheDocument();

    expect(renderedValue).toHaveClass("colored-value-styles");
    expect(renderedPlusSign).toHaveClass("colored-plus-sign-styles");
  });
});
