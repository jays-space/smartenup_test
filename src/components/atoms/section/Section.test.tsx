import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { Section } from ".";

describe("<Section />", () => {
  test(`it renders a section element and its children`, () => {
    const title = "Test section"; // Define a title for the Section component.
    const content = "This is a section element"; // Define the content for the Section component.

    // Render the Section component with the defined title and content.
    render(<Section title={title}>{content}</Section>);

    // Find the section component in the rendered DOM by its data-testid attribute.
    const sectionComponent = screen.getByTestId(title);

    // Find the content within the section component using within utility.
    const sectionContent = within(sectionComponent).getByText(content);

    // Assert that the section component is present in the DOM.
    expect(sectionComponent).toBeInTheDocument();

    // Assert that the section component has the correct background color.
    expect(sectionComponent).toHaveClass("bg-background");

    // Assert that the content is present within the section component.
    expect(sectionContent).toBeInTheDocument();
  });
});
