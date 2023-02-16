import React from 'react';
import {
  View,
  StatusBar,
  Text,
  ImageBackground,}  from  'react-native'

import Background from './../assets/Background.png';
export default function Splash() {
  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
      </ImageBackground>
    </View>
  );
};


