import { FETCH_SEASON } from '../constants';

const initialState = {
    season: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case FETCH_SEASON:
        return { ...state, season: payload };
      default:
        return state;
    }
  };