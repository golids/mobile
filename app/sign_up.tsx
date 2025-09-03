import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons"
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignUp = () => {
  return (
    <View style={styles.container}>

        <View style={styles.backIconContainer}>
        <Link href="/" asChild>
            <TouchableOpacity>
            <Feather name="arrow-left" size={40} color="#9e9e9eff"/>
            </TouchableOpacity>
        </Link>
        </View>


      {/* Logo + tagline */}
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/images/LU-Logo.png")}
          style={styles.logo}
        />
        <Text style={styles.logoName}>You find it fast, you claim it easy.</Text>
        <Text style={styles.loginText}>SIGN UP</Text>
        <Text style={styles.loginDescription}>
          Please fill-in the details
        </Text>
      </View>

      


      {/* Sign Up form */}
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
        />

        <View style={styles.rowContainer}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Age"
            placeholderTextColor="#888"
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="ID Number"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.rowContainer}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="College"
            placeholderTextColor="#888"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Program"
            placeholderTextColor="#888"
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        {/* Role Selection */}
        <Text style={styles.selectText}>Please SELECT</Text>
        <View style={styles.roleContainer}>
          <TouchableOpacity style={styles.roleButton}>
            <Text style={styles.roleText}>STUDENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roleButton}>
            <Text style={styles.roleText}>FACULTY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roleButton}>
            <Text style={styles.roleText}>STAFF</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

    
  backIconContainer: {
    width: 50,
    //backgroundColor: "grey",
    marginTop: 50,
    marginHorizontal: 50,
  },

  container: {
    flex: 1,
    backgroundColor: "#EAFDFF",
  },
  topImageContainer: {
    marginTop: 0,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    marginBottom: 10,
  },
  logoName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#00204A",
    textAlign: "center",
    marginBottom: 5,
  },
  loginText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginTop: 10,
  },
  loginDescription: {
    fontSize: 16,
    fontWeight: "400",
    color: "#808080",
    textAlign: "center",
    marginTop: 5,
  },
  loginContainer: {
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#EAFDFF",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 1,
    marginRight: 10,
  },
  selectText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    color: "#333",
    fontWeight: "500",
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  roleButton: {
    backgroundColor: "#00204A",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  roleText: {
    color: "#fff",
    fontWeight: "bold",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#00204A",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    alignSelf: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUp;