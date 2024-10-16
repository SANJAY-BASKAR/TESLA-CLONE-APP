import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../src/features/car/carSlice";

// Named export of the store
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
