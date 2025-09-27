import { test, expect } from "vitest";
import Login from "./Login";
import { render, screen } from "@testing-library/react";

test("renders Login", async () => {
  render(<Login />);
  expect(await screen.findByRole("textbox")).toBeTruthy();
  expect(await screen.findByRole("textbox")).toHaveAttribute(
    "placeholder",
    "Your email ID..."
  );
  expect(await screen.getByRole("button")).toBeVisible();
  expect(await screen.getByTitle("email-submit")).toBeVisible();
});

test("failure message is displayed when email ID is not entered", async () => {
  const { container } = render(<Login />);
  await screen.getByRole("button").click();
  expect(container).toHaveTextContent("Enter your email ID")
});
