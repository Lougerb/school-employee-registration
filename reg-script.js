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
  const getPosition = document.querySelector("#jPosition");
  const getEmail = document.querySelector("#eMail");
  const getDOB = document.querySelector("#bDay");
  const getGender = document.querySelector("#sGender");
  const getStatus = document.querySelector("#sStatus");
  const getLTeach = document.querySelector("#lTeach");
  const getSubject = document.querySelector("#posSubject");

  const parentTable = document.querySelector("#empInfo");
  const newEmpRow = document.createElement("tr");
  const newEmpID = document.createElement("th");
  const newPosition = document.createElement("th");
  const newFullName = document.createElement("th");
  //   const newEmail = document.createElement("th"); //Optional
  const newActionBtn = document.createElement("th"); //Must be Button

  parentTable.appendChild(newEmpRow);
  newEmpRow.appendChild(newEmpID);
  newEmpRow.appendChild(newFullName);
  newEmpRow.appendChild(newPosition);
  newEmpRow.appendChild(newActionBtn);

  newEmpRow.classList.add("dataRow");

  newPosition.textContent = getPosition.value;
  newFullName.textContent = `${getFName.value} ${getMName.value[0]}. ${getLName.value} ${getSName.value}`;
  newEmpID.textContent = getEmpID.value;
  newActionBtn.textContent = "*";

  //clearing after submitting
  //   getLName.value = "";
  //   getFName.value = "";
  //   getMName.value = "";
  //   getSName.value = "";
  //   getEmpID.value = "";
  //   getPosition.value = "";
  //   getEmail.value = "";
  //   getDOB.value = "";
  //   getGender.value = "";
  //   getStatus.value = "";
  //   getLTeach.value = "";
  //   getSubject.value = "";

  //   console.log(getLName.value[0]);
});

//Object
const regEmployees = {
  employeeID: {
    202100101: {
      Name: {
        _fName: "Louein Gerald",
        _mName: "Sabalza",
        _lName: "Baling",
        _sName: "",
      },
      DOB: `03 / 03 / 1997`,
      Gender: "Male",
      Email: "lgbaling@company.com",
      Position: "Front End Developer",
    },
  },
};
