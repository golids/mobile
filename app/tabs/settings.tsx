import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter, useNavigation } from 'expo-router'

const Settings = () => {
  const router = useRouter()
  const navigation = useNavigation()

  const handleLogout = () => {
    // Navigate back to the login page (app/index)
    router.replace('/')
  }

  // Set up header right button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={handleLogout}
          style={{ marginRight: 15 }}
        >
          <Ionicons name="log-out-outline" size={24} color="#00204A" />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/images/LU-Logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Settings Screen Content Coming Soon</Text>
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

export default Settings 