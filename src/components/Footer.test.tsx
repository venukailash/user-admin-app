import { expect, test } from "vitest";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const component = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

test("renders Footer", () => {
  const { container } = render(component());
  expect(container).toHaveTextContent("Powered by SVK");
});
