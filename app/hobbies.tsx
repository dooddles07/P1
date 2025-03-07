import React from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MotiView, MotiText } from "moti";
import { LinearGradient } from "expo-linear-gradient";

const hobbies = [
  { icon: "film-outline" as const, name: "Watching Movies & Series" },
  { icon: "tv-outline" as const, name: "Exploring Anime Worlds" },
  { icon: "game-controller-outline" as const, name: "Playing Online Games" },
  { icon: "bed-outline" as const, name: "Mastering the Art of Sleeping" },
  { icon: "airplane-outline" as const, name: "Traveling & Adventure" },
  { icon: "musical-notes-outline" as const, name: "Playing the Guitar" },
  { icon: "heart-outline" as const, name: "Missing Her (24/7)" },
];

const HobbiesScreen = () => {
  return (
    <View style={styles.flexContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#355c7d" />
      <LinearGradient colors={['#355c7d', '#6c5b7b', '#c06c84']} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          {/* Animated Header Section */}
          <MotiView 
            style={styles.header}
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 500 }}
          >
            <Text style={styles.title}>My Hobbies</Text>
            <Text style={styles.subtitle}>
              Things that keep me entertained and inspired
            </Text>
          </MotiView>

          {/* Hobbies List */}
          <MotiView 
            style={styles.hobbiesContainer}
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 200, duration: 600 }}
          >
            {hobbies.map((hobby, index) => (
              <MotiView
                key={index}
                style={styles.hobbyItem}
                from={{ opacity: 0, translateX: -20 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ delay: 300 + index * 100, duration: 500 }}
              >
                <MotiView
                  from={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", delay: 400 + index * 100 }}
                >
                  <Ionicons name={hobby.icon} size={24} color="#F2E9E4" />
                </MotiView>
                <MotiText 
                  style={styles.hobbyText}
                  from={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 500 + index * 100 }}
                >
                  {hobby.name}
                </MotiText>
              </MotiView>
            ))}
          </MotiView>

        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: { flex: 1 },
  container: { flex: 1, padding: 20 },
  scrollContainer: { flexGrow: 1 },
  header: { marginBottom: 30, marginTop: 20, alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "#F2E9E4", marginBottom: 6 },
  subtitle: { fontSize: 16, color: "#D3D3D3", textAlign: "center" },
  hobbiesContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hobbyItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(255, 255, 255, 0.4)",
  },
  hobbyText: { fontSize: 16, color: "#F2E9E4", marginLeft: 12 },
});

export default HobbiesScreen;
