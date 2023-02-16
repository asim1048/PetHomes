import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Checkbox, } from "native-base";
import auth from '@react-native-firebase/auth';

import {
  faEnvelope,
  faUser,
  faPhone,
  faMessage
} from '@fortawesome/free-solid-svg-icons';

export default function ContactUs({ navigation }) {
  const [name, setName] = useState()
  const [contact, setContact] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [messageLen,setmessageLen]=useState(0);
  const [nameOk, setNameOk] = useState(true)
  const [contactOk, setContactOk] = useState(true)
  const [emailOk, setEmailOk] = useState(true)
  const [passwordOk, setPasswordOk] = useState(true)
  const [confirmPasswordOk, setConfirmPasswordOk] = useState(true)
  const [conditions, setConditions] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const handleSend =  () => {

    navigation.navigate("Home");
  }

  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <View style={{ flex: 0.05, }}>
        </View>
        <View style={{
          flex: 0.86,
          borderRadius: 20,
          backgroundColor: '#006a78',
          opacity: 0.8,
          marginHorizontal: 15,
        }}>

          {/* Lets Get Started */}
          <View style={{
            marginTop:20,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 2,
            borderColor: 'gray'
          }}>
            <Text style={{
              fontSize: 25,
              fontWeight: "bold",
              color: 'white',
              opacity: 1,
            }}>Contact Us</Text>

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
            <FontAwesomeIcon icon={faUser} size={25} color="white" />
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
              onChangeText={(value) => { setEmail(value); console.log(email); }}
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
            <FontAwesomeIcon icon={faPhone} size={25} color="white" />
          </View>

          {/* Message */}
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
              borderColor: 'gray',
              height:50,
            }}
              multiline
              height={150}
              placeholder="Message"
              placeholderTextColor={"white"}
              onChangeText={(value) => { setMessage(value);setmessageLen(value.length) }}
            />
            <FontAwesomeIcon icon={faMessage} size={25} color="white" />
          </View>

          {/*messageLen */}
          <View style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal: 25,
            }}>
              <View></View>
              <Text style={{
                fontSize:17,
                color:'white'
              }}>{messageLen}/1000</Text>
          </View>

          {/*Send */}
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
              onPress={() => handleSend()}
            >
              <Text style={{
                color: '#0c0188',
                fontSize: 19,
                fontWeight: 'bold'
              }}>Send</Text>
            </TouchableOpacity>
          </View>

          
        </View>
        <View style={{ flex: 0.1, }}>
        </View>
      </ImageBackground>
    </View>
  );
};


