import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const aboutImage = require('../assets/images/profile.jpg');

const ValueItem: React.FC<{ icon: keyof typeof Ionicons.glyphMap; title: string; description: string }> = ({ icon, title, description }) => (
  <View style={styles.valueItem}>
    <Ionicons name={icon} size={24} color="#fff" style={styles.valueIcon} />
    <View>
      <Text style={styles.valueTitle}>{title}</Text>
      <Text style={styles.valueDescription}>{description}</Text>
    </View>
  </View>
);

export default function AboutScreen() {
  return (
    <LinearGradient colors={['#355c7d', '#6c5b7b', '#c06c84']} style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.section}>
          <View style={styles.bioHeader}>
            <Image source={aboutImage} style={styles.profileImage} />
            <View style={styles.bioHeaderText}>
              <Text style={styles.bioName}>Brixsonn Romero</Text>
              <View style={styles.bioLocation}>
                <Ionicons name="location-outline" size={16} color="#fff" />
                <Text style={styles.locationText}> Zone 1, Del Rosario, Naga City, Philippines</Text>
              </View>
            </View>
          </View>

          <Text style={[styles.bioText, { textAlign: 'justify' }]}>
            {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
            Hey there! I'm Brixsonn Romero, a Computer Science student on a mission to conquer the tech world—one bug at a time. 
            I have an undying passion for coding, ethical hacking, and problem-solving. If I'm not busy debugging code, 
            you'll probably find me mastering the art of strategic snacking, competing in intense PC gaming matches, or catching up on some well-deserved sleep.
          </Text>
        </View>

        {/* Core Values */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Values</Text>
          <ValueItem icon="bulb-outline" title="Innovation" description="I explore new ideas and approaches to solve complex problems." />
          <ValueItem icon="trending-up-outline" title="Continuous Learning" description="I dedicate time each week to learning new technologies and improving my skills." />
          <ValueItem icon="people-outline" title="Collaboration" description="I thrive in team environments where ideas and feedback flow freely." />
        </View>

        {/* Tech Stack */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tech Stack</Text>
          <ValueItem icon="logo-react" title="React Native" description="Building interactive and dynamic mobile applications." />
          <ValueItem icon="code-outline" title="JavaScript & Python" description="Writing clean and efficient code for web and backend development." />
          <ValueItem icon="server-outline" title="Database Management" description="Experienced in MySQL, Firebase, and MongoDB for scalable data solutions." />
        </View>

        {/* Fun Facts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fun Facts About Me</Text>
          <ValueItem icon="game-controller-outline" title="Gamer Mode: ON" description="I spend my free time dominating PC games like Valorant, Dota 2, and Call of Duty." />
          <ValueItem icon="fast-food-outline" title="Snacking is a Skill" description="I can eat an entire pizza while debugging—because multitasking is key!" />
          <ValueItem icon="bed-outline" title="Sleep is Overrated" description="I say I'll sleep early, but my code (and YouTube) says otherwise." />
        </View>

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
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
    marginBottom: 15,
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  bioHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  bioHeaderText: {
    flex: 1,
  },
  bioName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  bioLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  locationText: {
    fontSize: 14,
    color: '#fff',
  },
  bioText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#fff',
  },
  valueItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
    flexWrap: 'wrap', 
  },
  valueIcon: {
    marginRight: 15,
    marginTop: 2,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  valueDescription: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
    flexShrink: 1,  
    flex: 1,  
  },
});
