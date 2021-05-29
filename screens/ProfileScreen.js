import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import FormButton from '../components/FormButton/FormButton';
import {useAppStore} from '../store';
import defaultStyles from '../constants/Default-styles';

const ProfileScreen = ({navigation}) => {
  const [state, dispatch] = useAppStore();
  const logOutHandler = () => {
    dispatch({type: 'LOG_OUT'});
    dispatch({type: 'SET_CURRENT_USER', payload: null});
    navigation.navigate('LogIn');
  };
  return (
    <View style={defaultStyles.screen}>
      <View style={styles.head}>
        <Image source={require('../assets/images/logo.png')} />
        <View style={styles.headerBlock}>
          <Text style={styles.header}>{state.currentUser}</Text>
        </View>
      </View>
      <View style={defaultStyles.formInputs}></View>
      <FormButton title="Log Out" onPress={logOutHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    alignItems: 'center',
  },
  headerBlock: {
    marginTop: -20,
    backgroundColor: '#FFFFFF',
    borderColor: Colors.linear,
    textAlign: 'center',
    borderRadius: 10,
    paddingHorizontal: 36,
    paddingVertical: 8,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 22,
    elevation: 5,
    shadowOffset: {
      width: 9,
      height: 9,
    },
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.user,
  },
});

export default ProfileScreen;
