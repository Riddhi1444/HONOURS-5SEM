import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Theme } from '../styles/Theme';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Here you would add your logic to handle the registration process,
    // such as validating the form and calling your backend service.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <Text style={styles.description}>Create an account so you can explore all the existing jobs</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.switchText}>
        Already have an account?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.socialMediaButtons}>
        {/* Social media icons can be added here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Theme.colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.colors.text,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: Theme.colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: Theme.colors.inputBorder,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: Theme.colors.inputBackground,
  },
  button: {
    width: '90%',
    backgroundColor: Theme.colors.primary,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: Theme.colors.buttonText,
    fontSize: 18,
  },
  switchText: {
    fontSize: 16,
    color: Theme.colors.text,
    marginBottom: 5,
  },
  linkText: {
    fontSize: 16,
    color: Theme.colors.primary,
    fontWeight: 'bold',
  },
  socialMediaButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default RegisterScreen;
