const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.key !== item.key)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.key === item.key)[0]

const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item)
    if (cartItem === undefined) {
        return [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    } else {
        // Do not add to quantity if it equals the same as the stock
        if (cartItem.quantity === cartItem.stock) {
            return [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 0 }]
        } else {
            return [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
        }
    }
}

const removeFromCart = (cart, item) => {
    return item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : [...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1 }]
}

const removeAllFromCart = (cart, item) => {
    return [ ...cartWithoutItem(cart, item) ]
}

const cartReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD':
            return addToCart(state, action.payload)

        case 'REMOVE':
            return removeFromCart(state, action.payload)

        case 'REMOVE_ALL':
            return removeAllFromCart(state, action.payload)

        case 'CAL':
            return 1

        default:
            return state;
    }
}

export default cartReducer