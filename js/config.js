var firebaseConfig = {
  apiKey: "AIzaSyArVaLRekZnzb0VDHU1v5WfpTUfblfOOwg",
  authDomain: "mcq-sbq-platform.firebaseapp.com",
  databaseURL:"https://mcq-sbq-platform-default-rtdb.firebaseio.com/",
  projectId: "mcq-sbq-platform",
  storageBucket: "mcq-sbq-platform.appspot.com",
  messagingSenderId: "462299285277",
  appId: "1:462299285277:web:7dc825e3fddb93fa6fc3f4",
  measurementId: "G-JZ0GMNV5Y9"
};
firebase.initializeApp(firebaseConfig);
const authenticationObject=firebase.auth();