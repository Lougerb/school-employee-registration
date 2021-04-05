"use strict";

//ID number Generator
//TO BE FIX
const currentWholeDate = new Date();
const currentYear = currentWholeDate.getFullYear();
// // console.log(currentYear);

// let batchNum = 0;
let empNum = 1;

// //Employee ID
// const eIDNumber = document.getElementById("eIDNumber");

//Getting Month's Number
//We added +1 because January starts with 0
const currentMonth = currentWholeDate.getMonth() + 1;
const currentDate = currentWholeDate.getDate();
const leadingZero = "0";
//Make single Digit Month to 2 digit with leading Zero
const _twoDigitMonth = function () {
  return currentMonth < 10 ? leadingZero + currentMonth : currentMonth;
};
//Make Single digit date to 2 digit with leading Zero
const _twoDigitDate = function () {
  return currentDate < 10 ? leadingZero + currentDate : currentDate;
};
const _twoDigitempNum = function () {
  return empNum < 10 ? leadingZero + empNum : empNum;
};
//Generate ID Number
eIDNumber.value =
  String(currentYear).slice(2) +
  _twoDigitMonth() +
  _twoDigitDate() +
  _twoDigitempNum();

//
const regSubBtn = document.getElementById("submitButton");
regSubBtn.addEventListener("click", function () {
  empNum++;
});

/////////////////////////////////////////////////////////////////////

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
  const getDobMM = document.getElementById("mmInput");
  const getDobDD = document.getElementById("ddInput");
  const getDobYY = document.getElementById("yyInput");
  const getGender = document.getElementById("sGender");

  const getEmail = document.getElementById("eMail");
  const getStatus = document.getElementById("sStatus");
  const getLTeach = document.getElementById("lTeach");
  const getSubject = document.getElementById("posSubject");

  const parentTable = document.querySelector("#empInfo");
  const newEmpRow = document.createElement("tr");
  const newEmpID = document.createElement("th");
  const newPosition = document.createElement("th");
  const newFullName = document.createElement("th");
  const newActionBtn = document.createElement("th"); //Must be Button
  const newEditBtn = document.createElement("button");

  parentTable.appendChild(newEmpRow);
  newEmpRow.appendChild(newEmpID);
  newEmpRow.appendChild(newFullName);
  newEmpRow.appendChild(newPosition);
  newEmpRow.appendChild(newActionBtn);
  newEmpRow.classList.add("dataRow");

  //Make name capitalize

  const capMyName = function (getName) {
    const splitMyName = getName.split(" ");
    const storeArrName = [];

    for (let letsCap of splitMyName) {
      storeArrName.push(
        letsCap[0].toUpperCase() + letsCap.slice(1).toLowerCase()
      );
    }
    return storeArrName.join(" ");
  };
  const fName = capMyName(getFName.value);
  const mName = capMyName(getMName.value);
  const lName = capMyName(getLName.value);
  const sName = getSName.value; //does not need capitalization due to Selection is given

  newPosition.textContent = jPosition.value;
  newFullName.textContent = `${fName} ${mName}. ${lName} ${sName}`;
  newEmpID.textContent = getEmpID.value;
  newActionBtn.appendChild(newEditBtn);

  newEditBtn.classList.add("editBtn");
  newEditBtn.textContent = "Edit";
  /////////////////////////////////////////////////////////////////////////
  //Sending data to Object

  //Formula
  //employeeID[`newEmpID.textContent`]={Name: {_fName:,_mName: ,_lName: ,_sName: ,},DOB:{Month:,Day:,Year:,},Gender:,Status: ,Position:,Assigned_Level: ,Subject: ,Email:,}
  employeeID[newEmpID.textContent] = {
    Name: {
      _fName: `${fName}`,
      _mName: `${mName}`,
      _lName: `${lName}`,
      _sName: `${sName}`,
    },
    DOB: {
      Month: `${getDobMM.value}`,
      Day: `${getDobDD.value}`,
      Year: `${getDobYY.value}`,
    },
    Gender: `${getGender.value}`,
    Status: `${getStatus.value}`,
    Position: `${jPosition.value}`,
    Assigned_Level: `${getLTeach.value}`,
    Subject: `${getSubject.value}`,
    Email: `${getEmail.value}`,
  };
  /////////////////////////////////////////////////////////////////////////
  //clearing after submitting
  getLName.value = "";
  getFName.value = "";
  getMName.value = "";
  getSName.value = "";
  jPosition.value = "";
  getEmail.value = "";
  getGender.value = "";
  getStatus.value = "";
  getLTeach.value = "";
  getSubject.value = "";

  /////////////////////////////////////////////////////////////////////////
  eIDNumber.value =
    String(currentYear).slice(2) +
    _twoDigitMonth() +
    _twoDigitDate() +
    _twoDigitempNum();
  /////////////////////////////////////////////////////////////////////////

  //EDIT BUTTON
  newEditBtn.addEventListener("click", function () {
    console.log(`working edit`, employeeID[newEmpID.textContent]);
  });
});

//Month's dates

const inputMonth = document.querySelector(".mmInput");
const inputDay = document.getElementById("ddInput");
const inputYear = document.getElementById("yyInput");
const thirtyOne = ["JAN", "MAR", "MAY", "JUL", "AUG", "OCT", "DEC"];
const thirty = ["APR", "JUN", "SEP", "NOV"];
// const yearToday = date

//We use "Change" for Select Tag event listener
//Change number of dates in a certain Months
inputMonth.addEventListener("change", function () {
  //removing Previous days in order to prevent more dates
  const removePrevDays = function () {
    for (let xDays = 31; xDays >= 0; xDays--) {
      inputDay.innerHTML -= `<option>${xDays}</option>`;
    }
  };
  //Adding number dates on selected Month
  if (inputMonth.value === "FEB") {
    removePrevDays();
    for (let febDay = 1; febDay <= 29; febDay++) {
      document.getElementsByTagName("option");
      inputDay.innerHTML += `<option>${febDay}</option>`;
    }
  }

  for (let monthsWith31 = 0; monthsWith31 <= thirtyOne.length; monthsWith31++) {
    if (inputMonth.value === thirtyOne[monthsWith31]) {
      removePrevDays();

      for (let m31 = 1; m31 <= 31; m31++) {
        inputDay.innerHTML += `<option>${m31}</option>`;
      }
    }
  }

  for (let monthsWith30 = 0; monthsWith30 <= thirty.length; monthsWith30++) {
    if (inputMonth.value === thirty[monthsWith30]) {
      removePrevDays();
      for (let m30 = 1; m30 <= 30; m30++) {
        inputDay.innerHTML += `<option>${m30}</option>`;
      }
    }
  }
});

//Year
for (let yearBorn = currentYear - 100; yearBorn <= currentYear; yearBorn++) {
  inputYear.innerHTML += `<option>${yearBorn}</option>`;
}

//Job position
const jPosition = document.getElementById("jPosition");
const getTeachLevel = document.getElementById("lTeach");
const getSubject = document.getElementById("posSubject");

jPosition.addEventListener("change", function () {
  if (jPosition.value != "Teacher") {
    getTeachLevel.value = "Not Applicable";
    getSubject.value = "Not Applicable";
    getTeachLevel.disabled = true;
    getSubject.disabled = true;
    console.log("Not Teacher");
  } else {
    getTeachLevel.disabled = false;
    getSubject.disabled = false;
    console.log("This is a taecher");
  }
});

//Object
//Storing Data

const schoolEmployees = {
  employeeID: {},
};

const { employeeID } = schoolEmployees;
