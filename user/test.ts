// import React from 'react';
import { auth } from '../firebase-client-config';
// //import firebase from 'firebase/app';
import login from './function';
jest.mock('../firebase-client-config', () => ({
    auth: {
        signInWithEmailAndPassword: jest
            .fn()
            .mockImplementation((email, password) =>
                Promise.resolve({
                    email: email,
                    userId: 1
                })
            )
    }
}));

test('something', async () => {
    await login('example@gmail.com', 'smth');
    expect(auth.signInWithEmailAndPassword).toBeCalledWith('example@gmail.com', 'smth');
});