import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const add_item = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/images/LU-Logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Screen Content Coming Soon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAFDFF',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#00204A',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
})

export default add_item