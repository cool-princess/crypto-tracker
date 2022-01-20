import React from 'react';
import {  StyleSheet, Text, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
const { width: viewportWidth} = Dimensions.get('window');

class Header extends React.Component {
    render() {
        return (
            <View style={styles.component}>
                <View style={styles.layouts}>
                    <View style={{flex:1, paddingLeft:10,}}>
                        <Ionicons style={styles.notice} name="md-notifications"/> 
                    </View>
                    <View style={{flex:2, marginLeft:10,}}>      
                        <Text style={styles.title}>CRYPTO {this.props.pageName}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
	component: {
	    width: '100%',
        backgroundColor: Colors.topColor,
	    height: '10%',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 17.5,
	    paddingBottom: 7.5,
	},
	layouts: {
        flexDirection: 'row',
        width:viewportWidth,
        marginTop:10,
        height: '15%',
	},
	title:{
        fontSize:14,
        fontFamily:'Roboto',
        fontWeight :"700",
        color:'#eee',
        zIndex:1000,
        textAlign:'left',
        marginTop:10,
    },
    notice:{
        fontSize:34,
        color:'#eee'
    }
});
export default Header;

