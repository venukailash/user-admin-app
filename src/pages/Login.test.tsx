import { test, expect, vi } from "vitest";
import Login from "./Login";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";

test("renders Login", () => {
  render(<Login />);
  expect(screen.getByRole("textbox")).toBeTruthy();
  expect(screen.getByRole("textbox")).toHaveAttribute(
    "placeholder",
    "Your email ID..."
  );
  expect(screen.getByRole("button")).toBeVisible();
  expect(screen.getByTitle("email-submit")).toBeVisible();
});

test("failure message is displayed when email ID is not entered", () => {
  render(<Login />);
  fireEvent.click(screen.getByRole("button"))
  expect(screen.getByText("Enter your email ID")).toBeInTheDocument()
});

test("failure message is cleared when email is entered", () => {
  const { container } = render(<Login />);
  act(() => {
    screen.getByRole("button").click();
    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "a",
      },
    });
    expect(container).not.toHaveTextContent("Enter your email ID");
  });
});

test("failure message is cleared after timeout", async () => {
  vi.useFakeTimers();
  const { container } = render(<Login />);
  act(() => {
    screen.getByRole("button").click();
  });
  expect(container).toHaveTextContent("Enter your email ID");
  vi.advanceTimersByTime(2900);
  expect(container).toHaveTextContent("Enter your email ID");
  vi.advanceTimersByTime(100);
  await vi.waitFor(() => {
    expect(screen.queryByText("Enter your email ID")).not.toBeInTheDocument();
  });
  vi.useRealTimers();
});
