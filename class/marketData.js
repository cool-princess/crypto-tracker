import {AsyncStorage} from 'react-native';

export async function saveMarketData(coinMarket) {
	await AsyncStorage.setItem('market_data', JSON.stringify(coinMarket));
}

export async function getMarketData(){
	let marketData = await AsyncStorage.getItem('market_data');
	if (marketData !== null) {
		return JSON.parse(marketData);
	}
	return false;
}