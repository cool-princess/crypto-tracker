import React from 'react';
import {  
  ScrollView,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';

class Body extends React.Component {
  render(){
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            { this.props.children}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BodyColor,
  },
  contentContainer: {
    paddingTop: 30,
    paddingLeft:5,
    paddingBottom:30,
    paddingRight:5,
  },
});
export default Body;