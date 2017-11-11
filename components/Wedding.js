import React, { Component } from 'react'
import {
  StyleSheet,
  Text, 
  View,
  Image 
} from 'react-native'

import { TabNavigator } from 'react-navigation'
import wedding from '../assets/wedding.png'

export default class Wedding extends Component {
  static navigationOptions = {
    tabBarLabel: 'Wedding',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={wedding}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }
  render() {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>Muhurat</Text>
            <Text style={styles.subTitle}>Sunday 3rd Dec 2017,
                12:40 PM
                at "Reti Bhavan"
            </Text>
        </View>
    )
  }
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01a5ba'
  },
  title: {
    fontFamily: 'merriweather_regular',
    fontSize: 35,
     color: '#fff'

  },
  subTitle: {
    fontFamily: 'lato_regular',
    fontSize: 18,
    paddingTop: 30,
    width: 280,
    color: '#fff',
    lineHeight: 30
  },
});