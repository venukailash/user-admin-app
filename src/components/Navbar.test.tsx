import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

const component = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

test("renders Navbar", () => {
  const { container } = render(component());
  expect(container).toHaveTextContent("User Admin App");
  expect(container).toHaveTextContent("User Admin App");
  expect(container).toHaveTextContent("Home");
  expect(container).toHaveTextContent("Login");
});
