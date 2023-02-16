import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Linking,

} from 'react-native';
import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faFile,
  faCircleExclamation,
  faHandshakeAngle,
  faStar,
  faMaximize,
  faGear,
  faRightFromBracket,
  faArrowLeft,


} from '@fortawesome/free-solid-svg-icons';
export default function SocialPages({navigation}) {
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
          }}>Social Accounts</Text>
          <View>
          </View>
        </View>

        <View style={{

          flex: 0.2,
        }}></View>
        <View style={{

          flex: 0.5,
          borderRadius: 20,
          backgroundColor: '#006a78',
          opacity: 0.8,
          paddingHorizontal: 15,
          justifyContent: 'space-between',
        }}>
          {/* Facebook */}
          <TouchableOpacity style={{
            flexDirection: 'row',
            borderRadius: 10,
            marginTop: 25,
            backgroundColor: '#1a2a41',
            height: 50,
            alignItems: 'center',
            paddingHorizontal: 15,
            opacity: 0.8,
          }}
            onPress={() =>
              Linking.openURL(
                'https://www.facebook.com/PetTechHomes'
              )
            }
          >
            <FontAwesomeIcon icon={faArrowLeft} size={30} color="#f54232" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
              Facebook
            </Text>
          </TouchableOpacity>

          {/* Youtube */}
          <TouchableOpacity style={{
            flexDirection: 'row',
            borderRadius: 10,
            marginTop: 25,
            backgroundColor: '#1a2a41',
            height: 50,
            alignItems: 'center',
            paddingHorizontal: 15,
            opacity: 0.8,
          }}
            onPress={() =>
              Linking.openURL(
                'https://www.youtube.com/channel/UCJV6Ta2lFMS9xh6TX0W7VBA'
              )
            }
          >
            <FontAwesomeIcon icon={faArrowLeft} size={30} color="#f54232" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
              Youtube
            </Text>
          </TouchableOpacity>

          {/* LinkedIn */}
          <TouchableOpacity style={{
            flexDirection: 'row',
            borderRadius: 10,
            marginTop: 25,
            backgroundColor: '#1a2a41',
            height: 50,
            alignItems: 'center',
            paddingHorizontal: 15,
            opacity: 0.8,
          }}
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/company/smart-aqua-homes/'
              )
            }
          >
            <FontAwesomeIcon icon={faArrowLeft} size={30} color="#f54232" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
              linkedin
            </Text>
          </TouchableOpacity>

          {/* Instagram */}
          <TouchableOpacity style={{
            flexDirection: 'row',
            borderRadius: 10,
            marginTop: 25,
            backgroundColor: '#1a2a41',
            height: 50,
            alignItems: 'center',
            paddingHorizontal: 15,
            opacity: 0.8,
            marginBottom:25,
          }}
            onPress={() =>
              Linking.openURL(
                'https://www.instagram.com/smartaquahomes/'
              )
            }
          >
            <FontAwesomeIcon icon={faArrowLeft} size={30} color="#f54232" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
              Instagram
            </Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
};


