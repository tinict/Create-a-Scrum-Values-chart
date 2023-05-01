const firebaseConfig = {
  apiKey: "AIzaSyDGZSOLNXV_ew-C-l-0oTC0HZJexKxCAr8",
  authDomain: "scrum-spider-chart.firebaseapp.com",
  databaseURL: "https://scrum-spider-chart-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "scrum-spider-chart",
  storageBucket: "scrum-spider-chart.appspot.com",
  messagingSenderId: "578037114526",
  appId: "1:578037114526:web:e466cac853bf4842ad3d8f",
  measurementId: "G-9S1BGF2D55"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
else {
  firebase.app();
}

var database = firebase.database();

const dbRef = database.ref();
dbRef.child('ScrumValues').get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
