import React from 'react'
import {connect} from 'react-redux';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { getCoinMarket } from './../../../actions/getCoinMarket';
import { BarIndicator } from 'react-native-indicators';
import { saveMarketData } from '../../../class/marketData';
import Colors from '../../../constants/Colors';
import Items from './ListItems';

class ListView extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            error:false,
			coinMarketData:[]
		}
	}
    /**
     * Get The Latest coin from the api and save it if need be 
    */
    componentDidMount(){
        let self = this;
		this.props.getCoinMarket().then(
			(res)=>{
				const {hasError, data} = this.props.CoinMarket;
				if(hasError){
					return this.setState({ error: true })
				}
				this.setState({coinMarketData:data})
				return saveMarketData(data);
			}
		)
    }
    _renderItems(){
        let { coinMarketData } = this.state;
		if(coinMarketData == null || coinMarketData.length == 0){
			return;
		}
		console.log(coinMarketData)
		const {data } = coinMarketData
		return data.map((coin, index) =>
			<Items  
				key={index}
				symbol={coin.symbol} 
				coin_name={coin.name} 
				price_usd={coin.quote.USD.price}
				cap={coin.quote.USD.market_cap}
				volume={coin.total_supply}
				percent_change_1h = {coin.percent_change_1h}
				percent_change_24h = {coin.percent_change_24h}
				percent_change_7d = {coin.percent_change_7d}
			/>
		)
    }
    render() {
        const { coinMarketData } = this.state;
		if(coinMarketData === null || coinMarketData.length == 0 ){
			return (
				<BarIndicator  
					count={4} 
					color={Colors.normalTextColor}
					size={45}
					style={styles.indicator}
				/>
			)
		}
        return (
			<View>				
				<Text style={styles.header}>
                    Coin Market CAP
				</Text>
				<ScrollView style={styles.component}>
					<View style={styles.layouts}>
						{ this._renderItems() }
					</View>
				</ScrollView>
			</View>

        );
    }
}

const styles = StyleSheet.create({
    header:{
        flex:1,
        fontSize:17,
		marginTop:10 ,
        marginBottom:10 ,
        textAlign:'center',
        color:Colors.errorText,
		backgroundColor:Colors.bottomColor,
    },
});

function mapStateToProps(state) {
	return{
		CoinMarket : state.CoinMarket
	}
}
export default connect(mapStateToProps, {getCoinMarket})(ListView)
