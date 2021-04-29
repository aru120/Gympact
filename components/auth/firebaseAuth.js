import initFirebase from '../../firebase/initFirebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import createUser from '../../lib/firebase/write'
import { useEffect, useState } from 'react'


initFirebase()

const FirebaseAuthConfig = {
    signInFlow: 'popup',
    signInOptions:[
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,

        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        
    ],
    signInSuccessUrl: '/',
    credentialHelper: 'none',
    callbacks:{
        signInSuccessWithAuthResult: async ({user}, redirectUrl) =>{
            // const userData = mapUserData(user)
            // setUserCookie(userData)
            createUser(user)
            console.log(user)
        }
    }
}

export default function FirebaseAuth(){
    const [renderAuth, setRenderAuth] = useState(false)

    useEffect(()=>{
        if( typeof window !== 'undefined'){
            setRenderAuth(true)
        }
    },[])

    return(
        <div>
            {renderAuth ? 
            <StyledFirebaseAuth uiConfig={FirebaseAuthConfig} firebaseAuth={firebase.auth()} />  
            : null}
        </div>
    )
}




