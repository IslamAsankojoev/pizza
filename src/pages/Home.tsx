import { useContext, useEffect } from "react"
import { PizzaBlock, Categories, SortPopup, PizzaSkeleton } from "components"
import { SearchContext } from "App"
import { useTypedSelector } from "hooks/useTypedSelector"
import { getPizzaData } from "redux/slices/pizza.actions"
import { useDispatch } from "react-redux"

const categoriesNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые"
]
const sortItems = [
  { sortName: "популярности", slug: "rating" },
  { sortName: "цене", slug: "price" },
  { sortName: "алфавиту", slug: "title" }
]

const Home: React.FC = () => {
  const { items, status } = useTypedSelector((state) => state.pizza)
  const sortBy = useTypedSelector((state) => state.sort.sortBy)
  const categoryId = useTypedSelector((state) => state.category.categoryId)
  const { searchPizza } = useContext(SearchContext)
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(getPizzaData({
      categoryId,
      sortBy,
      searchPizza
    }))
    window.scrollTo(0, 0)
  }, [categoryId, sortBy, searchPizza, dispatch])

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoriesNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">
        {!!categoryId ? `${categoriesNames[categoryId - 1]}` : "Все пиццы"}
      </h2>
      <div className="content__items">

        {status === 'loading'
          ? Array(4)

              .fill(null)
              .map((_, index) => {
                return <PizzaSkeleton key={index} />
              })
          : items?.map((item: any) => {
              return <PizzaBlock key={item.id} {...item} />
            })}
      </div>
      {status === "error" && (
        <div className="content__error">
          <h2>
            Здесь пиццы не осталось <i>😕</i>
          </h2>
          <h5>
            <p>
              <br />
              Сори бро что не получилось тебя покормить.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
          </h5>
        </div>
      )}
    </div>
  )
}

export default Home
