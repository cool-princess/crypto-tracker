import {combineReducers} from 'redux';
import CoinMarket from './coin-market';
import themeReducer from './theme-reducer';
export default combineReducers({
    CoinMarket,
    themeReducer,
})