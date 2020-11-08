import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Image, 
  StyleSheet,
  Text, 
  View,
  ScrollView,
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import styles from './styles';

const Stack = createStackNavigator();

export default function ChatScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="Chat" >
      <Stack.Screen
        name="Chat"
        component={Chat}
      />
    </Stack.Navigator>
  );
}

const Chat = (props) => {

  const messages = [
    {
      id: '1',
      user: 'Cliente',
      date: '22h33m',
      message: 'Texto da mensagem do cliente para o suporte, relacionado à ajuda ou outras requisições, mensagem de exemplo, teste etc...',
    },
    {
      id: '2',
      user: 'Suporte',
      date: '22h33m',
      message: 'Texto da mensagem de resposta',
    },
    {
      id: '3',
      user: 'Cliente',
      date: '22h33m',
      message: 'Texto da mensagem do cliente para o suporte, relacionado à ajuda ou outras requisições, mensagem de exemplo, teste etc...',
    },
    {
      id: '4',
      user: 'Suporte',
      date: '22h33m',
      message: 'Texto da mensagem de resposta',
    },
    {
      id: '5',
      user: 'Cliente',
      date: '22h33m',
      message: 'Texto da mensagem do cliente para o suporte, relacionado à ajuda ou outras requisições, mensagem de exemplo, teste etc...',
    },
    {
      id: '6',
      user: 'Suporte',
      date: '22h33m',
      message: 'Texto da mensagem de resposta um pouco maior para teste',
    },
    {
      id: '7',
      user: 'Cliente',
      date: '22h33m',
      message: 'Texto da mensagem do cliente para o suporte, relacionado à ajuda ou outras requisições, mensagem de exemplo, teste etc...',
    },
    {
      id: '8',
      user: 'Suporte',
      date: '22h33m',
      message: 'Mensagem curta',
    },
    {
      id: '9',
      user: 'Cliente',
      date: '22h33m',
      message: 'Texto da mensagem do cliente para o suporte, relacionado à ajuda ou outras requisições, mensagem de exemplo, teste etc...',
    },
    {
      id: '10',
      user: 'Suporte',
      date: '22h33m',
      message: 'Texto da mensagem de resposta',
    },
  ];

  const scrollViewRef = useRef();

  const [message, setMessage] = useState('');
  const [style, setStyle] = useState([]);

  useEffect(() => {
    setStyle('normal');
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>SUPORTE</Text>
        <Image source={require('../images/logo/Logo.png')} style={styles.headerLogo} />
      </View>
      <ScrollView 
        style={styles.scrollView}
        ref={scrollViewRef}
        onContentSizeChange={(contentWidth, contentHeight)=> {scrollViewRef.current.scrollToEnd({animated: true})}
      }>
        <TouchableOpacity
          style={styles.verMaisButton}
          onPress={ () => alert('Ver mais...') }>
            <Text style={styles.verMaisButtonText}>
              Ver mais...
            </Text>
          </TouchableOpacity>
        {
          messages.map(item => {
            return(
              <View
                key={item.id}>
                <View style={[item.user == 'Suporte' ? styles.messageReceived : styles.messageSended]}>
                  <View style={[item.user == 'Suporte' ? styles.messageReceivedDataView : styles.messageSendedDataView]}>
                    <Text style={[item.user == 'Suporte' ? styles.messageReceivedData : styles.messageSendedData]}>{item.user+item.id}</Text>
                    <Text style={[item.user == 'Suporte' ? styles.messageReceivedData : styles.messageSendedData]}>{item.date}</Text>
                  </View>
                  <View>
                    <Text style={[item.user == 'Suporte' ? styles.messageReceivedText : styles.messageSendedText]}>
                      {item.message}
                    </Text>
                  </View>
                </View>
              </View>
            )})
          }
          <View style={style == 'normal' ? { height: 100 } : { height: 135 }}/>
        </ScrollView>
        <View style={styles.messageInput}>
          <TextInput
            style={[styles.input, style == 'normal' ? { height: 56 } : { height: 80 }]}
            onFocus={style => setStyle('bigger')}
            onBlur={style => setStyle('normal')}
            textAlignVertical="center"
            multiline={true}
            numberOfLines={3}
            placeholderTextColor="#68A0C9"
            placeholder="DIGITE SUA MENSAGEM"
            onChangeText={message => setMessage(message)}
            defaultValue={message}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={ () => {
              if(message) {
                setMessage('');
                Keyboard.dismiss();
                alert('Mensagem enviada');
              }
            }}>
            <MaterialIcons name="send" size={38} color="#68A0C9" />
          </TouchableOpacity>
        </View>
      <StatusBar style="dark"/>
    </KeyboardAvoidingView>
  );
}