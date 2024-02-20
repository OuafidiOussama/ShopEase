import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Collection from "../screens/Collection";

const mockStore = configureStore([]);

describe("<Collection />", () => {
  it("renders text when no courses are available", () => {
    const initialState = {
      Courses: { courses: [] },
    };
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Collection />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
