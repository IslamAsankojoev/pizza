import React from 'react';
import { PizzaBlock, Categories, SortPopup, PizzaScelet } from '../components/index.js';
import axios from 'axios';
import { SearchContext } from '../App.js';

function Home() {
  const CategoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortBy, setSortBy] = React.useState({ sortName: 'популярности', slug: 'rating' });
  const [categoryId, setCategoryId] = React.useState(0);
  const { searchPizza } = React.useContext(SearchContext);

  React.useEffect(() => {
    axios
      .get(
        `https://6301d3a89a1035c7f80798e1.mockapi.io/items` +
          `${categoryId > 0 ? `?category=${categoryId}` : ''}` +
          `${categoryId ? `&sortBy=${sortBy.slug}` : `?sortBy=${sortBy.slug}`}` +
          `${searchPizza ? `&search=${searchPizza}` : ''}`,
      )
      .then((res) => {
        setItems(res.data);
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
        <Categories
          onClick={() => {}}
          items={CategoriesNames}
          id={categoryId}
          setId={setCategoryId}
        />
        <SortPopup
          items={[
            { sortName: 'популярности', slug: 'rating' },
            { sortName: 'цене', slug: 'price' },
            { sortName: 'алфавиту', slug: 'title' },
          ]}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
      <h2 className="content__title">
        {categoryId > 0 ? `${CategoriesNames[items[0].category - 1]}` : 'Все пиццы'}
      </h2>
      <div className="content__items">
        {isLoading
          ? Array(8)
              .fill(null)
              .map((_, index) => {
                return <PizzaScelet key={index} />;
              })
          : items.map((item) => {
              return <PizzaBlock key={item.id} {...item} />;
            })}
      </div>
    </div>
  );
}

export default Home;
