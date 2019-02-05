import { mount, ReactWrapper } from "enzyme";
import * as React from "react";
import App from "./App";

let wrapper: ReactWrapper;
beforeEach(() => {
  wrapper = mount(<App />);
});
afterEach(() => {
  wrapper.unmount();
});
it("has an input element", () => {
  expect(wrapper.find("input").length).toEqual(1);
});
it("has a value of 'text' when onChange", () => {
  wrapper.find("input").simulate("change", { target: { value: "text" } });
  wrapper.update();
  expect(wrapper.find("input").prop("value")).toEqual("text");
});
