import React, { Component } from 'react'
import {
  StyleSheet,
  Text, 
  View,
  Image 
} from 'react-native'

import { TabNavigator } from 'react-navigation'
import couple from '../assets/couple.png'
import sachinImg from '../assets/sachin.jpg'
import dakshataImg from '../assets/dakshata.jpg'

export default class Couple extends Component {
  static navigationOptions = {
    tabBarLabel: 'Couple',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={couple}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.unique}>
          <Image source={sachinImg} style={styles.img}/>
          <Text style={styles.title}>Sachin Suryakant Manjrekar</Text>
          <Text style={styles.subTitle}>S/o Shri Suryakant Gopal Manjrekar & Smt. Supriya Suryakant Manjrekar</Text>
        </View>
        <Text style={[styles.title]}>Weds</Text>
        <View style={styles.unique}>
          <Image source={dakshataImg} style={styles.img}/>
          <Text style={styles.title}>Dakshata Dasharath Dabade</Text>
          <Text style={styles.subTitle}>D/o Shri Dasharath Mahadev Dabade & Smt. Deepika Dasharath Dabade</Text>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontFamily: 'merriweather_regular',
    fontSize: 30,
    color: '#fff'
  },
  subTitle: {
    fontFamily: 'lato_regular',
    fontSize: 18,
    color: '#fff'
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#01a5ba'
  },
  unique: {
    paddingLeft: 0
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 2
  }
});