import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Icon from 'react-native-vector-icons/Ionicons';


// Screen
import Home from '../screens/HomeScreen';
import Menu from '../screens/MenuScreen';
import Cart from '../screens/CartScreen';
// import Profile from '../screens/ProfileScreen';

// nested screen
import LoginScreen from '../screens/ProfileScreen';
import NewUser from '../screens/NewUser';

const Stack = createNativeStackNavigator();
const ProfileScreen = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name='NewUser' component={NewUser} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

// create screen
const homeName = 'Home';
const menuName = 'Menu';
const cartName = 'Cart';
const profileName = 'Profile';


// Bottom Tab
const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
        <Tab.Navigator
            initialRouteName={Home}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === menuName) {
                        iconName = focused ? 'cafe' : 'cafe-outline';
                    } else if (rn === cartName) {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (rn === profileName) {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Icon name={iconName} size={size} color='#4B56D2'/>
                }
            })}
        >
            <Tab.Screen name={homeName} component={Home}/>
            <Tab.Screen name={menuName} component={Menu}/>
            <Tab.Screen name={cartName} component={Cart}/>
            <Tab.Screen name={profileName} component={ProfileScreen}/>
        </Tab.Navigator>
    )
}
