import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';

import InputField from '../components/InputField/InputField';
import FormButton from '../components/FormButton/FormButton';
import LinkButton from '../components/LinkButton/LinkButton';
import {useAppStore} from '../store';
import defaultStyles from '../constants/Default-styles';
import logInWithFirebase from '../helpers/login';
import AlertMessage from './Alert';

const LoginScreen = ({navigation}) => {
  const [state, dispatch] = useAppStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authentificateUser = async () => {
    const authenticatedUser = await logInWithFirebase(email, password);
    if (authenticatedUser) {
      dispatch({type: 'LOG_IN'});
      dispatch({type: 'SET_CURRENT_USER', payload: authenticatedUser.name});
      navigation.navigate('ProfileScreen');
    } else {
      navigation.navigate('SignUp');
    }
  };

  const logInHandler = () => {
    if (email.length > 5 && password.length >= 8) {
      setEmail('');
      setPassword('');
      authentificateUser();
    } else {
      AlertMessage(
        'Error!',
        'You entered invalid email or password is less then 8 characters! PLease, try again with valid credentials!',
      );
    }
  };
  const signUpHandler = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={defaultStyles.screen}>
      <View>
        <Text style={defaultStyles.header}>Welcome Back</Text>
      </View>
      <View style={defaultStyles.formInputs}>
        <InputField
          source={require('../assets/icons/email.png')}
          placeholder="Email"
          initialValue={email}
          onChangeText={email => setEmail(email)}
        />
        <InputField
          source={require('../assets/icons/password.png')}
          placeholder="Passsword"
          initialValue={password}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <FormButton title="Log In" onPress={logInHandler} />
      <View style={defaultStyles.links}>
        <Text style={defaultStyles.subheader}>
          Don’t you have an account yet?
        </Text>
        <LinkButton title="Sign Up" onPress={signUpHandler} />
      </View>
    </View>
  );
};

export default LoginScreen;
