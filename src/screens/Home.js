import React, { useContext, useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,

} from 'react-native';
import Background from './../assets/Background.png';
import Light from './../assets/Light.png'
import Water from './../assets/Water.png'
import Feed from './../assets/Feed.png'
import Temperature from './../assets/Temperature.png'
import { CatageoryContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SliderBox } from "react-native-image-slider-box";

import {
  faEnvelope,
  faEye,
  faArrowLeft,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

export default function Home({ navigation }) {

  const { userLogedIn } = useContext(CatageoryContext);

  const [images, setImages] = React.useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]);
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
            }}>Home</Text>
<TouchableOpacity onPress={() => navigation.navigate("IPAddress")}>
              <FontAwesomeIcon icon={faEdit} size={25} color="white" />
            </TouchableOpacity>
          </View>

          {/* Slider */}
          <View style={{
            marginTop: 15,
          }}>
            <SliderBox images={images}
              sliderBoxHeight={190}
              onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 15,
                marginHorizontal: 10,
                padding: 0,
                margin: 0,
              }}
            />
          </View>

          {/* Modules 1,2 */}
          <View style={{
            flex: 0.4,
            marginTop: 15,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "center"
          }}>
            <TouchableOpacity style={{ flex: 0.5, }} onPress={() => navigation.navigate("Water Control")}>
              <ImageBackground ImageBackground source={Water} style={{ flex: 1, }}>
                <View style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <View></View>
                  <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Water</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={{ flex: 0.05 }}></View>
            <TouchableOpacity style={{ flex: 0.5, }} onPress={() => navigation.navigate("Feed Control")}>
              <ImageBackground ImageBackground source={Feed} style={{ flex: 1, }}>
                <View style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <View></View>
                  <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Feed</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          {/* Modules 3,4 */}
          <View style={{
            flex: 0.4,
            marginTop: 15,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "center"
          }}>
            <TouchableOpacity style={{ flex: 0.5, }} onPress={() => navigation.navigate("Light Control")}>
              <ImageBackground ImageBackground source={Light} style={{ flex: 1, }}>
                <View style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <View></View>
                  <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Light</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={{ flex: 0.05 }}></View>
            <TouchableOpacity style={{ flex: 0.5, }} onPress={() => navigation.navigate("Temperature Control")}>
              <ImageBackground ImageBackground source={Temperature} style={{ flex: 1, }}>
                <View style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <View></View>
                  <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>Temperature</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
