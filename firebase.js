   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);

   // Display registered users
   const userList = document.getElementById('userList');
   const usersRef = ref(database, 'users');
   
   onValue(usersRef, (snapshot) => {
     userList.innerHTML = ''; // Clear the list before adding new data
     snapshot.forEach((childSnapshot) => {
       const user = childSnapshot.val();
       const listItem = document.createElement('li');
       listItem.textContent = `Name: ${user.username}, Email: ${user.email}`;
       userList.appendChild(listItem);
     });
   });