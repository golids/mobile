import { Link } from "expo-router";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      {/* Logo + tagline */}
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/images/LU-Logo.png")} // make sure filename has no spaces
          style={styles.logo}
        />
        <Text style={styles.logoName}>You find it fast, you claim it easy.</Text>
        <Text style={styles.loginText}>LOG IN NOW</Text>
        <Text style={styles.loginDescription}>
          Please log-in your account to continue using our app
        </Text>
      </View>

      {/* Login container */}
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        {/* Sign Up text */}
        <Text style={styles.signupText}>
          Don’t have an account? 
          <Link href="/sign_up">
          <Text style={styles.signupLink}> Sign Up</Text>
          </Link>
          
        </Text>

        {/* Divider text */}
        <Text style={styles.orContinue}>or continue with</Text>

        {/* Social login buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/fb.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/gmail.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Terms and Conditions at bottom */}
      <TouchableOpacity style={styles.termsWrapper}>
        <Text style={styles.termsText}>Terms and Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAFDFF",
  },
  topImageContainer: {
    marginTop: 100,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 209,
    height: 200,
    resizeMode: "contain",
  },
  logoName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#00204A",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Roboto-Bold",
  },
  loginText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginTop: 50,
    fontFamily: "Roboto-Bold",
  },
  loginDescription: {
    fontSize: 18,
    fontWeight: "400",
    color: "#808080",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Roboto-Regular",
  },

  loginContainer: {
    marginHorizontal: 30,
    marginTop: 5,
    borderRadius: 15,
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#333",
    backgroundColor: "#EAFDFF",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#00204A",
    textAlign: "right",
    marginBottom: 20,
    fontFamily: "Roboto-Regular",
  },
  loginButton: {
    width: 150,
    backgroundColor: "#00204A",
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: "center",
    alignSelf: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
  },

  signupText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    color: "#333",
    fontFamily: "Roboto-Regular",
  },
  signupLink: {
    color: "#00204A",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  orContinue: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 15,
    color: "#808080",
    fontFamily: "Roboto-Regular",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialIcon: {
    width: 50,
    height: 70,
    resizeMode: "contain",
  },

  // Terms & Conditions styles
  termsWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  termsText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#00204A",
    fontFamily: "Roboto-Regular",
  },


});

export default Index;