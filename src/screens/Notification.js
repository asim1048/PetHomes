import React from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';
import Background from './../assets/Background.png';

export default function Notification() {


  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <Text>Notification Screen</Text>
      </ImageBackground>
    </View>
  );
};


