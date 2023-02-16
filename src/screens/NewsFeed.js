import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faEye,
  faArrowLeft,
  faL,
} from '@fortawesome/free-solid-svg-icons';
import NewsFeedPic from './../assets/NewsFeedPic.png'
export default function NewsFeed() {
  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground source={Background} style={{ flex: 1, }}>
        
        {/* News Feed */}
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
            }}>News Feed</Text>
            <View>
            </View>
          </View>

          {/* Post 1*/}
          <TouchableOpacity style={{
            marginTop: 15,
            paddingHorizontal: 15,
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Image 
              source={NewsFeedPic}
              style={{
                width:300,
                paddingHorizontal: 15,
              }}
            >
            </Image>
            <Text style={{
                fontSize:14,
                color:'white',
              }}>Equarium Controller added one more... See more</Text>
          </TouchableOpacity>

          {/* Post 1*/}
          <TouchableOpacity style={{
            marginTop: 15,
            paddingHorizontal: 15,
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Image 
              source={NewsFeedPic}
              style={{
                width:300,
                paddingHorizontal: 15,
              }}
            >
            </Image>
            <Text style={{
                fontSize:14,
                color:'white',
              }}>Equarium Controller added one more... See more</Text>
          </TouchableOpacity>

          {/* Post 1*/}
          <TouchableOpacity style={{
            marginTop: 15,
            paddingHorizontal: 15,
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Image 
              source={NewsFeedPic}
              style={{
                width:300,
                paddingHorizontal: 15,
              }}
            >
            </Image>
            <Text style={{
                fontSize:14,
                color:'white',
              }}>Equarium Controller added one more... See more</Text>
          </TouchableOpacity>
          


      </ImageBackground>
    </View>
  );
};


