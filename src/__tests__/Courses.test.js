import React from "react";
import renderer from "react-test-renderer";
import { useDispatch } from "react-redux";
import Courses from "../screens/Courses";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("<Courses />", () => {
  it("renders correctly", () => {
    const route = {
      params: {
        cours: {
          item: {
            title: "Test Title",
            description: "Test Description",
            image: "https://example.com/image.jpg",
            price: 10,
            id: 1,
          },
        },
      },
    };

    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    const tree = renderer.create(<Courses route={route} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
