import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const journey4 = () => {
  const router = useRouter();

  const handleStart = () => {
    // Navigate to the login screen
    router.push("/login");
  };

  const handleBack = () => {
    // Navigate back to previous page
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
        >
          <Ionicons name="arrow-back" size={24} color="#00204A" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo at center-top */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/LU-Logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Description text */}
        <Text style={styles.description}>
          Get your things back with no hassle!
        </Text>

        {/* Content with image */}
        <View style={styles.content}>
          <Image
            source={require("../assets/images/megaphone.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Additional text */}
        <Text style={styles.additionalText}>
         Once items are safely returned, posters can mark them as ‘Claimed’ so everyone knows it’s resolved. The process is simple, secure, and designed to give peace of mind to both the finder and the owner.
        </Text>
      </ScrollView>

      {/* Start button positioned at the bottom left */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAFDFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Space for fixed elements at bottom
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 15 : 10,
    paddingBottom: 10,
    backgroundColor: "#EAFDFF",
  },
  backButton: {
    marginRight: 10,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  description: {
    fontSize: 18,
    color: "#00204A",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  image: {
    width: "100%",
    height: 250,
  },
  additionalText: {
    fontSize: 16,
    color: "#00204A",
    textAlign: "center",
    lineHeight: 22,
    opacity: 0.8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  // Footer container with start button on the left
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "flex-end", // Align to left
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 15,
    backgroundColor: "#EAFDFF",
  },
  startButton: {
    backgroundColor: "#00204A",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  startText: {
    color: "#EAFDFF",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 5,
  },
  nextIcon: {
    marginLeft: 2,
  },
});

export default journey4;