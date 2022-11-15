import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Aboutus from "./Customer/Aboutus";

test("checking email field is rendered or not", () => {
  render(<Aboutus />);
  const linkElement = screen.getByTestId("em_tid");
  expect(linkElement).toBeInTheDocument();
});

test("checking feedback textarea is rendered or not", () => {
  render(<Aboutus />);
  const linkElement = screen.getByTestId("feed_tid");
  expect(linkElement).toBeInTheDocument();
});
