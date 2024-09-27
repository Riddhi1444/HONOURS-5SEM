import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from '../styles/Theme';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would integrate your logic to handle user authentication,
    // such as validating credentials and managing session data.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login here</Text>
      <Text style={styles.description}>Welcome back, you've been missed!</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.switchText}>
        Don't have an account?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Create new account</Text>
      </TouchableOpacity>
      <View style={styles.socialMediaButtons}>
        {}
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

export default LoginScreen;
