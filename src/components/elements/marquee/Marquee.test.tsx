import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { Marquee } from ".";
import { MARQUEE_COPY } from "../../../copy";

describe("<Marquee />", () => {
  test(`it renders Marquee and all of the copy 2 times by default`, () => {
    // Render the Marquee component.
    render(<Marquee />);

    // Find the section component in the rendered DOM by its data-testid attribute.
    const marqueeComponent = screen.getByTestId("Marquee");

    // Assert that the section component is present in the DOM.
    expect(marqueeComponent).toBeInTheDocument();

    for (const text of MARQUEE_COPY) {
      // Find the content within the section component using within utility.
      const copy = within(marqueeComponent).getAllByText(text);

      // Assert that the text is present in the DOM and that it renders a minimum of 2 times.
      expect(copy.length).toBe(2);
    }
  });

  test(`it renders Marquee and all of the copy based on the nofLoops prop `, () => {
    // Number of times to loop the component's copy
    const nofLoops = 5
    
    // Render the Marquee component.
    render(<Marquee nofLoops={nofLoops} />);

    // Find the section component in the rendered DOM by its data-testid attribute.
    const marqueeComponent = screen.getByTestId("Marquee");

    // Assert that the section component is present in the DOM.
    expect(marqueeComponent).toBeInTheDocument();

    for (const text of MARQUEE_COPY) {
      // Find the content within the section component using within utility.
      const copy = within(marqueeComponent).getAllByText(text);

      // Assert that the text is present in the DOM and that it renders a minimum of 2 times.
      expect(copy.length).toBe(nofLoops);
    }
  });
});
