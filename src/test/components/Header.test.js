import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../components/Header";

describe("Header Component", () => {
  test("renders Header component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const headerElements = screen.getAllByRole(/a/i);
    expect(headerElements.length).toBeGreaterThan(0);
  });
});
