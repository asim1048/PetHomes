import React from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';
import Background from './../assets/Background.png';

export default function Logout() {
  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <Text>Logout Screen</Text>
      </ImageBackground>
    </View>
  );
};


