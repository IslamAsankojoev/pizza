import React from 'react';
import { PizzaBlock, Categories, SortPopup, PizzaScelet } from '../components/index';
import axios from 'axios';
import { SearchContext } from '../App.js';
import { useSelector, useDispatch } from 'react-redux';
import { setPizzas } from '../redux/slices/pizzaSlice';

function Home() {
  const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    { sortName: 'популярности', slug: 'rating' },
    { sortName: 'цене', slug: 'price' },
    { sortName: 'алфавиту', slug: 'title' },
  ];
  const items = useSelector((state) => state.pizzas.items);
  const [isLoading, setIsLoading] = React.useState(true);
  const sortBy = useSelector((state) => state.sort.sortBy);
  const categoryId = useSelector((state) => state.category.categoryId);
  const dispatch = useDispatch();
  const { searchPizza } = React.useContext(SearchContext);
  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://6301d3a89a1035c7f80798e1.mockapi.io/items` +
          `${categoryId > 0 ? `?category=${categoryId}` : ''}` +
          `${categoryId ? `&sortBy=${sortBy.slug}` : `?sortBy=${sortBy.slug}`}` +
          `${searchPizza ? `&search=${searchPizza}` : ''}`,
      )
      .then((res) => {
        dispatch(setPizzas(res.data));
        setIsLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId, sortBy, searchPizza]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoriesNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">
        {categoryId > 0 ? `${categoriesNames[categoryId - 1]}` : 'Все пиццы'}
      </h2>
      <div className="content__items">
        {isLoading
          ? Array(8)
              .fill(null)
              .map((_, index) => {
                return <PizzaScelet key={index} />;
              })
          : items.length > 0
          ? items.map((item) => {
              return <PizzaBlock key={item.id} {...item} />;
            })
          : ''}
      </div>
    </div>
  );
}

export default Home;
