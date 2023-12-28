import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { LogIn } from "../pages";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <LogIn />
    </BrowserRouter>
  );
});

test("should render create button and navigate to /signup", () => {
  const createButton = screen.getByText("Create");
  expect(createButton).toBeInTheDocument();

  fireEvent.click(createButton);
  expect(window.location.pathname).toBe("/signup");
});
