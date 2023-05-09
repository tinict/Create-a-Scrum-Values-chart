'usse strict';

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
export let StoreQuestion = [];
export let StoreValue = [];

const dbRef = database.ref();
dbRef.child('ScrumValues').get().then((snapshot) => {
  if (snapshot.exists()) {
    // let StoreQuestion = [];
    console.log(snapshot.val());
    let newValues = Object.values(snapshot.val())
    for (let i = 0; i < 5; i++)
      StoreValue.push(Object.values(snapshot.val())[i]);
      console.log(newValues);
    for (let i = 0; i < newValues.length; i++) {
      let Temp = [];
      console.log(Object.values(newValues[i].Questions));
      for (let j = 0; j < 5; j++) {
        let newQuestions = (Object.values(newValues[i].Questions))[j].Content;
        console.log(newQuestions);
        Temp.push(newQuestions);
      }
      StoreQuestion.push(Temp);
    }
    console.log(StoreQuestion);
  } 
  else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

