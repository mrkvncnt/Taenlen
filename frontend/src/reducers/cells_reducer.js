import { LOGOUT_SUCCESS } from '../actions/auth_actions';
import { RECEIVE_SAVINGS } from '../actions/balance_actions';
import { 
  STAGE_CELL,
  RECEIVE_CELL,
  RECEIVE_CELLS,
  REMOVE_CELL
} from '../actions/cell_actions';


const initialState = {
  all: {},
  staged: {}
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case STAGE_CELL: {
      const alteredState = Object.assign(state, {});
      delete alteredState.all[action.payload.id];
      return { ...alteredState, staged: action.payload };
    }
    case RECEIVE_CELL: {
      return { ...state, 
        all: { ...state.all, [action.payload.id]: action.payload },
        staged: {} 
      };
    }
    case RECEIVE_CELLS: {
      return { ...state, 
        all: action.payload.reduce((cells, cell) => { 
          cells[cell.id] = cell; 
          return cells; 
        }, {})
      };
    }
    case RECEIVE_SAVINGS: {
      return {...state, 
        staged: {},
      };
    }
    case REMOVE_CELL:
    case LOGOUT_SUCCESS: {
      const alteredState = Object.assign(state, {});
      delete alteredState.all[action.cell];
      return {...alteredState,
        staged: {}
      };
    }
    default:
      return state;
  }
};