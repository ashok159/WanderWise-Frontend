import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MyMap from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';
import Home from './screens/home';
import PlannerScreen from './screens/PlannerScreen';

const Tab = createBottomTabNavigator();

const ScreenOne = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen One</Text>
    </View>
  );
  
  const ScreenTwo = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen Two</Text>
    </View>
  );
  
  const ScreenThree = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen Three</Text>
    </View>
  );

  const ScreenFour = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen Four</Text>
    </View>
  );

  const ScreenFive = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen Five</Text>
    </View>
  );

const Tabs = () =>{
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    // position: 'absolute',
                    // bottom: 25, 
                    // left: 20,
                    // right: 20,
                    // elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15, 
                    height: 100,
                    ...style.shadow
                }
            }}
        >
           <Tab.Screen name="Home" component={HomeScreen} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    // top: 10
                }}>
                    <Image 
                    source={require('wanderwise-frontend/icons/home(1).png')} 
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#CE2D4F' : '#748c94',
                    }}
                    />
                    <Text style={{color: focused ? '#CE2D4F' : '#748c94', fontSize: 12}}>HOME</Text>
                </View>
            )
           }}></Tab.Screen>
           <Tab.Screen name="Map" component={MyMap} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    // top: 10
                }}>
                    <Image 
                    source={require('wanderwise-frontend/icons/placeholder.png')} 
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#CE2D4F' : '#748c94',
                    }}
                    />
                    <Text style={{color: focused ? '#CE2D4F' : '#748c94', fontSize: 12}}>MAP</Text>
                </View>
            )
           }}></Tab.Screen>
           <Tab.Screen name="Post" component={ScreenThree} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    // top: 10
                }}>
                    <Image 
                    source={require('wanderwise-frontend/icons/add.png')} 
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#CE2D4F' : '#748c94',
                    }}
                    />
                    <Text style={{color: focused ? '#CE2D4F' : '#748c94', fontSize: 12}}></Text>
                </View>
            )
           }}></Tab.Screen>
            <Tab.Screen name="Planner" component={PlannerScreen} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    // top: 10
                }}>
                    <Image 
                    source={require('wanderwise-frontend/icons/menu.png')} 
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#CE2D4F' : '#748c94',
                    }}
                    />
                    <Text style={{color: focused ? '#CE2D4F' : '#748c94', fontSize: 12}}>WIDGETS</Text>
                </View>
            )
           }}></Tab.Screen>
           <Tab.Screen name="Profile" component={ScreenFive} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    // top: 10
                }}>
                    <Image 
                    source={require('wanderwise-frontend/icons/user.png')} 
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? '#CE2D4F' : '#748c94',
                    }}
                    />
                    <Text style={{color: focused ? '#CE2D4F' : '#748c94', fontSize: 12}}>PROFILE</Text>
                </View>
            )
           }}></Tab.Screen>
        </Tab.Navigator>
      );
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25, 
        shadowRadius: 3.5, 
        elevation: 5
    }
})

export default Tabs;