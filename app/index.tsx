import { Link, useRouter } from "expo-router";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

const Index = () => {
  const router = useRouter();

  const handleBeginJourney = () => {
    // Navigate to the main app screen
    router.push("/journey1");
  };

  const navigateToExodus = () => {
    router.push("/exodus");
  };

  return (
    <ImageBackground
      source={require("../assets/images/intro1bg.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo Container at the top */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/ustp-img.png")}
            style={styles.ustpLogo}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/LF-White.png")}
            style={styles.appLogo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.tagline}>"You find it fast, you claim it easy."</Text>

          <Text style={styles.description}>
            Connecting students, faculty, and staff in USTP-CDO to find or return lost items
            quickly and easily.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleBeginJourney}>
            <Text style={styles.buttonText}>BEGIN MY JOURNEY</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Powered by </Text>
            <TouchableOpacity onPress={navigateToExodus}>
              <Text style={styles.exodusLink}>EXODUS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
    marginBottom: 20,
  },
  ustpLogo: {
    width: 80,
    height: 80,
  },
  appLogo: {
    width: 240,
    height: 300,
    marginLeft: 45,
    marginTop: 20,
  },
  content: {
    alignItems: "center",
    width: "100%",
    maxWidth: 500,
  },
  tagline: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontStyle: "italic",
    color: "white",
    marginBottom: 60,
    textAlign: "center",
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 15,
    color: "white",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 70,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 70,
  },
  buttonText: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    color: "#000728",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
  exodusLink: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    textDecorationLine: "underline",
  },
});

export default Index;