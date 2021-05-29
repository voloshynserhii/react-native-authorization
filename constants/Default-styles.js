import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  screen: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%'
  },
  formInputs: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '15%',
  },
  links: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subheader: {
    fontSize: 14,
    color: Colors.text,
  },
  header: {
    fontSize: 22,
  },
});
