import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faArrowLeft

} from '@fortawesome/free-solid-svg-icons';

export default function ForgetPassword({navigation}) {

  
  const [email, setEmail] = useState()

  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        <View style={{flex:0.4}}>
          <View style={{
            flex:1,
            marginHorizontal: 15,
            marginVertical:15,
            justifyContent:"space-between",
          }}>
            <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
            }}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
              <FontAwesomeIcon icon={faArrowLeft} size={25} color="white" />
              </TouchableOpacity>
              <Text style={{
              fontSize: 20,
              color: 'white',
              fontWeight:'bold',
              opacity: 1,
            }}>Forget Password</Text>
            <View>
            </View>
            </View>
            
          </View>
          <View style={{alignItems:"center",justifyContent:'center'}}>
            <Text style={{
              fontSize: 20,
              color: 'white',
              fontWeight:'bold',
              opacity: 1,
              
            marginVertical:15,
            }}>Pet Tech Homes</Text>
            </View>
        </View>
        <View style={{
            flex: 0.58,
            borderRadius: 20,
            backgroundColor: '#006a78',
            opacity: 0.8,
            marginHorizontal: 15,
          }}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:20,
          }}>
            <Text style={{
              fontSize: 15,
              color: 'white',
              opacity: 1,
            }}>Enter Your email for Reset your password</Text>
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
              onChangeText={(value) => { setEmail(value); if (value.length > 0) setEmailOk(false) }}
            />
            <FontAwesomeIcon icon={faEnvelope} size={25} color="white" />
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
                  onPress={() => navigation.navigate("Verification")}
                >
                  <Text style={{
                    color: '#0c0188',
                    fontSize: 19,
                    fontWeight: 'bold'
                  }}>Send</Text>
                </TouchableOpacity>
              </View>

              {/*Login  */}
              <View style={{
                marginTop: 25,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 25,
              }}>
                <Text style={{
                  color: '#4ba2ca',
                  fontSize: 17,
                }}>Remember your password ?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
                  <Text style={{
                    color: '#000a75',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>Login</Text>
                </TouchableOpacity>
              </View>
        </View>
        <View style={{flex:0.02}}></View>
      </ImageBackground>    
    </View>
  );
};


