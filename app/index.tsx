import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInUp, FadeIn } from 'react-native-reanimated';

// Import the profile image
const profileImage = require('../assets/images/profile.jpg');

// Reusable component for displaying values and skills
const SkillItem: React.FC<{ icon: keyof typeof Ionicons.glyphMap; title: string; description: string }> = ({ icon, title, description }) => (
  <Animated.View entering={FadeInUp.duration(500).springify()} style={styles.skillItem}>
    <Ionicons name={icon} size={24} color="#fff" style={styles.skillIcon} />
    <View style={styles.skillText}>
      <Text style={styles.skillTitle}>{title}</Text>
      <Text style={styles.skillDescription}>{description}</Text>
    </View>
  </Animated.View>
);

export default function HomeScreen() {
  return (
    <LinearGradient colors={['#355c7d', '#6c5b7b', '#c06c84']} style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Section */}
        <Animated.View entering={FadeInUp.duration(500).springify()} style={styles.section}>
          <View style={styles.profileHeader}>
            <Image source={profileImage} style={styles.profileImage} />
            <View style={styles.profileText}>
              <Text style={styles.profileName}>Brixsonn Romero</Text>
              <View style={styles.profileLocation}>
                <Ionicons name="location-outline" size={16} color="#fff" />
                <Text style={styles.locationText}>Zone 1, Del Rosario, Naga City, Philippines</Text>
              </View>
            </View>
          </View>
          <Text style={styles.bioText}>
            Hey there! I'm Brixsonn Romero, a Computer Science student on a mission to conquer the tech world—one bug at a time. 
            I have an undying passion for coding, ethical hacking, and problem-solving. I want also to fly like a butterfly fly high butterfly
          </Text>
        </Animated.View>

        {/* Featured Skills */}
        <Animated.View entering={FadeInUp.duration(500).springify()} style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Skills</Text>
          <SkillItem 
            icon="bug-outline" 
            title="Ethical Hacking" 
            description="Identifying and securing vulnerabilities to enhance cybersecurity." 
          />
          <SkillItem 
            icon="code-working-outline" 
            title="Software Development" 
            description="Building efficient and scalable applications with modern technologies." 
          />
          <SkillItem 
            icon="analytics-outline" 
            title="Problem Solving" 
            description="Applying logical and creative thinking to tackle complex challenges." 
          />
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  section: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginBottom: 15,
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  locationText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 5,
  },
  bioText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#fff',
    textAlign: 'justify',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  // Featured Skills Styling
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 10,
  },
  skillIcon: {
    marginRight: 15,
  },
  skillText: {
    flex: 1,
  },
  skillTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  skillDescription: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
  },
});