import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Text } from ".";

describe("<Text />", () => {
  const content = "This is a test"; // The text content to be rendered in the Text component.

  // Rendering the <Text /> component with the provided content.
  render(<Text>{content}</Text>);

  // Test case: It should render the text passed in the children.
  test("it renders the text passed in the children", () => {
    // Finding the text component in the rendered output based on its content.
    const textComponent = screen.getByText(content);

    // Assertion: The text component should be in the document (i.e., rendered).
    expect(textComponent).toBeInTheDocument();
  });
});
