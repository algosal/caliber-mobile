import React from 'react';
import { Button, Text } from 'react-native';
import { auth } from '../firebase-client-config';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../store/actions';
import { UserInfo } from '../user/user';
import { RootState } from '../store/store';

export default function LogoutComponent () {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.userReducer.user)

    function logout () {
        auth.signOut().then(()=>{
            dispatch(getUser(new UserInfo));
        }).catch(err=>{
            console.error(err);
        });
    }

    return(
        <>
        <Text>{JSON.stringify(user)}</Text>
        <Button title='Logout' onPress={logout}/>     
        </>      
    );
}