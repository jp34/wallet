import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  colors: {
    primary: '#6030D9',
    secondary: '#2B1360',
    gradient1: ['#2B1360', '#6030D9'],
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  text: {
    title: {
      color: '#FFF',
      fontSize: 35,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 30,
      marginLeft: 30
    },
  },
});

export default styles;