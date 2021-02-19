import React, { useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from '../firebase-client-config';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getUser, loginChange } from '../store/actions';
import LogoutComponent from './logout.component';
import { Role } from './user';

export default function LoginComponent () {
    const user = useSelector((state: RootState) => state.userReducer.user);
    const input = useSelector((state: RootState) => state.userReducer.userLogin);

    const dispatch = useDispatch();

    useEffect(()=>{
        //monitor authentication change
        auth.onAuthStateChanged((loggedUser) => {
            console.log('auth state changed');
            if(loggedUser){
                //get role if user is already logged in
                loggedUser.getIdTokenResult().then(token=>{
                    const role: Role = {
                        ROLE_TRAINER: token.claims.ROLE_TRAINER,
                        ROLE_QC: token.claims.ROLE_QC,
                        ROLE_VP: token.claims.ROLE_VP
                    };
                    let email: string = '';
                    //because somehow email can be undefined
                    if(loggedUser.email){
                        email = loggedUser.email;
                    }
                    //dispatch information about the user
                    dispatch(getUser({
                        ...user, 
                        uid: loggedUser.uid,
                        email: email,
                        role: role
                    }));
                })
            }else{
                console.log('not logged in yo');
            }
        });
    }, []);

    function login (email: string, password: string) {
        auth.signInWithEmailAndPassword(email, password).then((res)=>{
            console.log('i logged In');
            console.log('store should include user info if state monitor is working');
            console.log(user);
        }).catch(err=>{
            console.error(err);
        })
    }

    return(
        <View>
            {user.uid
            ? <LogoutComponent />
            : <>
                <TextInput value={input.email} onChangeText={text=>dispatch(loginChange({...input, email: text}))}/>
                <TextInput secureTextEntry={true} value={input.password} onChangeText={text=>dispatch(loginChange({...input, password: text}))}/>
                <Button title='Login' onPress={()=>{login(input.email, input.password)}}/>
            </>
            }
        </View>
    );
}