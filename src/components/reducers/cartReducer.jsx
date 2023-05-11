const initial_data = {
    cart_items: []
}
export const cartReducer = (state=initial_data, action) => {
    let cart_items
    switch(action.type){
        case "ADD_TO_CART":
            cart_items = {...state, cart_items: [...state.cart_items, action.payload]}
            return cart_items

        case "REMOVE_FROM_CART":
            cart_items = {  ...state, 
                cart_items: [...state.cart_items.filter(item=>item.cart_id !== action.payload)]
            }
            return cart_items
            
        default: 
            return state
    }
}