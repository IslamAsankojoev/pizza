import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/categorySlice.js';

export default function Pagination() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setCategoryId(1));
      }}>
      Давайте мясные
    </button>
  );
}
