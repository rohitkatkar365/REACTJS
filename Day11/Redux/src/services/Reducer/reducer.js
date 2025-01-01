import { Add_TO_CART } from '../constant';

const initialState = {
  cardData: [],
};

export default function cardItem(state = initialState, action) {
  switch (action.type) {
    case Add_TO_CART:
      console.log(action);
      
      return {
        ...state,
        cardData: [...state.cardData, action.data], // Add new item to the array
      };

    default:
      return state;
  }
}
