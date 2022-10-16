import React from 'react';
import { PizzaBlock, Categories, SortPopup, PizzaScelet } from '../components/index';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizza } from '../redux/slices/pizzaSlice';


const Home: React.FC = () => {
  const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    { sortName: 'популярности', slug: 'rating' },
    { sortName: 'цене', slug: 'price' },
    { sortName: 'алфавиту', slug: 'title' },
  ];
  const { items, status } = useSelector((state:any) => state.pizza);
  const sortBy = useSelector((state:any) => state.sort.sortBy);
  const categoryId = useSelector((state:any) => state.category.categoryId);
  const dispatch = useDispatch();
  const { searchPizza } = React.useContext(SearchContext);

  React.useEffect(() => {
    dispatch(
      fetchPizza({
        categoryId,
        sortBy,
        searchPizza
      }
      ),
    );
    window.scrollTo(0, 0);
  }, [categoryId, sortBy, searchPizza, dispatch]);

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
        {status === 'loading'
          ? Array(8)
              .fill(null)
              .map((_, index) => {
                return <PizzaScelet key={index} />;
              })
          : items.length > 0
          ? items.map((item:any) => {
              return <PizzaBlock key={item.id} {...item} />;
            })
          : ''}
      </div>
      {status === 'error' ? (
        <div className="content__error">
          <h2>
            Здесь пиццы не осталось <i>😕</i>
          </h2>
          <h5>
            {' '}
            <p>
              <br />
              Сори бро что не получилось тебя покормить.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
          </h5>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
