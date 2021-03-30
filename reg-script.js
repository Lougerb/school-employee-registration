"use strict";

//ID number Generator
//TO BE FIX
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
// console.log(currentYear);

let batchNum = 0;
let empNum = 0;

const regSubBtn = document.querySelector(".subButton");

regSubBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const getLName = document.querySelector("#lName");
  const getFName = document.querySelector("#fName");
  const getMName = document.querySelector("#mName");
  const getSName = document.querySelector("#sName");
  const getEmpID = document.querySelector("#eIDNumber");
  const getEmail = document.querySelector("#eMail");
  const getPosition = document.querySelector("#jPosition");

  const parentTable = document.querySelector("#empInfo");
  const newEmpRow = document.createElement("tr");
  const newEmpID = document.createElement("th");
  const newFullName = document.createElement("th");
  const newEmail = document.createElement("th");
  const newActionBtn = document.createElement("th"); //Must be Button

  parentTable.appendChild(newEmpRow);
  newEmpRow.appendChild(newEmpID);
  newEmpRow.appendChild(newFullName);
  newEmpRow.appendChild(newEmail);
  newEmpRow.appendChild(newActionBtn);

  newEmpRow.classList.add("dataRow");

  newEmpID.textContent = getEmpID.value;
  newFullName.textContent = `${getFName.value} ${getMName.value[0]}. ${getLName.value} ${getSName.value}`;
  newEmail.textContent = getEmail.value;
  newActionBtn.textContent = "*";

  //   console.log(getLName.value[0]);
});
