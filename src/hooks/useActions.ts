import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from 'redux/store';
import { allActions } from 'redux/rootActions';

export type AppDispatch = typeof store.dispatch;

export const useActions = () => {
  const dispatch: AppDispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
