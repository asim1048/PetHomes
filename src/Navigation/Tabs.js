import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Notification from '../screens/Notification'
import ContactUs from '../screens/ContactUs';
import MoreOptions from '../screens/MoreOptions';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {
    faHouse,
    faBell,
    faComment,
    faEllipsisVertical

} from '@fortawesome/free-solid-svg-icons';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow,
        }}
        onPress={onPress}>
        <View
            style={{
                width: 65,
                height: 65,
                borderRadius: 45,
                // backgroundColor: THEME.COLORS.primary,
            }}>
            {children}
        </View>
    </TouchableOpacity>
);
const MockupScreenForModal = () => <></>;
const Tabs = () => {
    //  const {setShowNewTaskModal} = useData();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 4,
                    borderRightColor: '#ccc',
                    borderRightWidth: 4,
                    borderLeftColor: '#ccc',
                    borderLeftWidth: 1,
                    // height: SIZES.tabBarHeight,
                    paddingBottom: 20,
                     //...styles.shadow,
                },


                headerStyle: {
                    borderBottomColor: 'transparent',
                    borderBottomWidth: 1,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 4,
                },
                headerTitleAlign: 'center',

                headerTitleStyle: {
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    fontSize: 24,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 10,
                            }}>
                            <FontAwesomeIcon icon={faHouse} size={25} color={focused? "black":"gray"} />

                            {/* 
              <Image source={Pic} style={{ height: 50, width: 50, }} /> */}

                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 10,
                            }}>

                            <FontAwesomeIcon icon={faBell} size={25} color={focused? "black":"gray"} />
                            {/* 
              <Image source={} style={{ height: 50, width: 50, }} /> */}

                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="ContactUs"
                component={ContactUs}
                options={{
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 10,
                            }}>

                            <FontAwesomeIcon icon={faComment} size={25} color={focused? "black":"gray"} />
                            {/* 
              <Image source={} style={{ height: 50, width: 50, }} /> */}

                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="MoreOptions"
                component={MoreOptions}
                options={{
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 10,
                            }}>

                            <FontAwesomeIcon icon={faEllipsisVertical} size={25} color={focused? "black":"gray"} />
                            {/* 
              <Image source={} style={{ height: 50, width: 50, }} /> */}

                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});
