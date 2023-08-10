import { actions as cartActions } from './slices/cart.slice';
import { actions as categoryActions } from './slices/category.slice';
import { actions as pizzaActions } from './slices/pizza.slice';
import { actions as sortActions} from './slices/sort.slice';

export const allActions = {
  ...cartActions,
  ...categoryActions,
  ...pizzaActions,
  ...sortActions,
};
