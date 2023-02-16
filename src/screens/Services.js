import React from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';
import Background from './../assets/Background.png';

export default function Services() {
  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <Text>Services Screen</Text>
      </ImageBackground>
    </View>
  );
};


