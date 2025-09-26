import { test, expect } from "vitest";
import Login from "../src/pages/Login";
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
