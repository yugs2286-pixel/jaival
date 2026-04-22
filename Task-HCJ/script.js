
// function Addtask() {
//     const form = document.getElementById('form');
//   if(form.style.display == 'none');
//   else (form.style.display)
// }
  //  window.Addtask = Addtask;



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot , deleteDoc, updateDoc , doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAZ0wy2Cw7JBQJE1o7Ro7USHiMICa67lpo",
  authDomain: "demoproject-541f7.firebaseapp.com",
  projectId: "demoproject-541f7",
  storageBucket: "demoproject-541f7.firebasestorage.app",
  messagingSenderId: "675420228570",
  appId: "1:675420228570:web:e1bef9ed2537d01ee60ee3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const tableBody = document.getElementById("table-body");

// const Alltask = [total,com,run,pend];
// const  alltask = Alltask.filter(Alltask => Alltask.length === 3)
// const total= document.getElementById('Total');
//   const COMPLETE = document.getElementById('Complete');
//   const RUNNING = document.getElementById('Running');
// const PENDING = document.getElementById('Pending');



onSnapshot(collection(db, "message"), (ftot) => {
  const oldRows = tableBody.querySelectorAll("tr:not(.first)");
  oldRows.forEach(row => row.remove());



 const allDocs = ftot.docs;
   const total = allDocs.length;
   const COMPLETE = allDocs.filter(doc =>doc.data().status === "COMPLETE").length;
   const RUNNING = allDocs.filter(doc =>doc.data().status === "RUNNING").length;
   const PENDING = allDocs.filter(doc => doc.data().status === "PENDING").length;

  document.getElementById("Total").innerText =total; 
   document.getElementById("Complete").innerText = COMPLETE; 
   document.getElementById("Running").innerText =RUNNING; 
  document.getElementById("Pending").innerText =PENDING;

  allDocs.forEach((docs) => {
    const data = docs.data();

   const row = document.createElement("tr");
  row.innerHTML = ` <td>${data.name || ''}</td>
 <td>${data.email || ''}</td>
  <td>${data.Mobile || ''}</td>
 <td>${data.title || ''}</td>
 <td>${data.priority || ''}</td>
 <td>${data.date || ''}</td>
 <td>${data.status || ''}</td>  
    <td>
  <button class="editbtn" style="background:#38cb82; color:white; margin:3px;
   padding:5px 10px; border-radius:5px; ">Edit</button>
   <button class="deletebtn" style="background:red; color:white;
   margin:3px; padding:5px 10px;  border-radius:5px; ">Delete</button>
    </td>`;
  // });


  
  // ftot.forEach((docs) => {
  //   total++;
  //   const data = docs.data();
  //   if (data.status === "COMPLETE") COMPLETE++;
  //   else if (data.status === "RUNNING") RUNNING++;
  //   else if (data.status === "PENDING") PENDING++;

  //    document.getElementById("Total").innertext= total; 
  //  document.getElementById("Complete").innertext= Complete; 
  //  document.getElementById("Running").innertext=Running; 
  // document.getElementById("Pending").innertext=Pending;

//  all.forEach((docSnap) => {
  // const data = docSnap.data();
  
 
  row.querySelector(".deletebtn").addEventListener("click", () => {
    if (confirm("you want to delete?")) {
      const docref = doc (db,"message", docs.id);
      deleteDoc(docref);
document.getElementsByClassName('status-card');
// const total= document.getElementById('Total');
//   const COMPLETE = document.getElementById('Complete');
//   const RUNNING = document.getElementById('Running');
// const PENDING = document.getElementById('Pending');



   }
  });

  row.querySelector(".editbtn").addEventListener("click", () => {
    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('mobile').value = data.Mobile;
    document.getElementById('title').value = data.title;
    document.getElementById('date').value = data.date;
    document.getElementById('priority').value = data.priority;
    document.getElementById('Status').value = data.status;



    
document.getElementById('form').style.display = "block";
  const submitbtn = document.querySelector('#form button[type="submit"]');
    submitbtn.innerText = "Update";
    submitbtn.dataset.editId = doc.id;
  });
  tableBody.appendChild(row);
});
});


