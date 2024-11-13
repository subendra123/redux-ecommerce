
const INITIAL = {
    carts: [],

}

export const cartReducer = (state=INITIAL, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
            
          
        default:
            return state;
    }

}