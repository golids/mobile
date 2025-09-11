import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TermsCond = () => {
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to home tab
    router.replace("/tabs/home");
  };

  return (
    <View style={styles.container}>
      {/* Header with back arrow */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#00204A" />
        </TouchableOpacity>
      </View>

      {/* Logo outside the gray container */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/LU-Logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>TERMS AND CONDITION</Text>
      </View>

      {/* Content with gray background container with spacing */}
      <View style={styles.contentWrapper}>
        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.intro}>
              Welcome to LF U-Stuff, the on-campus Lost & Found system of USTP-CDO. 
              By creating an account and using our app, you agree to the following Terms and Conditions.
            </Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>1. Eligibility</Text>
              <Text style={styles.bullet}>• The app is intended for USTP students, faculty, and staff only.</Text>
              <Text style={styles.bullet}>• Users must register with valid school information (Name, ID Number, Course/Department, and Contact Info).</Text>
              <Text style={styles.bullet}>• You are responsible for keeping your login credentials secure.</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>2. Posting Lost and Found Items</Text>
              <Text style={styles.bullet}>• Only registered users may post items.</Text>
              <Text style={styles.bullet}>• Poster must include accurate information (item name, description, date, and location).</Text>
              <Text style={styles.bullet}>• Uploading inappropriate, offensive, or misleading content is strictly prohibited.</Text>
              <Text style={styles.bullet}>• The user who posted an item is responsible for updating its status (i.e. – Found – Claimer).</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>3. Claiming Items</Text>
              <Text style={styles.bullet}>• Users must communicate honestly when claiming items.</Text>
              <Text style={styles.bullet}>• The original poster decides whether to release the item to a claimer.</Text>
              <Text style={styles.bullet}>• Claimers must provide proof of ownership before receiving the item.</Text>
              <Text style={styles.bullet}>• LF U-Skiff is not liable for disputes between users during the claiming process.</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>4. User Responsibilities</Text>
              <Text style={styles.bullet}>• Respectful communication is expected at all times.</Text>
              <Text style={styles.bullet}>• Do not use the app for spam, advertisements, or non-licensed content.</Text>
              <Text style={styles.bullet}>• Misuse of the system (false reports, false claims, harassment) may result in account restriction or removal.</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>5. Privacy & Data</Text>
              <Text style={styles.bullet}>• Your personal information (Name, ID, Course/Department, and Contact Info) may be shared with other users only when necessary for item recovery.</Text>
              <Text style={styles.bullet}>• Personal information will not be used for commercial purposes.</Text>
              <Text style={styles.bullet}>• By using the app, you consent to the collection and limited sharing of data needed to make the Lost & Found process work.</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>6. Limitations of Liability</Text>
              <Text style={styles.bullet}>• LF U-Skiff is a community tool, not an official USTP property custodian.</Text>
              <Text style={styles.bullet}>• The developers are not responsible for lost, stolen, or unreturned items.</Text>
              <Text style={styles.bullet}>• The system only facilitates posting, searching, and contacting – users are fully responsible for actual transactions.</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>7. Amendments</Text>
              <Text style={styles.bullet}>• Terms & Conditions may be updated as the app develops.</Text>
              <Text style={styles.bullet}>• Continued use of the app means you accept the updated terms.</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Continue button and agreement text outside the gray container */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
        <Text style={styles.agreementText}>
          By clicking continue you confirm that you have read, understood, and agreed to these Terms & Conditions.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAFDFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "#EAFDFF",
  },
  backButton: {
    marginRight: 10,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#EAFDFF",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00204A",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Roboto-Bold",
  },
  intro: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    fontFamily: "Roboto-Regular",
    lineHeight: 22,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00204A",
    marginBottom: 5,
    fontFamily: "Roboto-Bold",
  },
  bullet: {
    fontSize: 16,
    color: "#333",
    marginLeft: 5,
    marginBottom: 3,
    fontFamily: "Roboto-Regular",
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  continueButton: {
    backgroundColor: "#00204A",
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
  },
  agreementText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Roboto-Regular",
    lineHeight: 18,
  },
});

export default TermsCond;