document.getElementById("task").addEventListener("click", () => {
  const form = document.getElementById('form');
  form.style.display = form.style.display === "block" ? "none" : "flex";
  
  
  const submitbtn = document.querySelector('#form button[type="submit"]');
  submitbtn.innerText = "Submit";
  submitbtn.dataset.editId = "";
});

const form = document.getElementById('form');

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  const Tcol = document.querySelectorAll("#table-body tr:not(.first)");

  Tcol.forEach(row => {
    const rowText = row.innerText.toLowerCase();
if (rowText.includes(searchValue)) {
  row.style.display = "";
   }else{
    row.style.display = "none";
}
});
});

const alertMsg = document.querySelector(".alert");


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
const email= document.getElementById('email').value;
const Mobile =document.getElementById('mobile').value;
  const title= document.getElementById('title').value;
 const date = document.getElementById('date').value;
  const priority= document.getElementById('priority').value;
  const status =document.getElementById('Status').value;
  const submitbtn = document.querySelector('#form button[type="submit"]');
  const editId = submitbtn.dataset.editId;


  if (editId) {
    await updateDoc(doc(db, "message", editId), {
   name, email, Mobile, title, date, priority, status
  });
      submitbtn.innerText = "Submit";
    submitbtn.dataset.editId = "";
  } else{
  await addDoc(collection(db, "message"), {
name, email, Mobile, title, date, priority, status
   });
   }


  form.style.display ="none"
 alertMsg.style.display = "block";
  setTimeout(() => { alertMsg.style.display = "none"; }, 4000);
  form.reset();
});



const nameField = document.getElementById('name');
 const emailField = document.getElementById('email');
  const mobileField = document.getElementById('mobile');
 const titleField = document.getElementById('title');
 const dateField = document.getElementById('date');



const nameError = document.getElementById('nameError');
 const emailError = document.getElementById('emailError');
 const mobileError = document.getElementById('mobileError');
const titleError = document.getElementById('titleError');
 const dateError = document.getElementById('dateError');

nameField.addEventListener('input', () => {
   const regex = /^[A-Za-z ]{5,20}$/;
  if (!regex.test(nameField.value)) {
  nameError.innerText = "Invalid Name (Only letters, 5-20 chars)";
  nameError.style.fontSize = "20px";
    nameError.style.display = "block";
  // nameError.style.color = "red"
    nameField.style.borderColor = "red";
  } else {
  nameError.style.display = "none";
   nameField.style.borderColor = "green";
 }
});


emailField.addEventListener('input', () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(emailField.value)) {
   emailError.innerText = "Invalid Email";
    emailError.style.display = "block";
    // emailError.style.color = "red"
    emailError.style.fontSize = "20px";
   emailField.style.borderColor = "red";
  } else {
     emailError.style.display = "none";
    emailField.style.borderColor = "green";
  }
});

mobileField.addEventListener('input', () => {
  const regex = /^[0-9]{10}$/;
  if (!regex.test(mobileField.value)) {
   mobileError.innerText = "Enter 10 digit number";

    mobileError.style.display = "block";

    // mobileError.style.display = "flex";
    mobileError.style.fontSize = "20px";
    mobileField.style.borderColor = "red";
  } else {
    mobileError.style.display = "none";
     mobileField.style.borderColor = "green";
  }
});

titleField.addEventListener('input', () => {
  if (titleField.value.length < 3) {
   titleError.innerText = "Minimum 3 characters required";
    titleError.style.display = "block";
      titleField.style.borderColor = "red";
  } else {
   titleError.style.display = "none";
    titleField.style.borderColor = "green";
  }
});

dateField.addEventListener('input', () => {

  if (!dateField.value) {
  dateError.innerText = "Please select a date";

// dateError.style.display = "none";
    dateError.style.display = "block";
  } else {
    dateError.style.display = "none";
      dateField.style.borderColor = "green"
  }
});



// document.getElementById('date').addEventListener('input', () => {
//   const field = document.getElementById('date');
//   const error = document.getElementById('dateError');
//   if (!field.value) {
//     error.innerText = "Please select a date";
//     error.style.display = "block";
//   } else {
//     error.style.display = "none";
//     field.style.borderColor = "green";
//   }
// });
// document.getElementById("Total").innerHTML=Total 
//    document.getElementById("Complete").innerHTML= Complete 
//    document.getElementById("Running").innerHTML=Running 
//   document.getElementById("Pending").innerHTML=Pending

