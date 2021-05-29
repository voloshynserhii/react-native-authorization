import React, {useState} from 'react';
import {View, Text} from 'react-native';

import InputField from '../components/InputField/InputField';
import FormButton from '../components/FormButton/FormButton';
import LinkButton from '../components/LinkButton/LinkButton';
import {useAppStore} from '../store';
import defaultStyles from '../constants/Default-styles';
import signUpWithFirebase from '../helpers/signup';
import AlertMessage from './Alert';

const SignUpScreen = ({navigation}) => {
  const [state, dispatch] = useAppStore();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = async () => {
    if (email.length > 5 && password.length >= 8 && name.length > 0) {
      const res = await signUpWithFirebase(email, name, password);
      if (res.ok) {
        dispatch({type: 'SET_CURRENT_USER', payload: name});
        dispatch({type: 'LOG_IN'});
        navigation.navigate('ProfileScreen');
      }
    } else {
      AlertMessage(
        'Error!',
        'You entered invalid email or name field is empty or password is less then 8 characters! PLease, try again with valid credentials!',
      );
    }
  };

  const logInHandler = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={defaultStyles.screen}>
      <View>
        <Text style={defaultStyles.header}>Create an Account</Text>
      </View>
      <View style={defaultStyles.formInputs}>
        <InputField
          source={require('../assets/icons/email.png')}
          placeholder="Email"
          initialValue={email}
          onChangeText={email => setEmail(email)}
        />
        <InputField
          source={require('../assets/icons/user.png')}
          placeholder="Name"
          initialValue={name}
          onChangeText={name => setName(name)}
        />
        <InputField
          source={require('../assets/icons/password.png')}
          placeholder="Passsword"
          initialValue={password}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <FormButton title="Sign Up" onPress={signUpHandler} />
      <View style={defaultStyles.links}>
        <Text style={defaultStyles.subheader}>Already have an account?</Text>
        <LinkButton title="Log In" onPress={logInHandler} />
      </View>
    </View>
  );
};

export default SignUpScreen;
