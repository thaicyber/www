
import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Drawer from "./Drawer";

describe("With Enzyme", () => {
  it('component shows "Hello world!"', () => {
    const app = shallow(<Drawer>Hello World!</Drawer>);
    expect(app.find("p").text()).toStrictEqual("Hello World!");
  });
});

describe("With Snapshot Testing", () => {
  it('app shows "Hello world!"', () => {
    const component = renderer.create(<Drawer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
