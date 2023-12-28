import {
  fireEvent,
  render,
  screen,
  waitFor,
  cleanup,
} from "@testing-library/react";
import React from "react";
import { SignUp } from "../pages";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("SignUp Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
  });

  afterEach(cleanup); // Clean up after each test

  it("should render Log in button and navigate to /login", () => {
    const loginButton = screen.getByText("Log in");
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);
    expect(window.location.pathname).toBe("/login");
  });

  it("should display validation error for invalid name", async () => {
    fireEvent.change(screen.getByPlaceholderText("First and last name"), {
      target: { value: "JohndDoe" },
    });

    const createAccountBtn = screen.getByText("Create account");
    fireEvent.click(createAccountBtn);

    await waitFor(() =>
      expect(
        screen.getByText("Enter both first and last name")
      ).toBeInTheDocument()
    );
  });

  it("should display validation error for invalid email", async () => {
    fireEvent.change(screen.getByPlaceholderText("name@company.com"), {
      target: { value: "something.com" },
    });

    const createAccountBtn = screen.getByText("Create account");
    fireEvent.click(createAccountBtn);

    await waitFor(() => {
      expect(
        screen.getByText("email must be a valid email")
      ).toBeInTheDocument();
    });
  });

  it("should display validation error for invalid password", async () => {
    fireEvent.change(screen.getByLabelText("Password", { selector: "input" }), {
      target: { value: "1234" },
    });
    const createAccountBtn = screen.getByText("Create account");
    fireEvent.click(createAccountBtn);

    await waitFor(() => {
      expect(
        screen.getByText("Password is too short - should be 8 chars minimum.")
      ).toBeInTheDocument();
    });
  });
});
