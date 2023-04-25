import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { BrowserRouter } from "react-router-dom";

import Body from "./Body";

const renderComponent = () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe("button Body component", () => {
  test("should navigate to todoPage when button is clicked", () => {
    renderComponent();
    const button = screen.getByText("Try it...");

    fireEvent.click(button);

    expect(window.location.pathname).toBe("/todoPage");
  });
});

expect.extend({ toMatchImageSnapshot });

describe("image Body component", () => {
  test("should image be fonctionnel", () => {
    renderComponent();
    const image = screen.getByAltText("imageTodo");
    expect(image).toMatchImageSnapshot();
  });
});

describe("CardBody component in Body component", () => {
  test("Should have a Card from CardBody", () => {
    renderComponent();
    const cardBodyElement = screen.getByTestId("card-body");
    expect(cardBodyElement).toBeInTheDocument();
  });
});
