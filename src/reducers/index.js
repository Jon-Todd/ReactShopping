import {combineReducers} from 'redux';
import promoCodeReducer from './promoCodeReducer';
import cartReducer from '../components/features/cart/cartreducer'

export default combineReducers({
    promoCode: promoCodeReducer,
    cart: cartReducer
});