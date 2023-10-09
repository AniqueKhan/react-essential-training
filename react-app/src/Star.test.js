import Star from "./Star";
import { render } from "@testing-library/react";

test("render a Star div", () => {
  const { getByText } = render(<Star />); // Destructuring the render function
  const h1 = getByText(/Cool Star/); // Selecting By Text
  expect(h1).toHaveTextContent("Cool Star"); // Verifying By Text
});
