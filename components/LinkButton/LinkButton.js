import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../../constants/Colors';

const LinkButton = ({title, onPress}) => {
  return (
    <View style={styles.buttonBlock}>
      <Button
        style={styles.button}
        type="clear"
        title={title}
        titleStyle={{
          color: Colors.text,
          fontSize: 14,
        }}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBlock: {
    width: 'auto',
  },
  button: {},
});
export default LinkButton;
