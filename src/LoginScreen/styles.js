import { Dimensions, StyleSheet } from 'react-native';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
  },
  imageBackground: {
    height: windowHeight,
  },
  logo: {
    alignItems: 'center',
    position: 'absolute',
    top: windowHeight * 0.12
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#1C71AE',
    fontFamily: 'Roboto',
    fontSize: 16,
    backgroundColor: '#EFF0FF',
    borderRadius: 10,
    width: windowWidth * .9,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#EFF0FF',
    borderRadius: 10,
    width: windowWidth * .9,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#1C71AE',
    fontFamily: 'Roboto',
    fontSize: 22,
  },
});

export default styles;