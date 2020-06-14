const functions = require('firebase-functions');
const admin = require('firebase-admin');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
admin.initializeApp(functions.config().firebase);

const createNotification = (notification)=>{
    return admin.firestore()
                .collection('notifications')
                .add(notification)
                .then(()=>{
                    console.log('Notification added',notification);
                })
}

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc=>{
    const project = doc.data();
    const notification = {
        content : 'Added new project',
        user : `${project.authorFirstName} ${project.authorLastName}`,
        time : admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
})

// exports.userJoined = functions.auth.user().onCreate(user=>{
//     return admin.firestore().collection('users').doc(user.uid)
//                     .get().then((doc)=>{
//                         const newUser = doc.data();
//                         const notification = {
//                             content : 'Joined the app',
//                             user :`${newUser.firstname} ${newUser.lastname}`,
//                             time:admin.firestore.FieldValue.serverTimestamp
//                         }

//                         return createNotification(notification);
//                     })
// })

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });