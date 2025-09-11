import { Link, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Animated,
  Easing,
} from "react-native";

const Index = () => {
  const router = useRouter();
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const logoScale = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Sequence of animations
    Animated.parallel([
      // Logo animation
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 800,
        easing: Easing.elastic(1.2),
        useNativeDriver: true,
      }),
      
      // Fade in animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      
      // Slide up animation
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      
      // Scale animation
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      
      // Button animation (delayed)
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 700,
        delay: 300,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleBeginJourney = () => {
    // Scale down animation when button is pressed
    Animated.timing(buttonScale, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        // Navigate to the main app screen after animation
        router.push("/journey1");
      });
    });
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
        {/* Logo Container at the top with animation */}
        <Animated.View 
          style={[
            styles.logoContainer,
            {
              opacity: fadeAnim,
              transform: [
                { scale: logoScale },
                { translateY: slideUpAnim }
              ]
            }
          ]}
        >
          <Animated.Image
            source={require("../assets/images/ustp-img.png")}
            style={[
              styles.ustpLogo,
              {
                transform: [{
                  scale: scaleAnim
                }]
              }
            ]}
            resizeMode="contain"
          />
          <Animated.Image
            source={require("../assets/images/LF-White.png")}
            style={[
              styles.appLogo,
              {
                opacity: fadeAnim,
                transform: [{
                  scale: scaleAnim
                }]
              }
            ]}
            resizeMode="contain"
          />
        </Animated.View>

        <Animated.View 
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [
                { translateY: slideUpAnim }
              ]
            }
          ]}
        >
          <Animated.Text 
            style={[
              styles.tagline,
              {
                opacity: fadeAnim,
                transform: [
                  { translateY: slideUpAnim }
                ]
              }
            ]}
          >
            "You find it fast, you claim it easy."
          </Animated.Text>

          <Animated.Text 
            style={[
              styles.description,
              {
                opacity: fadeAnim,
                transform: [
                  { translateY: slideUpAnim }
                ]
              }
            ]}
          >
            Connecting students, faculty, and staff in USTP-CDO to find or return lost items
            quickly and easily.
          </Animated.Text>

          <Animated.View
            style={{
              transform: [{ scale: buttonScale }]
            }}
          >
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleBeginJourney}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>BEGIN MY JOURNEY</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View 
            style={[
              styles.footer,
              {
                opacity: fadeAnim,
                transform: [
                  { translateY: slideUpAnim }
                ]
              }
            ]}
          >
            <Text style={styles.footerText}>Powered by </Text>
            <TouchableOpacity onPress={navigateToExodus}>
              <Text style={styles.exodusLink}>EXODUS</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    color: "#000728",
    textAlign: "center",
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