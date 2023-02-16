import React from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';
import Background from './../assets/Background.png';

export default function Settings() {
  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <Text>Settings Screen</Text>
      </ImageBackground>
    </View>
  );
};


