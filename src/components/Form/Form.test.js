import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component,", () => {
  describe("When it render,", () => {
    test("Then it should render the button form", () => {
      render(<Form />);
      const buttonForm = screen.getByText("Add to list");

      expect(buttonForm).toBeInTheDocument();
    });
  });
});
