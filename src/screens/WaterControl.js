import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Modal,
  Switch,
} from 'react-native';
import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'native-base';

import {
  faEnvelope,
  faEye,
  faArrowLeft,
  faL,
} from '@fortawesome/free-solid-svg-icons';

export default function FeedControl({ navigation }) {
  const [changeFeed, setchangeFeed] = useState(false);
  const [timePicker, setTimePicker] = useState(false);

  const [datePicker, setDatePicker] = useState(false);
  const [day, setDay] = useState("Sunday");

  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
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
    console.log(ip);

    //navigation.navigate("Main");
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = time.getHours();
    var min = time.getMinutes();

    console.log(year, month, day, hour, min);
    //year
    fetch(`http://${ip}/waterYear?value=${year}`, {
      method: 'POST',
    })
      .then(response => {
        console.log(response);

      })
      .catch(error => {
        console.error(error);
      });

    console.log("Data send");

    //month
    fetch(`http://${ip}/waterMonth?value=${month}`, {
      method: 'POST',
    })
      .then(response => {
        console.log(response);

      })
      .catch(error => {
        console.error(error);
      });

    //date
    fetch(`http://${ip}/waterDate?value=${day}`, {
      method: 'POST',
    })
      .then(response => {
        console.log(response);

      })
      .catch(error => {
        console.error(error);
      });

    //hour
    fetch(`http://${ip}/waterHour?value=${hour}`, {
      method: 'POST',
    })
      .then(response => {
        console.log(response);

      })
      .catch(error => {
        console.error(error);
      });

    //min
    fetch(`http://${ip}/waterMin?value=${min}`, {
      method: 'POST',
    })
      .then(response => {
        console.log(response);

      })
      .catch(error => {
        console.error(error);
      });

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
          opacity: changeFeed ? 0.8 : 1,
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
            }}>Water Control</Text>
            <View>
            </View>
          </View>

          {/*View  */}
          <View style={{
            marginTop: 70,
            flex: 1,
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
              }}>Control Your Aquarium Water</Text>
              {/* <Text style={{
                marginTop: 20,
                color: 'yellow',
                fontSize: 25,
                fontWeight: 'bold',
              }}>Change Water</Text>
              <Switch
                style={{ marginTop: 20, transform: [{ scaleX: 1.6 }, { scaleY: 1.5 }] }}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={changeFeed ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={() => { setchangeFeed(true); console.log(changeFeed) }}
                value={false}
              /> */}
              {changeFeed && (
                <View style={{
                  flex: 1,
                }}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={changeFeed}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setchangeFeed(false);
                    }}
                  >
                    <View style={{
                      flex: 0.5,
                      marginTop: 230,
                      marginHorizontal: 50,
                      backgroundColor: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',

                    }}>
                      <View style={{
                        paddingHorizontal: 10,
                      }}>
                        <Text style={{ fontSize: 18, fontWeight: '600', }}>I want to be remembered</Text>
                        <View style={{
                          alignItems: 'center', justifyContent: 'center'
                        }}>
                          <Text style={{ fontSize: 18, fontWeight: '600', }}>every:
                          </Text>

                        </View>
                        {/* Mon,Tue,wed */}
                        <View style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 15,
                        }}>
                          <TouchableOpacity style={{
                            height: 50,
                            width: 60,
                            borderRadius: 10,
                            backgroundColor: '#3fc4ff',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                            onPress={() => { setDay("Monday"); setchangeFeed(false) }}
                          >
                            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Mon</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{
                            height: 50,
                            width: 60,
                            borderRadius: 10,
                            backgroundColor: '#3fc4ff',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                            onPress={() => { setDay("Tuesday"); setchangeFeed(false) }}
                          >
                            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Tue</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{
                            height: 50,
                            width: 60,
                            borderRadius: 10,
                            backgroundColor: '#3fc4ff',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                            onPress={() => { setDay("Wednesday"); setchangeFeed(false) }}
                          >
                            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Wed</Text>
                          </TouchableOpacity>
                        </View>

                        {/* Thu,Fri,Sat */}
                        <View style={{
                          marginTop: 10,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                          <TouchableOpacity style={{
                            height: 50,
                            width: 60,
                            borderRadius: 10,
                            backgroundColor: '#3fc4ff',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                            onPress={() => { setDay("Thursday"); setchangeFeed(false) }}
                          >
                            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Thu</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{
                            height: 50,
                            width: 60,
                            borderRadius: 10,
                            backgroundColor: '#3fc4ff',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                            onPress={() => { setDay("Friday"); setchangeFeed(false) }}
                          >
                            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Fri</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{
                            height: 50,
                            width: 60,
                            borderRadius: 10,
                            backgroundColor: '#3fc4ff',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                            onPress={() => { setDay("Wednesday"); setchangeFeed(false) }}
                          >
                            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Wed</Text>
                          </TouchableOpacity>
                        </View>

                        {/* Sunday */}
                        <View style={{
                          marginTop: 10,
                          alignItems: 'center'
                        }}>
                          <TouchableOpacity style={{
                            height: 50,
                            width: 60,
                            borderRadius: 10,
                            backgroundColor: '#3fc4ff',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                            onPress={() => { setDay("Friday"); setchangeFeed(false) }}
                          >
                            <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Fri</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </View>
              )}

            </View>

            {/*Date Picker Reminder */}
            <TouchableOpacity style={{
              marginTop: 50,
              height: 60,
              backgroundColor: '#3fc4ff',
              borderRadius: 10,
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
              onPress={() => { setDatePicker(true); }}
            >
              <Text style={{
                fontSize: 19,
                fontWeight: 'bold',
                color: '#01167a',
              }}>Pick Your Date</Text>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={datePicker}
              mode="date"
              onConfirm={(date) => {
                setDate(date);
                setDatePicker(false);
              }}
              onCancel={() => setDatePicker(false)}
            />

            {/*Time Picker Reminder */}
            <TouchableOpacity style={{
              marginTop: 50,
              height: 60,
              backgroundColor: '#3fc4ff',
              borderRadius: 10,
              marginHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
              onPress={() => { setTimePicker(true); console.log(timePicker) }}
            >
              <Text style={{
                fontSize: 19,
                fontWeight: 'bold',
                color: '#01167a',
              }}>Pick Your Time</Text>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={timePicker}
              mode="time"
              onConfirm={(time) => {
                setTime(time);
                setTimePicker(false);
              }}
              onCancel={() => setTimePicker(false)}
            />

            {/*Remaining Days */}
            <View style={{
              marginTop: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <Text style={{
                fontSize: 19,
                fontWeight: 'bold',
                color: 'white',
              }}>Scheduled Date & Time</Text>
              <Text style={{
                marginTop: 5,
                fontSize: 19,
                fontWeight: 'bold',
                color: 'white',
              }}>{date.getDate()}:{date.getMonth() + 1}:{date.getFullYear()} || {time.getHours()}:{time.getMinutes()}</Text>
            </View>

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