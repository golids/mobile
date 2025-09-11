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

const journey3 = () => {
  const router = useRouter();

  const handleNext = () => {
    // Navigate to the next onboarding screen
    router.push("/journey4");
  };

  const handleSkip = () => {
    // Navigate directly to login
    router.push("/login");
  };

  const handleBack = () => {
    // Navigate back to previous page
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back arrow matching Terms & Conditions */}
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
          RED or GREEN?
        </Text>
        <Text style={styles.description}>
          SPOTTED or CLAIM?
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
          Items marked in red are reported as lost by students. If you find one, you can notify "SPOTTED" the owner through the app.
        </Text>
        <Text style={styles.additionalText}>
          Items marked in green are reported as found on campus. If you lost something, check here to "CLAIM" if it has been turned in.
        </Text>
      </ScrollView>

      {/* Page indicator positioned above buttons */}
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
      </View>

      {/* Footer with skip and next buttons */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
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
  // Pagination container - positioned at bottom above buttons
  paginationContainer: {
    position: "absolute",
    bottom: 70, // Position above the buttons
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10, // Ensure it's above other elements
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#00204A",
    opacity: 0.3,
    marginHorizontal: 6,
  },
  activeDot: {
    opacity: 1,
    width: 20,
    backgroundColor: "#00204A",
  },
  // Footer container with buttons
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 15,
    backgroundColor: "#EAFDFF",
  },
  skipButton: {
    padding: 10,
  },
  skipText: {
    color: "#00204A",
    fontSize: 16,
    fontWeight: "500",
  },
  nextButton: {
    backgroundColor: "#00204A",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  nextText: {
    color: "#EAFDFF",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 5,
  },
  nextIcon: {
    marginLeft: 2,
  },
});

export default journey3;