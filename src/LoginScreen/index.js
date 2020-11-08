import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  Keyboard
 } from 'react-native';
 
import { createStackNavigator } from '@react-navigation/stack';

import { LinearGradient } from 'expo-linear-gradient'

import styles from './styles';


const Stack = createStackNavigator();

export default function LoginScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="Login" >
      <Stack.Screen
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
}

const Login = ({navigation}) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <LinearGradient
      colors={['#2330A5', '#1C71AE']}
      start={[0,0]}
      end={[1,1]}
      style={ styles.imageBackground }>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={require('../images/logo/LoginLogo.png')} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#1C71AE"
              placeholder="USUÁRIO"
              onChangeText={usuario => setUsuario(usuario)}
              defaultValue={usuario}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#1C71AE"
              placeholder="SENHA"
              secureTextEntry={true}
              onChangeText={senha => setSenha(senha)}
              defaultValue={senha}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={ () => {
                navigation.navigate('ChatScreen')
                Keyboard.dismiss();
              }}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      <StatusBar style="light"/>
    </LinearGradient>
  );
}
