import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Alert 
  
} from 'react-native';
import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Checkbox, } from "native-base";
import auth from '@react-native-firebase/auth';

import {
  faEnvelope,
  faEye,
  faEyeSlash,


} from '@fortawesome/free-solid-svg-icons';

export default function SignUp({navigation}) {
  const [name, setName] = useState()
  const [contact, setContact] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const [nameOk, setNameOk] = useState(true)
  const [contactOk, setContactOk] = useState(true)
  const [emailOk, setEmailOk] = useState(true)
  const [passwordOk, setPasswordOk] = useState(true)
  const [confirmPasswordOk, setConfirmPasswordOk] = useState(true)
  const [conditions, setConditions] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const handleRegister = async () => {
      await auth()
        .createUserWithEmailAndPassword(email.trim(), password)

        .then(userCredential => {

          const user = userCredential.user;

          console.log(user);
           navigation.navigate("Login")
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
  }   

  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <View style={{ flex: 0.05, }}>
        </View>
        <View style={{
          flex: 0.95,
          borderRadius: 20,
          backgroundColor: '#006a78',
          opacity: 0.8,
          marginHorizontal: 15,
        }}>

          {/* Lets Get Started */}
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{
              fontSize: 25,
              fontWeight: "bold",
              color: 'white',
              opacity: 1,
            }}>Let's Get Started!</Text>
            <Text style={{
              fontSize: 15,
              color: '#4ba2ca',
              opacity: 1,
            }}>Create an account to get all features</Text>
          </View>

          {/* Name */}
          <View style={{
            marginTop: 25,
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
              placeholder="Your Name"
              placeholderTextColor={"white"}
              onChangeText={(value) => { setName(value); if (value.length > 0) setName(false) }}
            />
            <FontAwesomeIcon icon={faEnvelope} size={25} color="white" />
          </View>

          {/* Email Addresss */}
          <View style={{
            marginTop: 25,
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
              placeholder="Email Adress"
              placeholderTextColor={"white"}
              onChangeText={(value) => {setEmail(value);console.log(email); }}
            />
            <FontAwesomeIcon icon={faEnvelope} size={25} color="white" />
          </View>

          {/* Phone Number */}
          <View style={{
            marginTop: 25,
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
              placeholder="Phone Number"
              placeholderTextColor={"white"}
              onChangeText={(value) => { setContact(value); if (value.length > 0) setContactOk(false) }}
            />
            <FontAwesomeIcon icon={faEnvelope} size={25} color="white" />
          </View>

          {/*Password */}
          <View style={{
            marginTop: 25,
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

          {/*ConfirmPassword */}
          <View style={{
            marginTop: 25,
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
              onChangeText={(value) => { setConfirmPassword(value); if (value.length > 0) setConfirmPasswordOk(false) }}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <FontAwesomeIcon icon={hidePassword ? faEye : faEyeSlash} size={25} color="white" />
            </TouchableOpacity>
          </View>

          {/* Terms and Condition */}
          <View style={{
            flexDirection:'row',
            alignItems: 'center',
            //justifyContent: 'space-between',
            marginTop: 25,
            paddingHorizontal: 25,
          }}>
            <Checkbox onChange={()=>setConditions(!conditions)} value="test" accessibilityLabel="I Accept all terms and condition" />
            <Text style={{
              fontSize: 15,
              color: '#4ba2ca',
              opacity: 1,
              marginLeft:10
            }}>I Accept all terms and condition</Text>
          </View>

          {/*SignUp */}
          <View style={{
                marginTop: 25,
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
                  onPress={() =>handleRegister() }
                >
                  <Text style={{
                    color: '#0c0188',
                    fontSize: 19,
                    fontWeight: 'bold'
                  }}>SIGN UP</Text>
                </TouchableOpacity>
              </View>

              {/*Login  */}
              <View style={{
                marginTop: 25,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{
                  color: '#4ba2ca',
                  fontSize: 17,
                }}>Already have an account?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
                  <Text style={{
                    color: '#000a75',
                    fontSize: 19,
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>Login Here</Text>
                </TouchableOpacity>
              </View>

        </View>
      </ImageBackground>
    </View>
  );
};


