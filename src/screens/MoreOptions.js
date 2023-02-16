import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';
import auth from '@react-native-firebase/auth';

import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  faFile,
  faCircleExclamation,
  faHandshakeAngle,
  faStar,
  faMaximize,
  faGear,
  faRightFromBracket

} from '@fortawesome/free-solid-svg-icons';
export default function MoreOptions({ navigation }) {

  const Logout = async () => {
    await auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
      })
    AsyncStorage.setItem('isUserLoggedIn', "false");
    navigation.navigate("Login")
      ;
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
          justifyContent: 'space-between',
        }}>

          {/* More */}
          <View style={{
            marginTop: 20,
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
            }}>More</Text>

          </View>

          {/* News Feed */}
          <TouchableOpacity style={{
            marginTop: 25,
            flexDirection: 'row',
            paddingHorizontal: 25,
          }}
            onPress={() => navigation.navigate("News Feed")}
          >
            <FontAwesomeIcon icon={faFile} size={30} color="yellow" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white'
            }}>News Feed</Text>
          </TouchableOpacity>

          {/*Privacy Policy */}
          <TouchableOpacity style={{
            marginTop: 25,
            flexDirection: 'row',
            paddingHorizontal: 25,
          }}
            onPress={() => navigation.navigate("Privacy Policy")}
          >
            <FontAwesomeIcon icon={faCircleExclamation} size={30} color="yellow" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white'
            }}>Privacy Policy</Text>
          </TouchableOpacity>

          {/*Services */}
          <TouchableOpacity style={{
            marginTop: 25,
            flexDirection: 'row',
            paddingHorizontal: 25,
          }}
          >
            <FontAwesomeIcon icon={faCircleExclamation} size={30} color="yellow" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white'
            }}>Services</Text>
          </TouchableOpacity>

          {/*Help */}
          <TouchableOpacity style={{
            marginTop: 25,
            flexDirection: 'row',
            paddingHorizontal: 25,
          }}
            onPress={() => navigation.navigate("Help")}
          >
            <FontAwesomeIcon icon={faHandshakeAngle} size={30} color="yellow" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white'
            }}>Help</Text>
          </TouchableOpacity>

          {/*Rate App */}
          <TouchableOpacity style={{
            marginTop: 25,
            flexDirection: 'row',
            paddingHorizontal: 25,
          }}
            onPress={() => navigation.navigate("Rate App")}
          >
            <FontAwesomeIcon icon={faStar} size={30} color="yellow" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white'
            }}>Rate App</Text>
          </TouchableOpacity>

          {/*Social Pages */}
          <TouchableOpacity style={{
            marginTop: 25,
            flexDirection: 'row',
            paddingHorizontal: 25,
          }}
            onPress={() => navigation.navigate("Social Pages")}
          >
            <FontAwesomeIcon icon={faMaximize} size={30} color="yellow" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white'
            }}>Social Accounts</Text>
          </TouchableOpacity>

          {/*Settings */}
          <TouchableOpacity style={{
            marginTop: 25,
            flexDirection: 'row',
            paddingHorizontal: 25,
          }}
          >
            <FontAwesomeIcon icon={faGear} size={30} color="yellow" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white'
            }}>Settings</Text>
          </TouchableOpacity>

          {/*Logout */}
          <TouchableOpacity style={{
            marginTop: 25,
            flexDirection: 'row',
            paddingHorizontal: 25,
            marginBottom: 30,
          }}
            onPress={Logout}
          >
            <FontAwesomeIcon icon={faRightFromBracket} size={30} color="yellow" />
            <Text style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white'
            }}>Logout</Text>
          </TouchableOpacity>

        </View>

        <View style={{ flex: 0.1, }}>
        </View>
      </ImageBackground>
    </View>
  );
};


