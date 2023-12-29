import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { LogIn } from "../pages";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore();

describe("Login Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render create button and navigate to /signup", () => {
    const createButton = screen.getByText("Create");
    expect(createButton).toBeInTheDocument();

    fireEvent.click(createButton);

    const pathname = window.location.pathname;
    expect(pathname).toBe("/signup");
  });
});
