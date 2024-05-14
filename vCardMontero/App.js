import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Linking, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons
import { GlobalStyles } from './constant/styles';

const App = () => {

  const userInfo = {
    email: 'glennardmontero@gmail.com', 
    contactNumber: '09473086361',
  };

    const handleEmailPress = () => {
    Linking.openURL(`mailto:${userInfo.email}`);
  };

  const handleSocialMediaPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView contentContainerStyle={GlobalStyles.scrollContent}>
      <View style={GlobalStyles.background}>

      <Image source={require('./components/wallpapers.jpg')} style={GlobalStyles.cover}/>
      </View>
      <View style={GlobalStyles.profileContainer}>
          <Image source={require('./components/profile.jpg')} style={GlobalStyles.profileImage} />
          <Text style={GlobalStyles.baseText}>
           Glennard Baltazar Montero
          </Text>
          <Text style={{ marginTop: 5, color: 'gray' }}>3rd Year College Student</Text>
      </View>
      <View style={GlobalStyles.content}>
      <Text style={GlobalStyles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      </Text>
      </View>

      <View style={GlobalStyles.iconContainer}>
             <TouchableOpacity style={GlobalStyles.icon} onPress={handleEmailPress}>
                <Icon name="envelope" size={30} color="#000" />
              </TouchableOpacity>
            <TouchableOpacity
              style={GlobalStyles.icon}
              onPress={() => handleSocialMediaPress('https://www.facebook.com/glennar921')}>
              <Icon name="facebook" size={30} color="black"/>
            </TouchableOpacity>
            <TouchableOpacity
              style={GlobalStyles.icon}
              onPress={() => handleSocialMediaPress('https://twitter.com/glennar921')}>
              <Icon name="twitter" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={GlobalStyles.icon}
              onPress={() => handleSocialMediaPress('https://www.instagram.com/glennar921/')}>
              <Icon name="instagram" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={GlobalStyles.icon} onPress={() => {/* Handle contact number */}}>
                <Icon name="phone" size={30} color="#000" />
              </TouchableOpacity>
          </View>




       <View style={GlobalStyles.backgrounds}>
      <Image source={require('./components/wallpaper.jpg')} style={GlobalStyles.cover}/>
            <Image source={require('./components/qr.png')} style={GlobalStyles.qr}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
