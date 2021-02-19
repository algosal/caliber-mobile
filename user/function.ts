import { auth } from '../firebase-client-config';

export default function login (email: string, password: string) {
    auth.signInWithEmailAndPassword(email, password).then((res)=>{
        console.log(email+' '+password);
        console.log('i logged In');
    }).catch(err=>{
        console.error(err);
    })
}