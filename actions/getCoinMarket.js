import query from 'axios';
import Url from '../constants/url';
import{FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL} from './index';

const url = Url.coinMarket;

const axios = query.create({
    headers: {
      'Content-Type': 'application/json',
      'X-CMC_PRO_API_KEY' : '22f83ff1-d1cc-433d-8795-153e55252c0e',
    }
});

export function getCoinMarket(){
    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(url)
            .then(res => {
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });         
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
            });   

    }
}
