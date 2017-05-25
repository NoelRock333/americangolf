import {ReduceStore} from 'flux/utils';
import FiltersActionTypes from '../actions/FiltersActionTypes';
import FiltersDispatcher from '../actions/FiltersDispatcher';

class FiltersStore extends ReduceStore {
  constructor() {
    super(FiltersDispatcher);
  }

  getInitialState() {
    return {};
  }

  reduce(state, action) {
    switch (action.type) {
      case FiltersActionTypes.TOGGLE_FILTER: {
        const array =  state[action.filter] || [];
        const indexOf = array.indexOf(action.id);
        const newArray = indexOf >= 0 ? [...array.slice(0, indexOf), ...array.slice(indexOf + 1)] : [...array, action.id];
        return {...state, [action.filter]: newArray };
      }
      default:
        return state;
    }
  }
}

export default new FiltersStore();
