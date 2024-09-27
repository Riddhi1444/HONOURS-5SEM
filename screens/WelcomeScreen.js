import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Theme } from '../styles/Theme';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/welcome_image.png')} // Update the path according to your asset location
          style={styles.image}
        />
        <Text style={styles.title}>Discover Your Dream Job here</Text>
        <Text style={styles.description}>Explore all the existing job roles based on your interest and study major</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: Theme.colors.primary }]}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { borderColor: Theme.colors.primary, borderWidth: 1 }]}
          onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.buttonText, { color: Theme.colors.primary }]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40, // Adjust padding for better spacing
    backgroundColor: Theme.colors.background,
  },
  imageContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 150, // Adjust based on your asset
    height: 150, // Adjust based on your asset
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: Theme.colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: Theme.colors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
