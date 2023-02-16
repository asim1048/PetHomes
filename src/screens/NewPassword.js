import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {
  faEnvelope,
  faEye,
  faEyeSlash,


} from '@fortawesome/free-solid-svg-icons';

export default function NewPassword({navigation}) {

  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [hidePassword, setHidePassword] = useState(false);
  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <View style={{ flex: 0.3 }}>
        </View>
        <View style={{
          flex: 0.68,
          borderRadius: 20,
          backgroundColor: '#006a78',
          opacity: 0.8,
          marginHorizontal: 15,
        }}>
          {/* Verification */}
          <View style={{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>New Password</Text>
            <Text style={{
              marginTop: 10,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
              opacity: 0.9,
            }}>Enter your new record</Text>
            <Text style={{
              marginTop: 10,
              fontSize: 17,
              fontWeight: 'bold',
              color: 'white',
              opacity: 0.9,
            }}>to reset your password</Text>
          </View>

          {/*Password */}
          <View style={{
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
          }}>
            <TextInput style={{
              width: 260,
              borderBottomWidth: 2,
              fontSize: 18,
              fontWeight: 'bold',
              color: "white",
              borderColor: 'gray'
            }}
              secureTextEntry={!hidePassword}
              placeholder="Password"
              placeholderTextColor={"white"}
              onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size={25} color="white" />
            </TouchableOpacity>
          </View>

          {/*Confirm Password */}
          <View style={{
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
          }}>
            <TextInput style={{
              width: 260,
              borderBottomWidth: 2,
              fontSize: 18,
              fontWeight: 'bold',
              color: "white",
              borderColor: 'gray'
            }}
              secureTextEntry={!hidePassword}
              placeholder="Confirm Password"
              placeholderTextColor={"white"}
              onChangeText={(value) => setConfirmpassword(value)}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size={25} color="white" />
            </TouchableOpacity>
          </View>

          {/*Login */}
          <View style={{
                marginTop: 30,
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
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={{
                    color: '#0c0188',
                    fontSize: 19,
                    fontWeight: 'bold'
                  }}>Reset</Text>
                </TouchableOpacity>
              </View>
        </View>
        <View style={{ flex: 0.02 }}></View>
      </ImageBackground>
    </View>
  );
};


