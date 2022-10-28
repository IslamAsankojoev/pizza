import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/categorySlice';
import { RootSate } from '../redux/store';


interface CategoriesProps {
  items: string[];
}


const Categories: React.FC<CategoriesProps> = ({ items }) => {
  const categoryId = useSelector((state: RootSate) => {
    return state.category.categoryId;
  });
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            dispatch(setCategoryId(0));
          }}
          className={categoryId === 0 ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={categoryId === index + 1 ? 'active' : ''}
                onClick={() => {
                  dispatch(setCategoryId(index + 1));
                }}
                key={index + 1}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default Categories;
