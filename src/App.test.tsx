import { shallow } from "enzyme";
import * as React from "react";
import App from "./App";

it("can renders without crashing using enzyme", () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toBeDefined();
});

it("should contain an input", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("input").length).toEqual(1);
});

it("has a value of 'text' when onChange", () => {
  const wrapper = shallow(<App />);
  wrapper.find("input").simulate("change", { target: { value: "text" } });
  wrapper.update();
  expect(wrapper.find("input").prop("value")).toEqual("text");
});
