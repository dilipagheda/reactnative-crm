import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="People List"
        activeColor="#800000"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#cccccc' }}
      >
      <Tab.Screen name="People List" component={PeopleList} />
      <Tab.Screen name="Add Person" component={AddPerson} options={{tabBarLabel: "Add/Update Person"}}/>
      <Tab.Screen name="Company List" component={CompanyList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
