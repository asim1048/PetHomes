import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// import { Slider, Stack, Box, Center, NativeBaseProvider } from "native-base";
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'native-base';


import {
  faEnvelope,
  faEye,
  faArrowLeft,
  faL,
} from '@fortawesome/free-solid-svg-icons';

export default function TemperatureControl({ navigation }) {

  const [temperature, setTemperature] = useState('');

  const [isTempOn, setIsTempOn] = useState(false);
  const [ip, setip] = useState('');
  const toast = useToast();
  useEffect(() => {
    const fetchData = async () => {
      const value = await AsyncStorage.getItem('ip')
      setip(value);
      console.log('here')
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData1 = async () => {
      
      console.log('here')
      try {
        const response = await fetch(`http://${ip}:8080`);
        let val = await response.text();
        setTemperature(val);
      } catch (error) {
        console.log('Error')
      }
    };

    fetchData1();
  }, []);

  const sendData = async () => {

    fetch(`http://${ip}/sendBooleanValueTemperature?value=${isTempOn}`, {
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
      duration: 3000,
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
            }}>Temperature Control</Text>
            <View>
            </View>
          </View>

          <View style={{
            flex: 0.5
          }}>

          </View>
          {/*View  */}
          <View style={{
            marginTop: 70,
            flex: 0.7,
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
                fontSize: 23,
                fontWeight: 'bold',
                opacity: 1
              }}>Control Your Aquarium Temperature</Text>

              <View style={{ marginTop: 30 }}>
                {/* <Slider
                  defaultValue={temperature}
                  colorScheme="orange"
                  onChange={(v) => {
                    setTemperature(Math.floor(v));
                  }}
                >
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                  <Slider.Thumb />
                </Slider> */}
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{
                  color: 'white',
                  fontSize: 19,
                  fontWeight: 'bold',
                  opacity: 1
                }}>
                  Temperature Value: {temperature}
                </Text>
                </View>


                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Text style={{
                    color: 'white',
                    marginTop: 20,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>Want to turn on Heater?</Text>
                 
                  <Switch
                    style={{ marginTop: 10, transform: [{ scaleX: 1.6 }, { scaleY: 1.5 }] }}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isTempOn ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={() => setIsTempOn(!isTempOn)}
                    value={isTempOn}
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
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
