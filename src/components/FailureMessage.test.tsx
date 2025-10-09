import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FailureMessage from "./FailureMessage";

const component = (msg: string) => {
  return (
    <BrowserRouter>
      <FailureMessage msg={msg}></FailureMessage>
    </BrowserRouter>
  );
};

test("Failure message is rendered and displayed", () => {
  const errorMessage = "I'm a failure component";
  const { container } = render(component(errorMessage));
  expect(container).toHaveTextContent(errorMessage);
});
