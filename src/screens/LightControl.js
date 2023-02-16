import React, { useState ,useEffect} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  Switch
} from 'react-native';
import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LightOff from './../assets/LightOff.png';
import LightOn from './../assets/LightOn.png';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'native-base';
//import { Switch } from "native-base";

import {
  faEnvelope,
  faEye,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function LightControl({ navigation }) {
  const [isLightOn, setIsLightOn] = useState(false);
  
  const [ip, setip] = useState('');
  const toast = useToast();
  useEffect(() => {
    const fetchData = async () => {
      const value = await AsyncStorage.getItem('ip')
      setip(value);
    };

    fetchData();
  }, []);

  const sendData = async () => {

    fetch(`http://${ip}/sendBooleanValueLight?value=${isLightOn}`,{
      method: 'POST',
    })
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
      console.error(error);
    });

    console.log(ip);
    toast.show({
      title: "Data Sent successfully to ESP",
      placement: "bottom",
      duration:3000,
    })

    navigation.navigate("Main");
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
            }}>Light Control</Text>
            <View>
            </View>
          </View>

          {/*View  */}
          <View style={{
            marginTop: 70,
            flex: 1,
            borderRadius: 20,
            backgroundColor: '#006a78',
            opacity: 0.8,
            marginHorizontal: 15,
            marginBottom: 20,
          }}>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image
                source={isLightOn ? LightOn : LightOff}
                style={{
                  marginTop: 40,
                  height: 300,
                  width: 200,
                }}
              />
              <Text style={{
                color: 'yellow',
                marginTop: 20,
                fontSize: 23,
                fontWeight: 'bold',
              }}>Switch Button</Text>
              <Text style={{
                color: 'yellow',
                fontSize: 25,
                fontWeight: 'bold',
              }}>OFF/ON</Text>
              <Switch
                style={{ marginTop: 10, transform: [{ scaleX: 1.6 }, { scaleY: 1.5 }] }}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isLightOn ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={() => setIsLightOn(!isLightOn)}
                value={isLightOn}
              />
            </View>

            
           {/* Set Button */}
           <View style={{
              marginTop: 20,
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
                onPress={() => sendData()}
              >
                <Text style={{
                  color: '#0c0188',
                  fontSize: 19,
                  fontWeight: 'bold'
                }}>Send Data </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};


