import "./matchMedia.js";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";
import { CustomButton } from "./components/CustomButton";
import renderer from "react-test-renderer";

afterEach(cleanup);

test("renders app title To Do Application", () => {
  render(<App />);
  const linkElement = screen.getByText(/To Do Application/i);
  expect(linkElement).toBeInTheDocument();
}); //do a test to find if the title is same as To Do Application

it("Renders button component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CustomButton />, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<CustomButton>Add Task</CustomButton>);
  expect(getByTestId("button")).toHaveTextContent("Add Task");
});

it("renders button correctly", () => {
  const { getByTestId } = render(<CustomButton>Test</CustomButton>);
  expect(getByTestId("button")).toHaveTextContent("Test");
});

it("matches snapshot", () => {
  const tree = renderer.create(<CustomButton>Done</CustomButton>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot of add task button", () => {
  const tree = renderer.create(<CustomButton>ADD TASK</CustomButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
