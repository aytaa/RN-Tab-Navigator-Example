import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import { Ionicons , AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'Contact') {
                        iconName = focused ? 'contacts' : 'contacts';
                    }
                    return <AntDesign name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{ headerShown: false}}
            />
            <Tab.Screen
                name="Contact"
                component={ContactStackNavigator}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
