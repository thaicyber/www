import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import CardContainer from "./CardsContainer";

describe("With Enzyme", () => {
  it('component shows "Hello world!"', () => {
    const app = shallow(<CardContainer>Hello World!</CardContainer>);
    expect(app.find("p").text()).toStrictEqual("Hello World!");
  });
});

describe("With Snapshot Testing", () => {
  it('app shows "Hello world!"', () => {
    const component = renderer.create(<CardContainer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
