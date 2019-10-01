import React from "react";
import { shallow } from "enzyme";
import Headline from "./headline";
import { findByTestAttr, checkProps } from "../../../Utils/testUtils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking Proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            firstName: "Test firstName",
            lastName: "Test lastName",
            email: "test@email.com",
            age: 26,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test desc"
      };
      component = setUp(props);
    });
    it("Should render without errors", () => {
      const wrapper = findByTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(1);
    });
    it("Should render an h1", () => {
      const h1 = findByTestAttr(component, "header");
      expect(h1.length).toBe(1);
    });
    it("Should render a desc", () => {
      const desc = findByTestAttr(component, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Without props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("Should not render", () => {
      const wrapper = findByTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
