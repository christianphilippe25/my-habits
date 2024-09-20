import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  month: {
    fontWeight: "bold", fontSize: 30
  },
  day: {
    fontSize: 25
  },
  buttonView: {
    position: 'absolute',
    right: 30,
    bottom: 50
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 50,
    width: 50,
    height: 50
  }
})