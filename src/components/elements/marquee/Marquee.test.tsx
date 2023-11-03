import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { Marquee } from ".";
import { MARQUEE_COPY } from "../../../copy";

describe("<Marquee />", () => {
  test(`it renders Marquee and all of the copy`, () => {
    // Render the Marquee component.
    render(<Marquee />);

    // Find the section component in the rendered DOM by its data-testid attribute.
    const marqueeComponent = screen.getByTestId("Marquee");

    // Assert that the section component is present in the DOM.
    expect(marqueeComponent).toBeInTheDocument();

    for (const text of MARQUEE_COPY) {
      // Find the content within the section component using within utility.
      const copy = within(marqueeComponent).getByText(text);

      // Assert that the text is present in the DOM.
      expect(copy).toBeInTheDocument();
    }
  });
});
