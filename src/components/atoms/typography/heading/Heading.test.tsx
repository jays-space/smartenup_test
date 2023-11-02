import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Heading } from ".";

describe("<Heading />", () => {
  test(`it renders the h1 element if variant prop is not passed`, () => {
    // Test case description: Ensure that the Heading component renders an h1 element when no "variant" prop is passed.

    const content = `This is a the default heading`; // Define the content to be displayed within the Heading component

    render(<Heading>{content}</Heading>); // Render the Heading component with the defined content

    const headingComponent = screen.getByRole("heading", {
      level: 1,
      name: content,
    }); // Use the screen utility to locate and retrieve the rendered h1 element with the specified content

    expect(headingComponent).toBeInTheDocument(); // Assert that the headingComponent is present in the document
  });

  for (let i = 1; i <= 6; i++) {
    // Loop through different heading variants (h1 to h6) to test rendering of each variant

    const content = `This is a h${i}`; // Define content for the current heading variant being tested

    test(`it renders the h${i} element if variant prop is h${i}`, () => {
      // Test case description: Ensure that the Heading component renders the specified h{i} element when the "variant" prop is set to "h{i}".

      render(
        <Heading
          variant={
            `h${i}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined
          } // Render the Heading component with the specified "variant" prop
        >
          {content}
        </Heading>
      );

      const headingComponent = screen.getByRole("heading", {
        level: i,
        name: content,
      }); // Use the screen utility to locate and retrieve the rendered h{i} element with the specified content

      expect(headingComponent).toBeInTheDocument(); // Assert that the headingComponent is present in the document
    });
  } 
});
