import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Items from "./Customer/Items";

test("checking ADD TO CART button", () => {
  render(<Items />);
  const linkElement = screen.getByTestId("atc_b");
  expect(linkElement).toBeInTheDocument();
});
