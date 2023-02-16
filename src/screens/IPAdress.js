import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput, 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// import { Slider, Stack, Box, Center, NativeBaseProvider } from "native-base";
import Slider from '@react-native-community/slider';

import {
  faEnvelope,
  faEye,
  faArrowLeft,
  faL,
} from '@fortawesome/free-solid-svg-icons';

export default function IPAdress({ navigation }) {

  const [ip, setIp] = useState('');

  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <View style={{
          flex: 1,
        }}>

          <View style={{
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faArrowLeft} size={25} color="white" />
            </TouchableOpacity>
            <Text style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
              opacity: 1,
            }}>IP Address </Text>
            <View>
            </View>
          </View>

          <View style={{
            flex:0.3
          }}>

          </View>
          {/*View  */}
          <View style={{
            marginTop: 70,
            flex: 0.5,
            borderRadius: 20,
            backgroundColor: '#006a78',
            opacity: 0.9,
            marginHorizontal: 15,
            marginBottom: 20,
          }}>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{
                color: 'white',
                marginTop: 20,
                fontSize: 20,
                fontWeight: 'bold',
                opacity: 1,
                paddingHorizontal:10
              }}>Communication between App and ESP32 depends on the ISP Address of ESP32</Text>

              <View style={{ marginTop: 30 }}>
              <TextInput style={{
                  width: 260,
                  borderWidth: 2,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: "white",
                  borderColor: 'black', 
                  paddingHorizontal:10,
                  borderRadius:10,
                }}
                  placeholder="Enter IP Address of ESP32"
                  placeholderTextColor={"white"}
                  onChangeText={(value) => setIp(value)}
                />

                {/* Set Button */}
                <View style={{
                marginTop: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 25,
              }}>
                <TouchableOpacity style={{
                  width: 220,
                  height: 55,
                  backgroundColor: '#0eacf6',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                  onPress={() =>{AsyncStorage.setItem('ip', ip);navigation.navigate("Main")} }
                >
                  <Text style={{
                    color: '#0c0188',
                    fontSize: 19,
                    fontWeight: 'bold'
                  }}>SET IP</Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
