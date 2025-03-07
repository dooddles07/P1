import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const EducationItem: React.FC<{ degree: string; institution: string; dateRange: string; notes: string }> = ({ degree, institution, dateRange, notes }) => (
  <View style={styles.educationItem}>
    <Text style={styles.degree}>{degree}</Text>
    <Text style={styles.institution}>{institution}</Text>
    <Text style={styles.dateRange}>{dateRange}</Text>
    <Text style={styles.notes}>{notes}</Text>
  </View>
);

export default function EducationScreen() {
  return (
    <LinearGradient colors={['#355c7d', '#6c5b7b', '#c06c84']} style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Academic Background</Text>

          {/* Education Timeline */}
          <EducationItem 
            degree="Bachelor of Science in Computer Studies" 
            institution="Naga College Foundation Inc." 
            dateRange="2021 - Present" 
            notes="Perfect attendance? Nah. Coffee and cramming sessions? Absolutely!"
          />

          <EducationItem 
            degree="Senior High School Graduate" 
            institution="Camarines Sur National High School" 
            dateRange="2019 - 2021" 
            notes="Survived the pandemic classes. Mastered the art of logging in but not paying attention."
          />

          <EducationItem 
            degree="High School Graduate" 
            institution="Camarines Sur National High School" 
            dateRange="2016 - 2019" 
            notes="Records show: 100+ late marks, a few absences, and a couple of sneaky lunch breaks turned into half-day offs."
          />

          <EducationItem 
            degree="Elementary School Graduate" 
            institution="Del Rosario Elementary School" 
            dateRange="2010 - 2015" 
            notes="The golden years! Only stress was who got the biggest baon and who got to be line leader."
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  section: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Semi-transparent white for contrast
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  // Education Item Styling
  educationItem: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light transparency for visibility
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  institution: {
    fontSize: 16,
    color: '#ddd',
    marginTop: 5,
  },
  dateRange: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 5,
  },
  notes: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#eee',
    marginTop: 5,
  },
});
