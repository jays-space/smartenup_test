import "@testing-library/jest-dom";
import { render, screen, act, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Button } from ".";

describe("<Button />", () => {
  // Test case: It renders a button element with primary button styles when the variant prop === primary
  test(`it renders a button element with primary button styles when the variant prop === primary`, () => {
    const label = `primary button`;

    // Render the Button component with the "primary" variant and a label
    render(<Button variant="primary" label={label} />);

    // Find the button element by its accessible role and label
    const buttonComponent = screen.getByRole("button", {
      name: label,
    });

    // Assert that the button component is in the document
    expect(buttonComponent).toBeInTheDocument();
    // Assert that the button component has the "primaryButton" class
    expect(buttonComponent).toHaveClass("primaryButton");
  });

  // Test case: It renders a button element with secondary button styles when the variant prop === secondary
  test(`it renders a button element with secondary button styles when the variant prop === secondary`, () => {
    const label = `secondary button`;

    // Render the Button component with the "secondary" variant and a label
    render(<Button variant="secondary" label={label} />);

    // Find the button element by its accessible role and label
    const buttonComponent = screen.getByRole("button", {
      name: label,
    });

    // Assert that the button component is in the document
    expect(buttonComponent).toBeInTheDocument();
    // Assert that the button component has the "secondaryButton" class
    expect(buttonComponent).toHaveClass("secondaryButton");
  });

  // Test case: It renders a button element with default button styles when the variant prop is === default
  test(`it renders a button element with default button styles when the variant prop is === default`, () => {
    const label = `default button`;

    // Render the Button component with the "default" variant and a label
    render(<Button variant="default" label={label} />);

    // Find the button element by its accessible role and label
    const buttonComponent = screen.getByRole("button", {
      name: label,
    });

    // Assert that the button component is in the document
    expect(buttonComponent).toBeInTheDocument();
    // Assert that the button component has the "defaultButton" class
    expect(buttonComponent).toHaveClass("defaultButton");
  });

  // Test case: It renders a button element with default button styles when the variant prop is undefined
  test(`it renders a button element with default button styles when there is no variant (is undefined)`, () => {
    const label = `default button`;

    // Render the Button component with no "variant" prop and a label
    render(<Button label={label} />);

    // Find the button element by its accessible role and label
    const buttonComponent = screen.getByRole("button", {
      name: label,
    });

    // Assert that the button component is in the document
    expect(buttonComponent).toBeInTheDocument();
    // Assert that the button component has the "defaultButton" class
    expect(buttonComponent).toHaveClass("defaultButton");
  });

  // Test case: It runs the function passed in the onClick prop
  test(`it runs the function passed in the onClick prop`, async () => {
    const label = `test button`;
    const mockHandleClick = jest.fn(); // Create a mock function

    // Render the Button component with a label and an onClick handler
    render(<Button label={label} onClick={mockHandleClick} />);

    // Find the button element by its accessible role and label
    const buttonComponent = screen.getByRole("button", {
      name: label,
    });

    // Assert that the button component is in the document
    expect(buttonComponent).toBeInTheDocument();
    // Assert that the button component has the "defaultButton" class
    expect(buttonComponent).toHaveClass("defaultButton");

    // Simulate a click on the button using user-event
    act(() => {
      user.click(buttonComponent);
    });

    // Assert that the mock function was called
    await waitFor(() => {
      expect(mockHandleClick).toHaveBeenCalled();
    });
  });
});
