import FiltersActionTypes from './FiltersActionTypes';
import FiltersDispatcher from './FiltersDispatcher';

const Actions = {
  toggleFilter({filter, id}) {
    FiltersDispatcher.dispatch({
      type: FiltersActionTypes.TOGGLE_FILTER,
      filter,
      id
    });
  },
};

export default Actions;
