import { actions as cartActions } from './slices/cartSlice';
import { actions as categoryActions } from './slices/categorySlice';
import { actions as pizzaActions } from './slices/pizzaSlice';
import { actions as sortActions} from './slices/sortSlice';

export const allActions = {
  ...cartActions,
  ...categoryActions,
  ...pizzaActions,
  ...sortActions,
};
