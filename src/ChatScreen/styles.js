import { Dimensions, StyleSheet } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF0FF',
    height: screenHeight,
  },
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    height: 90,
    paddingTop: 30,
    paddingHorizontal: 20,
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ACC0F3',
    backgroundColor: '#EFF0FF'
  },
  text: {
    color: '#497BA9',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold'
  },
  headerLogo: {
    height: 48,
    width: 48
  },
  scrollView: {
    marginTop: 90,
    paddingTop: 0,
    flexDirection: 'column'
  },
  messageSended: {
    backgroundColor: '#468ABE',
    borderRadius: 10,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 5,
    width: 'auto',
    maxWidth: windowWidth / 1.4,
    minWidth: 140,
    marginHorizontal: 20,
    marginTop: 20,
  },
  messageSendedDataView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ACC0F3'
  },
  messageSendedData: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  messageSendedText: {
    color: '#FFF',
  },

  messageReceived: {
    backgroundColor: '#CDDCF2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#468ABE',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: 5,
    width: 'auto',
    maxWidth: windowWidth / 1.4,
    minWidth: 140,
    marginHorizontal: 20,
    marginTop: 20,
  },
  messageReceivedDataView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ACC0F3'
  },
  messageReceivedData: {
    color: '#154E82',
    fontWeight: 'bold'
  },
  messageReceivedText: {
    color: '#083259',
  },
  messageInput: {
    position: 'absolute',
    bottom: 20,
    width: windowWidth - 40,
    backgroundColor: '#EFF0FF',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0C5386',
    borderRadius: 10,
  },
  input: {
    color: '#68A0C9',
    fontFamily: 'Roboto',
    fontSize: 18,
    width: windowWidth - 110,
    paddingLeft: 20,
  },
  button: {
    paddingRight: 10,
    margin: 0,
  },

  verMaisButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20, 
  },
  verMaisButtonText: { 
    color: '#468ABE',
    fontSize: 16,
  },

});

export default styles;