import React from 'react';
import { Text, Image } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import BatchesComponent from '../batches/batches.component';
<<<<<<< HEAD
import AssociateTableComponent from '../associate/AssociateTableComponent';
import UnderDevelopmentComponent from '../UnderDevelopmentComponent';
import LoginComponent from '../user/Login';
=======
import LoginComponent from '../user/Login';
>>>>>>> d87e5aa9d06a1b82c42385dafeb527cf79cd7f71

export type StackParams = {
    Login: undefined;
    Home: undefined;
    Batches: undefined;
};

const headerOptions: StackHeaderOptions = {
    headerTitle: () => <Image style={{width:165, height:50, margin:30}}source={require('./rev-logo.png')} />,
};

const Stack = createStackNavigator();

export default function RouterComponent(props: any) {
    return (
        <Stack.Navigator initialRouteName='Caliber'>
            <Stack.Screen
                name='Login'
                component={LoginComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='Batches'
                component={BatchesComponent}
                options={headerOptions}
            />
            <Stack.Screen 
                name='NoteTableComponent' 
                component={AssociateTableComponent} 
            />
            <Stack.Screen 
                name='UnderDevelopment' 
                component={UnderDevelopmentComponent} 
            />
        </Stack.Navigator>
    )
}