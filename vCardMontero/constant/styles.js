import {StatusBar} from 'react-native';

export const GlobalStyles = ({
  qr:{
    height: 70,
    width: 70,
    backgroundColor:'white',
    position: 'absolute',
    marginTop: 50,
    marginLeft: 145,
    zIndex:100,
  },
 cover: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
 },
 profileContainer: {
    alignItems: 'center',
    marginTop: 20,

  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginTop: -70,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 10,
  },
  content:{
    marginTop: 30,
    padding: 20,
  },
  desc:{
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  icon: {
    marginHorizontal: 10,
    backgroundColor: 'gray',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:100,
    width: 50,
    height: 50,
    zIndex: 100,
    top: 45
  },
  backgrounds:{
    marginTop: 20,
  },
});