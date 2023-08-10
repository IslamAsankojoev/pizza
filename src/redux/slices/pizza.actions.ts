import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { sortItem } from "./sort.slice"

export const getPizzaData = createAsyncThunk(
  "pizza/getPizzaData",
  async ({ categoryId, sortBy, searchPizza }: {categoryId: number, sortBy: sortItem, searchPizza: string}) => {
    try{
      const response = await axios.get(
        `https://6301d3a89a1035c7f80798e1.mockapi.io/items` +
          `${!!categoryId ? `?category=${categoryId}` : ""}` +
          `${categoryId ? `&sortBy=${sortBy.slug}` : `?sortBy=${sortBy.slug}`}` +
          `${searchPizza ? `&search=${searchPizza}` : ""}`
      )
      return response.data
    } catch (error){
      throw error
    }
  }
)