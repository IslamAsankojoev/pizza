import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getPizzaData } from "./pizza.actions"

type PizzaItem = {
  id: number
  title: string
  imageUrl: string
  price: number
  types: number
  sizes: number
}
interface PizzaState {
  items: PizzaItem[]
  status: string
}
const initialState: PizzaState = {
  items: [],
  status: "loading"
}

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPizzaData.pending, (state) => {
      state.status = "loading"
    });
    builder.addCase(getPizzaData.fulfilled, (state, action: PayloadAction<PizzaItem[]>) => {
      state.items = action.payload
      state.status = "success"
    });
    builder.addCase(getPizzaData.rejected, (state) => {
      state.items = []
      state.status = "error"
    });
  }
})

export const {actions} = pizzaSlice

export default pizzaSlice.reducer
