import { type } from "@testing-library/user-event/dist/type"


export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload : item
    }

}