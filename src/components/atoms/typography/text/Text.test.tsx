import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Text } from ".";

describe("<Text />", () => {
  const content = "This is a test"; // The text content to be rendered in the Text component.

  // Test case: It should render the text passed in the children with default styles.
  test("it renders the text passed in the children with default styles", () => {
    // Rendering the <Text /> component with the provided content.
    render(<Text>{content}</Text>);

    // Finding the text component in the rendered output based on its content.
    const textComponent = screen.getByText(content);

    // Assertion: The text component should be in the document (i.e., rendered).
    expect(textComponent).toBeInTheDocument();

    // Assert that the text component has the relevant styles
    expect(textComponent).toHaveClass("text-default-styles");
  });

  // Test case: It should render the text passed in the children with interactive text styles.
  test("it renders the text passed in the children with interactive text styles", () => {
    // Rendering the <Text /> component with the provided content and interactive prop true.
    render(<Text interactive>{content}</Text>);

    // Finding the text component in the rendered output based on its content.
    const textComponent = screen.getByText(content);

    // Assertion: The text component should be in the document (i.e., rendered).
    expect(textComponent).toBeInTheDocument();

    // Assert that the text component has the relevant styles
    expect(textComponent).toHaveClass("text-interactive-styles");
  });
});
