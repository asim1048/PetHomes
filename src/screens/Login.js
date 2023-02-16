import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,

} from 'react-native';
import Background from './../assets/Background.png';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { useToast } from 'native-base';


import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(false);
  
  const toast = useToast();

  const loginWithFacebook = async () => {
   

   // navigation.navigate("Main");
  }


  const HanleLogin = async () => {
    await auth()
      .signInWithEmailAndPassword(email.trim(), password)

      .then(userCredential => {

        const user = userCredential.user;

        console.log(user);
        navigation.navigate("Main")
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });


    toast.show({
      title: "User Login successfully!",
      placement: "bottom",
      duration: 3000,
    })
    toast.show({
      title: "Don't Forget To Add ESP32's IP address Before Communication.",
      placement: "bottom",
      duration: 5000,
    })
    
    AsyncStorage.setItem('isUserLoggedIn', "true");
    navigation.replace("Main");
  }
  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <View style={{
          flex: 1,
        }}>
          <View style={{
            flex: 0.3,
          }}>
          </View>
          {/*Login */}
          <View style={{
            flex: 0.69,
            borderRadius: 20,
            backgroundColor: '#006a78',
            opacity: 0.8,
            marginHorizontal: 15,
          }}>
            <View style={{ flex: 1 }}>
              <View style={{
                marginTop: 10,

                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontSize: 15,
                  color: '#53adde',
                }}>Please Login to your account.</Text>
              </View>

              {/*Email */}
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
                  placeholder="Email Address"
                  placeholderTextColor={"white"}
                  onChangeText={(value) => setEmail(value)}
                />
                <FontAwesomeIcon icon={faEnvelope} size={25} color="white" />
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

              {/*ForgetPassword */}
              <View style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 25,
              }}>
                <View></View>
                <TouchableOpacity onPress={() => navigation.navigate("Forget Password")}>
                  <Text style={{
                    fontSize: 18,
                    color: '#4ba2ca',
                    fontWeight: 'bold'
                  }}>Forget Password?</Text>
                </TouchableOpacity>
              </View>

              {/*Login */}
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
                  onPress={() => HanleLogin()}
                >
                  <Text style={{
                    color: '#0c0188',
                    fontSize: 19,
                    fontWeight: 'bold'
                  }}>LOG IN</Text>
                </TouchableOpacity>
              </View>

              {/*Connect Using */}
              <View style={{
                marginTop: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>

                {/* <Text style={{
                  color: '#4ba2ca',
                  fontSize: 19,
                }}>Or Connect Using</Text> */}
              </View>



              {/*Facebook and Email */}
              <View style={{
                marginTop: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 25,
              }}>
                {/* Facebook */}
                 {/* <TouchableOpacity style={{
                  height: 50,
                  width: 135,
                  backgroundColor: '#2993f7',
                  borderRadius: 25
                }}
                  onPress={() => {loginWithFacebook();
                    navigation.navigate("Main")}}
                >
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5 }}>
                    <FontAwesomeIcon icon={faEnvelope} size={25} color="white" />
                    <Text style={{ color: '#e0f9fe', fontSize: 18 }}> Facebook</Text>
                  </View>
                </TouchableOpacity> 
                
                <TouchableOpacity style={{
                  height: 50,
                  width: 135,
                  backgroundColor: '#f44236',
                  borderRadius: 20
                }}>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5 }}>
                    <FontAwesomeIcon icon={faEnvelope} size={25} color="white" />
                    <Text style={{ color: '#fde7d9', fontSize: 18 }}> Google</Text>
                  </View>
                </TouchableOpacity> */}
              </View>

              {/*SignUp  */}
              <View style={{
                marginTop: 25,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{
                  color: '#4ba2ca',
                  fontSize: 17,
                }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                  <Text style={{
                    color: '#000a75',
                    fontSize: 19,
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>SignUp</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{
          flex: 0.01,
        }}>
        </View>
        {/* </View> */}
      </ImageBackground>
    </View>
  );
};