import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CartItem = {
  id: number
  title: string
  imageUrl: string
  price: number
  types: string
  sizes: number
  count: number
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

const getTotalPrice = (cart: CartItem[]) => cart.reduce(
  (totalPrice, item) => totalPrice + item.price * item.count,
  0
)

const getTotalItems = (cart: CartItem[]) => cart.reduce(
  (totalItems, item) => totalItems + item.count,
  0
)

const getLocalCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || []
}

const setLocalCart = (cartState: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cartState))
}

const initialState: CartState = {
  items: getLocalCart(),
  totalPrice: getTotalPrice(getLocalCart()),
  totalItems: getTotalItems(getLocalCart())
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }
      state.totalPrice = getTotalPrice(state.items)
      state.totalItems = getTotalItems(state.items)
      setLocalCart(state.items)
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload
      })

      state.totalPrice = getTotalPrice(state.items)
      state.totalItems = getTotalItems(state.items)
      setLocalCart(state.items)
    },

    clearCart(state) {
      state.items = []
      state.totalPrice = 0
      state.totalItems = 0
      setLocalCart(state.items)
    },

    cartIncrement(state, action: PayloadAction<number>) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.count++
        }

        return item
      })
      state.totalPrice = getTotalPrice(state.items)
      state.totalItems = getTotalItems(state.items)
      setLocalCart(state.items)
    },

    setCart(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload
      state.totalPrice = getTotalPrice(state.items)
      state.totalItems = getTotalItems(state.items)
      setLocalCart(state.items)
    },

    cartDecrement(state, action: PayloadAction<number>) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.count--
        }
        return item
      })
      state.totalPrice = getTotalPrice(state.items)
      state.totalItems = getTotalItems(state.items)
      setLocalCart(state.items)
    }
  }
})

export const actions = cartSlice.actions

export default cartSlice.reducer
