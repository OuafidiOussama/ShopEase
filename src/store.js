import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "./redux/Courses"
import PurchaseReducer from "./redux/Purchases"

const store = configureStore({
  reducer: {
    Courses: CoursesReducer,
    Purchases: PurchaseReducer
  },
});

export default store;
