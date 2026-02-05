import { Tabs } from 'expo-router';
import React from 'react';
import {Image, StyleSheet} from 'react-native'



export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarStyle:{
        backgroundColor: '#f4f4f4',
        borderTopWidth: 8,
        borderTopColor: '#0a3b60',
        height: 70,
        paddingTop: 5,
        shadowColor: '#2065db85',
        shadowOffset:{
          width: 0,
          height: -10
        },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 24,
        
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () =>  <Image style={s.iconTab} source={require('@/assets/icons8-casa-48.png')}/>
          
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: () =>  <Image style={s.iconTab} source={require('@/assets/icons8-pesquisar.gif')}/>
          
        }}
      />
      <Tabs.Screen name="list" options={{
        title: 'List',
        headerShown: false,
        tabBarIcon: () => <Image style={s.iconTab} source={require('@/assets/icons8-lista.gif')}/>
         }}/>
    </Tabs>

  );
}


const s = StyleSheet.create({
  iconTab:{
    width: 30,
    height: 30,
  }
})
