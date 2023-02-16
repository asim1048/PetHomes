import React, {useContext,useEffect,useState} from 'react'
import {
    View,
    StatusBar,
    ImageBackground,
    Text,
    
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CatageoryContext } from '../context/AppContext';
import Tabs from './Tabs';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgetPassword from '../screens/ForgetPassword';
import Verification from '../screens/Verification';
import NewPassword from '../screens/NewPassword'
import FeedControl from '../screens/FeedControl';
import WaterControl from '../screens/WaterControl';
import TemperatureControl from '../screens/TemperatureControl'
import LightControl from '../screens/LightControl'
import NewsFeed from '../screens/NewsFeed';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Services from '../screens/Services';
import Help from '../screens/Help';
import RateApp from '../screens/RateApp';
import SocialPages from '../screens/SocialPages';
import Settings from '../screens/Settings';
import Logout from '../screens/Logout';
import IPAdress from '../screens/IPAdress';


import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

export default function Navigations() {
    const { userLogedIn } = useContext(CatageoryContext);
    return (
        <NavigationContainer>
            
            <Stack.Navigator initialRouteName={userLogedIn? "Main": "Login"}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Main"
                    component={Tabs}
                />

                <Stack.Screen name="Login" component={Login} options={{
                        headerShown: false,
                        
                    }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{
                        headerShown: false,
                        
                    }}/>
                <Stack.Screen name="Forget Password" component={ForgetPassword} options={{
                        headerShown: false,
                        
                    }}/>
                <Stack.Screen name="Verification" component={Verification} options={{
                        headerShown: false,
                        
                    }}/>
                <Stack.Screen name="Feed Control" component={FeedControl} options={{
                        headerShown: false,
                        
                    }}/>
                
                <Stack.Screen name="New Password" component={NewPassword} options={{
                        headerShown: false,
                        
                    }}/>
                
                <Stack.Screen name="Water Control" component={WaterControl} options={{
                        headerShown: false,
                        
                    }}/>
                
                <Stack.Screen name="Temperature Control" component={TemperatureControl} options={{
                        headerShown: false,
                        
                    }}/>
                
                <Stack.Screen name="Light Control" component={LightControl} options={{
                        headerShown: false,
                        
                    }}/>

                <Stack.Screen name="News Feed" component={NewsFeed} options={{
                        headerShown: false,
                        
                    }}/>
                <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} options={{
                        headerShown: false,
                        
                    }}/>

                <Stack.Screen name="Services" component={Services} options={{
                            headerShown: false,
                            
                        }}/>
                <Stack.Screen name="Help" component={Help} options={{
                            headerShown: false,
                            
                        }}/>
                <Stack.Screen name="Rate App" component={RateApp} options={{
                            headerShown: false,
                            
                        }}/>
                <Stack.Screen name="Social Pages" component={SocialPages} options={{
                            headerShown: false,
                            
                        }}/>
                <Stack.Screen name="Settings" component={Settings} options={{
                            headerShown: false,
                            
                        }}/>
                <Stack.Screen name="Logout" component={Logout} options={{
                            headerShown: false,
                            
                        }}/>
                <Stack.Screen name="IPAddress" component={IPAdress} options={{
                            headerShown: false,
                            
                        }}/>

                {/* <Tabs /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
