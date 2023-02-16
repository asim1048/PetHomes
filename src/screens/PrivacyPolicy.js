import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Background from './../assets/Background.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faEye,
  faArrowLeft,
  faL,
} from '@fortawesome/free-solid-svg-icons';
export default function PrivacyPolicy({navigation}) {
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
          }}>Privacy Policy</Text>
          <View>
          </View>
        </View>

        {/* Policy */}
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
          <Text style={{
            marginTop: 15,
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
            opacity: 1,
          }}>
            Smart Aqua Homes built the Smart Aqua Homes app as a Free app. This SERVICE is provided by Smart Aqua Homes at no cost and Is intended for use as Is.
          </Text>

          <Text style={{
            marginTop: 5,
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
            opacity: 1,
          }}>
            This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information If anyone decided to use our Service
          </Text>

          <Text style={{
            marginTop: 5,
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
            opacity: 1,
          }}>
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and Improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Smart Aqua Homes unless otherwise defined In this Privacy Policy.
          </Text>
          <Text style={{
            marginTop: 5,
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
            opacity: 1,
          }}>
            For a better experience, while using our Service. we may require you to provide us with certain personally identifiable Information, including but not limited to mail, password , contact number. The information that we request will be retained by us and used as described in this privacy policy.
          </Text>
          <Text style={{
            marginTop: 5,
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
            opacity: 1,
          }}>
            The app does use third party services that may collect information used to identify you. Link to privacy policy of third party service providers used by the app
          </Text>
        </View>

        <TouchableOpacity style={{
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={()=>
          navigation.navigate("MoreOptions")}
        >
          <Text style={{
            color: 'yellow',
            fontSize: 25,
            fontWeight: 'bold'
          }}>Accept</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};


