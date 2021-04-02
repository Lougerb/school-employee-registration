"use strict";

//ID number Generator
//TO BE FIX
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
// console.log(currentYear);

let batchNum = 0;
let empNum = 0;

const regSubBtn = document.getElementById("submitButton");

//addEventListener must listen to the Form INSTEAD of the Submit Button of the form
const regForm = document.getElementById("regForm");
//Submit Button
regForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const getLName = document.querySelector("#lName");
  const getFName = document.querySelector("#fName");
  const getMName = document.querySelector("#mName");
  const getSName = document.querySelector("#sName");
  const getEmpID = document.querySelector("#eIDNumber");
  const getPosition = document.querySelector("#jPosition");

  const getEmail = document.querySelector("#eMail");
  // const getDOB = document.querySelector("#bDay");
  const getGender = document.querySelector("#sGender");
  const getStatus = document.querySelector("#sStatus");
  const getLTeach = document.querySelector("#lTeach");
  const getSubject = document.querySelector("#posSubject");

  const parentTable = document.querySelector("#empInfo");
  const newEmpRow = document.createElement("tr");
  const newEmpID = document.createElement("th");
  const newPosition = document.createElement("th");
  const newFullName = document.createElement("th");
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
  getLName.value = "";
  getFName.value = "";
  getMName.value = "";
  getSName.value = "";
  getEmpID.value = "";
  getPosition.value = "";
  getEmail.value = "";
  // getDOB.value = "";
  getGender.value = "";
  getStatus.value = "";
  getLTeach.value = "";
  getSubject.value = "";

  //   console.log(getLName.value[0]);
  console.log("working!");
});

//Month's dates
const inputMonth = document.getElementById("mmInput");
const inputDay = document.getElementById("ddInput");
const generateDay = document.createElement("option");
const removeDay = document.querySelectorAll(".removeDay");

inputMonth.addEventListener("click", function () {
  const thirtyOne = ["JAN", "MAR", "MAY", "JUL", "AUG", "OCT", "DEC"];
  const thirty = ["APR", "JUN", "SEP", "NOV"];
  for (let t1 = 0; t1 < thirtyOne.length; t1++) {
    for (let t = 0; t < thirtyOne.length; t++) {
      for (let i = 0; i < removeDay.length; i++) {
        if (inputMonth.value === "FEB") {
          for (let f = 1; f < i + 1; f++) {
            removeDay[f].classList.add("febRemove");
          }
        } else if (inputMonth.value === thirty[t]) {
          removeDay[i].classList.add("thirtyRemove");
          removeDay[i].classList.remove("febRemove");
        } else if (inputMonth.value === thirtyOne[t1]) {
          removeDay[i].classList.remove("thirtyRemove");
          removeDay[i].classList.remove("febRemove");
        }
      }
    }
  }
});

//Job position
// const

//Object;
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
