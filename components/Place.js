import React, { Component } from 'react'
import {
  StyleSheet, 
  Image,
  Dimensions,
  Linking,
  Text
} from 'react-native'

import { TabNavigator } from 'react-navigation'
import place from '../assets/place.png'

import MapView from 'react-native-maps';

var {height, width} = Dimensions.get('window');

export default class Place extends Component {
  static navigationOptions = {
    tabBarLabel: 'Location',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={place}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }
  render() {
    return (
        <MapView
          style={styles.map}
          region={{
            latitude: 19.2195,
            longitude: 73.0880,
            latitudeDelta: 0.115,
            longitudeDelta: 0.112,
          }}
        >
            <MapView.Marker
          coordinate={{
            latitude: 19.2195,
            longitude: 73.0880,
          }}
          title={"Reti Bhavan"}
          onPress={()=> {
            Linking.openURL("https://www.google.co.in/maps/place/Reti+Bhavan,+Mahatma+Gandhi+Rd,+Ambika+Nagar,+Dombivli+West,+Dombivli,+Maharashtra+421202/@19.2194914,73.0857857,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7958aa9afbae7:0x56fbc494fd0812ae!8m2!3d19.2194914!4d73.0879744") 
          }}
        />
        </MapView>
    );
  }
};

const styles = StyleSheet.create({
  map: {
   flex: 1,
   width: width,
   height: height
  },
  icon: {
    width: 30,
    height: 30,
  },
});