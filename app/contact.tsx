import React, { useState } from 'react';
import { 
  StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, 
  KeyboardAvoidingView, Platform, StatusBar, ActivityIndicator, Alert, Linking, Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const buttonScale = new Animated.Value(1);

  const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Enter a valid email.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      Alert.alert('Success', 'Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setLoading(false);
    }, 2000);
  };

  const handlePressIn = () => {
    Animated.spring(buttonScale, { toValue: 0.9, useNativeDriver: true }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, { toValue: 1, useNativeDriver: true }).start();
  };

  const socialMedia: { name: keyof typeof Ionicons.glyphMap; link: string }[] = [
    { name: 'logo-facebook', link: 'https://www.facebook.com/brix.dodd' },
    { name: 'logo-instagram', link: 'https://www.instagram.com/qwer.tyuiopbrix/' },
    { name: 'logo-twitter', link: 'https://x.com/?lang=en' },
    { name: 'logo-linkedin', link: 'https://www.linkedin.com' },
    { name: 'mail-outline', link: 'mailto:brromero@gbox.ncf.edu.ph' },
    { name: 'call-outline', link: 'tel:+1234567890' },
    { name: 'logo-whatsapp', link: 'https://wa.me' },
  ];

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flexContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#355c7d" />
      <LinearGradient colors={['#355c7d', '#6c5b7b', '#c06c84']} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Contact Me</Text>
            <Text style={styles.subtitle}>Let's stay connected! Feel free to reach out.</Text>
          </View>

          {/* Contact Form */}
          <View style={styles.formContainer}>
            <TextInput style={styles.input} placeholder="Your Name" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Your Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput style={[styles.input, styles.textArea]} placeholder="Your Message" value={message} onChangeText={setMessage} multiline />
            
            <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
              <TouchableOpacity 
                style={styles.button} 
                onPress={handleSubmit} 
                onPressIn={handlePressIn} 
                onPressOut={handlePressOut} 
                disabled={loading}
              >
                {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Send Message</Text>}
              </TouchableOpacity>
            </Animated.View>
          </View>

          {/* Social Media Links */}
          <View style={styles.socialContainer}>
            <Text style={styles.socialTitle}>Follow Me:</Text>
            <View style={styles.socialWrapper}>
              {socialMedia.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => Linking.openURL(item.link)} style={styles.socialButton}>
                  <Ionicons name={item.name} size={24} color="white" />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Location */}
          <View style={styles.locationContainer}>
            <Text style={styles.infoTitle}>Visit Me:</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/...')}>
              <Text style={[styles.infoText, styles.linkText]}>
                <Ionicons name="location-outline" size={18} /> Zone 1, Del Rosario, Naga City, Camarines Sur
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flexContainer: { flex: 1 },
  container: { flex: 1, padding: 20 },
  scrollContainer: { flexGrow: 1 },
  header: { marginBottom: 20, alignItems: 'center' },
  title: { fontSize: 26, fontWeight: '700', color: '#F2E9E4' },
  subtitle: { fontSize: 16, color: '#D3D3D3', textAlign: 'center' },
  formContainer: { marginBottom: 20 },
  input: { backgroundColor: '#F2E9E4', padding: 12, borderRadius: 8, marginBottom: 12, fontSize: 16 },
  textArea: { height: 100, textAlignVertical: 'top' },
  button: { backgroundColor: '#6c5b7b', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },

  /* Social Media */
  socialContainer: { marginTop: 30, alignItems: 'center' },
  socialTitle: { fontSize: 18, fontWeight: '600', color: '#F2E9E4', marginBottom: 10 },
  socialWrapper: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', rowGap: 15, columnGap: 15 },
  socialButton: { backgroundColor: '#c06c84', padding: 14, borderRadius: 50, alignItems: 'center', justifyContent: 'center', width: 50, height: 50 },

  /* Location */
  locationContainer: { marginTop: 20, paddingHorizontal: 10 },
  infoTitle: { fontSize: 18, fontWeight: '600', color: '#F2E9E4', marginBottom: 10 },
  infoText: { fontSize: 16, color: '#FFFFFF', marginBottom: 6 },
  linkText: { color: '#FFB6C1', textDecorationLine: 'underline' },
});

export default ContactScreen;
