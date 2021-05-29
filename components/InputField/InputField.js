import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

const InputField = ({
  initialValue,
  maxLength = 20,
  defaultValue,
  placeholder,
  onChangeText,
  source,
}) => {
  return (
    <View style={styles.inputBlock}>
      <Image style={styles.image} source={source} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={maxLength}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={initialValue}
        defaultValue={defaultValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    width: '80%',
    justifyContent: 'space-between',
    alignContent: 'center',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: '40%',
  },
  input: {
    paddingLeft: 30,
    width: '100%',
    height: 30,
    borderBottomColor: Colors.linear,
    borderBottomWidth: 1,
    marginVertical: 30,
  },
});
export default InputField;
