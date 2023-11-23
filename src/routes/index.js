const admin = require('firebase-admin')


admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://prueba-de-integracion-8469f-default-rtdb.firebaseio.com/"
})

const db = admin.database()