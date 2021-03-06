import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#325C74',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    //fontFamily: 'TimesNewRomanPS-BoldMT'
  },
  titleLogin: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 35,
    //fontFamily: 'Arial'
  },
  container_signup_form: {
    flex: 1,
    backgroundColor: '#325C74',
  },
  inputContainer: {
    margin: 10,
  },
  textInput: {
    height: 35,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#333333',
    marginTop: 15,
    marginBottom: 5,
    width: 300,
    fontSize: 20,
    borderColor: '#B7C3D0',
    //fontFamily: 'Arial-ItalicMT',
    backgroundColor: '#B7C3D0',
    borderRadius: 25,
  },
  home: {
    backgroundColor: '#325C74'
  },
  userPage: {
    color: 'yellow',
    fontSize: 30,
    flex: 2,
  },
  modal: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
    borderRadius: 30,
  },
  modalHeader: {
    fontSize: 30,
    paddingBottom: 20,

    alignSelf: 'center',
  },
  inputModalForm: {
    borderBottomColor: 'black',
    fontSize: 25,
    color: 'gray',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  buttonz: {
    backgroundColor: 'darkblue',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
    width: '60%',
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 8,
    top: '50%',
    textAlign: 'center',
    alignSelf: 'center',
    position: 'relative',
  },
  buttonsss: {
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    color: 'white',
    fontSize: 24,
    width: '70%',
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 8,
    top: '95%',
    textAlign: 'center',
    alignSelf: 'center',
    position: 'relative',
  },
  addItem: {
    fontSize: 20,
    color: 'white',
  },
  // modalButton: {
  //   fontSize: 20,
  //   color: 'white',
  //   borderBottomColor: 'black'
  // }
  button: {
    backgroundColor: 'lightpink',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    color: 'white',
    fontSize: 60,
    width: '40%',
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 7,
    top: '50%',
    textAlign: 'center',
    alignSelf: 'center',
    position: 'relative',
  },

  modalButton: {
    backgroundColor: 'lightpink',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
    // width: '5%',
    fontWeight: 'bold',
    overflow: 'hidden',
    textAlign: 'center',
    alignSelf: 'center',
    top: '40%',
    position: 'relative',
  },

  back: {
    paddingTop: 30,
    fontSize: 15,
    color: 'black',
    top: '30%',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  card: {
    paddingBottom: 10,
  },
  total: {
    fontSize: 19,
    marginBottom: 20,
    //fontFamily: 'Palatino-Bold'
  },
  totalContainer: {
    flex: 3,
  },

  login: {
    color: 'yellow',
    //fontFamily: 'Palatino-Bold',
    alignSelf: 'center',
    fontSize: 20,
  },

  name: {
    fontSize: 20,
    //fontFamily: 'Palatino-Bold',
    top: '2%',
  },
  edit: {
    fontSize: 25,
    //fontFamily: 'Palatino-Bold',
    top: '1%',
    alignSelf: 'center',
    color: 'white',
  },

  signOut: {
    fontSize: 15,
    //fontFamily: 'Palatino-Bold',
    flexWrap: 'nowrap',
  },
  retake: {
    paddingBottom: '10%',
    paddingTop: '3%',
    fontSize: 20,
    // fontFamily: 'Palatino-Bold',
    top: '2%',
    alignSelf: 'center',
    color: 'white',
  },
  //Homepage
  box: {
    height: Dimensions.get('window').height / 7.75 - 0,
    paddingTop: 11,
    paddingBottom: 10,
    backgroundColor: '#325C74',
    margin: 5,
    width: Dimensions.get('window').width / 2 - 10,
    alignItems: 'center',
    //Dimensions.get('window').height
  },
  container1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#325C74',
  },
  containerM: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingStart: 7,
    borderColor: '#325C74',
    borderWidth: 6,
    borderBottomWidth: 2,
    borderTopWidth: 4,
    borderRadius: 15,
  },
  medtitle: {
    fontSize: 19,
  },
});
