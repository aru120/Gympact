import firebase from 'firebase/app'
import 'firebase/firestore'

export default function createUser(user) {
   
        try{
            firebase
            .firestore()
            .collection('users')
            .doc(user.id)
            .set({
                username:user.name, 
                groups: {}
            })
        }
         catch (error){
             console.log(error)
         }
    
}

// export default function addGrouptoUser(user,groupid){
//     try{
//         firebase.firestore().collection('users').doc(user.uid).set({
//             groups: {
//                 groupid : true
//             }
//         })
//     }
// }