import { createContext, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Header } from "./components"
import "./App.css"

export const SearchContext = createContext<any>({})

function App() {
  const [searchPizza, setSearchPizza] = useState("")

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchPizza, setSearchPizza }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App
