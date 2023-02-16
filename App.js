import React, { useState, useEffect,useContext } from 'react';
import {
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigation from './src/Navigation/Navigation';

import AppContext from './src/context/AppContext';
import Splash from './src/screens/Splash';

const Stack = createStackNavigator();

export default function App() {

  const [splashTime, setSplashTime] = useState(true);

  let time=0;
  useEffect(() => {
    const interval = setInterval(() => {
      time=time+1;
      //setSplashTime(splashTime+1);
      
      //console.log(time);
      // time is up
      if (time == 1) {
        setSplashTime(false)
       // console.log(splashTime);
        clearInterval(interval);
        return;
      }
    }, 1000);
  }, [])
 // console.log(splashTime);

  const Authentication = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash}  options={{
                headerShown: false,
              }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <AppContext>
        <StatusBar backgroundColor="#2993f7" />

      <NativeBaseProvider>
        {
          splashTime? <Authentication/> : 
        
          <Navigation/>
        
        }
      </NativeBaseProvider>

    </AppContext>


  );
};


