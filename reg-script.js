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
  const getLName = document.getElementById("lName");
  const getFName = document.getElementById("fName");
  const getMName = document.getElementById("mName");
  const getSName = document.getElementById("sName");
  const getEmpID = document.getElementById("eIDNumber");
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
    _Name: {
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
    profileEditor(
      employeeID[newEmpID.textContent]._Name._fName,
      employeeID[newEmpID.textContent]._Name._mName,
      employeeID[newEmpID.textContent]._Name._lName,
      employeeID[newEmpID.textContent]._Name._sName,
      employeeID[newEmpID.textContent].DOB.Month,
      employeeID[newEmpID.textContent].DOB.Day,
      employeeID[newEmpID.textContent].DOB.Year,
      employeeID[newEmpID.textContent].Gender,
      employeeID[newEmpID.textContent].Status,
      employeeID[newEmpID.textContent].Position,
      employeeID[newEmpID.textContent].Assigned_Level,
      employeeID[newEmpID.textContent].Subject,
      employeeID[newEmpID.textContent].Email,
      newPosition,
      newFullName,
      newEmpID.textContent
    );

    /** 
    //parents
    const editor = document.getElementById("editDialouge");
    const editOverlay = document.getElementById("editOverlay");
    const editForm = document.createElement("form");
    const fsForDOB = document.createElement("fieldset");
    const fsForEmail = document.createElement("fieldset");
    const fsForEID = document.createElement("fieldset");
    const divForNames = document.createElement("div");
    const divForInfo = document.createElement("div");
    const divForJPosition = document.createElement("div");
    const divforEmailEID = document.createElement("div");
    const divForBtns = document.createElement("div");

    editor.classList.remove("hideme");
    editor.appendChild(editForm);
    editForm.id = "editForm";

    //inputs

    //Name
    const editLName = document.createElement("input");
    const editFName = document.createElement("input");
    const editMName = document.createElement("input");
    const editSName = document.createElement("select");
    const comma = document.createElement("span");

    //DOB
    const editMMInput = document.createElement("select");
    const editDDInput = document.createElement("select");
    const editYYInput = document.createElement("select");
    //Gender
    const editSGender = document.createElement("select");
    //Status
    const editSStatus = document.createElement("select");

    //Job Position
    const editJPosition = document.createElement("select");
    const editLTeach = document.createElement("select");
    const editPosSubject = document.createElement("select");

    //Email and EID
    const editEmail = document.createElement("input");
    const copyeIDNumber = document.createElement("input");
    //Buttons
    const cancelBtn = document.createElement("button");
    const saveBtn = document.createElement("button");

    //Names
    editForm.appendChild(divForNames);
    divForNames.appendChild(editLName);
    divForNames.appendChild(comma);
    comma.textContent = ",";
    divForNames.appendChild(editFName);
    divForNames.appendChild(editMName);
    divForNames.appendChild(editSName);
    editSName.innerHTML = `<option value=" " disabled selected>Suffix</option>
    <option value=" ">None</option>
    <option>Jr.</option>
    <option>Sr.</option>`;

    //Assigning Class and ID
    divForNames.classList.add("inputSeparator", "nameSeparator");
    editLName.id = "editLName";
    editFName.id = "editFName";
    editMName.id = "editMName";
    editSName.id = "editSName";
    editLName.classList.add("inputBox", "nameInput");
    editFName.classList.add("inputBox", "nameInput");
    editMName.classList.add("inputBox", "nameInput");
    editSName.classList.add("inputBox", "nameInput", "sName");
    editLName.setAttribute("placeholder", "Last Name");
    editFName.setAttribute("placeholder", "First Name");
    editMName.setAttribute("placeholder", "Middle Name");

    //Info
    editForm.appendChild(divForInfo);
    divForInfo.appendChild(fsForDOB);
    fsForDOB.innerHTML = "<legend>DOB</legend>";
    fsForDOB.appendChild(editMMInput);
    editMMInput.innerHTML = `<option value="" disabled selected>MM</option>
    <option>JAN</option>
    <option>FEB</option>
    <option>MAR</option>
    <option>APR</option>
    <option>MAY</option>
    <option>JUN</option>
    <option>JUL</option>
    <option>AUG</option>
    <option>SEP</option>
    <option>OCT</option>
    <option>NOV</option>
    <option>DEC</option>`;
    fsForDOB.appendChild(editDDInput);
    editDDInput.innerHTML = `
    <option value="" disabled selected>DD</option>`;
    fsForDOB.appendChild(editYYInput);
    editYYInput.innerHTML = `
    <option value="" disabled selected>YYYY</option>`;

    divForInfo.appendChild(editSGender);
    editSGender.innerHTML = `<option value="" disabled selected>Gender</option>
    <option>Male</option>
    <option>Female</option>
    <option>Others</option>`;
    divForInfo.appendChild(editSStatus);
    editSStatus.innerHTML = `<option value="" disabled selected>Status</option>
    <option>Married</option>
    <option>Single</option>`;

    //Assign ID and Classes
    editMMInput.id = "editMMInput";
    editDDInput.id = "editDDInput";
    editYYInput.id = "editYYInput";
    divForInfo.classList.add("inputSeparator", "nameSeparator");
    fsForDOB.classList.add("formFieldSet");
    editMMInput.classList.add("dobS", "mmInput");
    editDDInput.classList.add("dobS", "ddInput");
    editYYInput.classList.add("dobS", "yyInput");
    editSGender.classList.add("inputBox", "sGender");
    editSStatus.classList.add("inputBox", "sStatus");
    //Functions for Dates
    editMMInput.addEventListener("change", function () {
      assignDay(editMMInput, editDDInput);
    });
    yearInput(editYYInput);

    //JOB POSITION
    editForm.appendChild(divForJPosition);
    divForJPosition.appendChild(editJPosition);
    divForJPosition.appendChild(editLTeach);
    divForJPosition.appendChild(editPosSubject);
    //Options
    editJPosition.innerHTML = `<option value="" disabled selected>Position</option>
    <option>Teacher</option>
    <option>Councelor</option>
    <option>Security</option>
    <option>Maintenance</option>
    <option>IT</option>
    <option>Accounting</option>
    <option>Finance</option>
    <option>Human Resource Management</option>
    <option>School Nurse</option>
    <option>School Dentist</option>
    <option>Librarian</option>
    <option>Food Service Specialist</option>`;
    editLTeach.innerHTML = `<option value="" disabled selected>Assigned Level</option>
    <option>Not Applicable</option>
    <option>Grade 1</option>
    <option>Grade 2</option>
    <option>Grade 3</option>
    <option>Grade 4</option>
    <option>Grade 5</option>
    <option>Grade 6</option>
    <option>Grade 7</option>
    <option>Grade 8</option>
    <option>Grade 9</option>
    <option>Grade 10</option>
    <option>Grade 11</option>
    <option>Grade 12</option>`;
    editPosSubject.innerHTML = `<option value="" disabled selected>Subject</option>
    <option>Not Applicable</option>
    <option>Math</option>
    <option>Science</option>
    <option>Language</option>
    <option>TLE</option>
    <option>Filipino</option>
    <option>Music</option>
    <option>Arts</option>
    <option>Physical Education</option>
    <option>Health</option>
    <option>Computer</option>`;

    //Assign ID and Classes
    editJPosition.id = "editJPosition";
    editLTeach.id = "editLTeach";
    editPosSubject.id = "editPosSubject";

    divForJPosition.classList.add("inputSeparator", "nameSeparator");
    editJPosition.classList.add("inputBox", "jPosition");
    editLTeach.classList.add("inputBox", "lTeach");
    editPosSubject.classList.add("inputBox", "posSubject");

    //Email and EID
    editForm.appendChild(divforEmailEID);
    divforEmailEID.appendChild(fsForEmail);
    divforEmailEID.appendChild(fsForEID);
    fsForEmail.innerHTML = "<legend>Email</legend>";
    fsForEID.innerHTML = "<legend>Employee ID</legend>";
    fsForEmail.appendChild(editEmail);
    fsForEID.appendChild(copyeIDNumber);

    editEmail.setAttribute("type", "email");
    copyeIDNumber.setAttribute("type", "text");

    //Assign ID and CLasses
    divforEmailEID.classList.add("inputSeparator");
    fsForEmail.classList.add("formFieldSet");
    fsForEID.classList.add("formFieldSet");
    editEmail.classList.add("inputBox", "email_N_empID");
    copyeIDNumber.classList.add("inputBox", "email_N_empID");
    editEmail.id = "editEmail";
    copyeIDNumber.id = "copyeIDNumber";
    //Set attribute
    editEmail.setAttribute("type", "email");
    editEmail.setAttribute("placeholder", "example@company.com");
    copyeIDNumber.setAttribute("type", "text");
    copyeIDNumber.setAttribute("placeholder", "00000000");

    // Buttons
    editForm.appendChild(divForBtns);
    divForBtns.appendChild(cancelBtn);
    divForBtns.appendChild(saveBtn);
    cancelBtn.setAttribute("type", "button");
    saveBtn.setAttribute("type", "button");
    cancelBtn.textContent = "Cancel";
    saveBtn.textContent = "Submit";
    divForBtns.classList.add("inputSeparator");
    cancelBtn.classList.add("formBtn", "cButton");
    saveBtn.classList.add("formBtn", "subButton");
    cancelBtn.id = "cancelBtn";
    saveBtn.id = "saveBtn";

    //Get Values
    editFName.value = employeeID[newEmpID.textContent]._Name._fName;
    editLName.value = employeeID[newEmpID.textContent]._Name._lName;
    editMName.value = employeeID[newEmpID.textContent]._Name._mName;
    editSName.value = employeeID[newEmpID.textContent]._Name._sName;
    editMMInput.value = employeeID[newEmpID.textContent].DOB.Month;
    editDDInput.value = employeeID[newEmpID.textContent].DOB.Day;
    editYYInput.value = employeeID[newEmpID.textContent].DOB.Year;
    editSGender.value = employeeID[newEmpID.textContent].Gender;
    editSStatus.value = employeeID[newEmpID.textContent].Status;
    editJPosition.value = employeeID[newEmpID.textContent].Position;
    editLTeach.value = employeeID[newEmpID.textContent].Assigned_Level;
    editPosSubject.value = employeeID[newEmpID.textContent].Subject;
    editEmail.value = employeeID[newEmpID.textContent].Email;
    copyeIDNumber.value = newEmpID.textContent;

    //Buttons

    const closeEditor = function () {
      editForm.remove();
      editor.classList.add("hideme");
    };
    //Save button
    saveBtn.addEventListener("click", function () {
      //Save and Exit
      employeeID[newEmpID.textContent]._Name._fName = editFName.value;
      employeeID[newEmpID.textContent]._Name._lName = editLName.value;
      employeeID[newEmpID.textContent]._Name._mName = editMName.value;
      employeeID[newEmpID.textContent]._Name._sName = editSName.value;
      employeeID[newEmpID.textContent].DOB.Month = editMMInput.value;
      employeeID[newEmpID.textContent].DOB.Day = editDDInput.value;
      employeeID[newEmpID.textContent].DOB.Year = editYYInput.value;
      employeeID[newEmpID.textContent].Gender = editSGender.value;
      employeeID[newEmpID.textContent].Status = editSStatus.value;
      employeeID[newEmpID.textContent].Position = editJPosition.value;
      employeeID[newEmpID.textContent].Assigned_Level = editLTeach.value;
      employeeID[newEmpID.textContent].Subject = editPosSubject.value;
      employeeID[newEmpID.textContent].Email = editEmail.value;
      newEmpID.textContent = copyeIDNumber.value;
      closeEditor();
    });

    //cancel button
    cancelBtn.addEventListener("click", function () {
      closeEditor();
    });

    //click overlay to exit
    editOverlay.addEventListener("click", function () {
      closeEditor();
    });

    console.log(`working edit`, employeeID[newEmpID.textContent]);

    //Generate Editor
    // const
  */
  });
});

//Month's dates

//
const inputMonth = document.getElementById("mmInput");
const inputDay = document.getElementById("ddInput");
const inputYear = document.getElementById("yyInput");
const thirtyOne = ["JAN", "MAR", "MAY", "JUL", "AUG", "OCT", "DEC"];
const thirty = ["APR", "JUN", "SEP", "NOV"];

//We use loop to call all the element with the same class name
//for example, Month/day/year
//they have 2 elements each input
//one is for registration
//and one is for the editor
//Change number of dates in a certain Months
const assignDay = function (mm, dd) {
  //removing Previous days in order to prevent more dates
  const removePrevDays = function () {
    for (let xDays = 31; xDays >= 0; xDays--) {
      dd.innerHTML -= `<option>${xDays}</option>`;
    }
  };
  //Adding number dates on selected Month
  if (mm.value === "FEB") {
    removePrevDays();
    for (let febDay = 1; febDay <= 29; febDay++) {
      document.getElementsByTagName("option");
      dd.innerHTML += `<option>${febDay}</option>`;
    }
  }

  for (let monthsWith31 = 0; monthsWith31 <= thirtyOne.length; monthsWith31++) {
    if (mm.value === thirtyOne[monthsWith31]) {
      removePrevDays();

      for (let m31 = 1; m31 <= 31; m31++) {
        dd.innerHTML += `<option>${m31}</option>`;
      }
    }
  }

  for (let monthsWith30 = 0; monthsWith30 <= thirty.length; monthsWith30++) {
    if (mm.value === thirty[monthsWith30]) {
      removePrevDays();
      for (let m30 = 1; m30 <= 30; m30++) {
        dd.innerHTML += `<option>${m30}</option>`;
      }
    }
  }
};

//We use "Change" for Select Tag event listener
inputMonth.addEventListener("change", function () {
  assignDay(inputMonth, inputDay);
});

//Year
const yearInput = function (yy) {
  for (let yearBorn = currentYear - 80; yearBorn <= currentYear; yearBorn++) {
    yy.innerHTML += `<option>${yearBorn}</option>`;
  }
};

yearInput(inputYear);

//Job position
const jPosition = document.getElementById("jPosition");
const getTeachLevel = document.getElementById("lTeach");
const f_getSubject = document.getElementById("posSubject");

jPosition.addEventListener("change", function () {
  if (jPosition.value != "Teacher") {
    getTeachLevel.value = "Not Applicable";
    f_getSubject.value = "Not Applicable";
    getTeachLevel.disabled = true;
    f_getSubject.disabled = true;
    console.log("Not Teacher");
  } else {
    getTeachLevel.disabled = false;
    f_getSubject.disabled = false;
    console.log("This is a taecher");
  }
});

//Object
//Storing Data

const schoolEmployees = {
  employeeID: {},
};

const { employeeID } = schoolEmployees;

const profileEditor = function (
  f_fName,
  f_mName,
  f_lName,
  f_sName,
  f_mm,
  f_dd,
  f_yy,
  f_Gender,
  f_Status,
  f_Position,
  f_AssignLevel,
  f_Subject,
  f_Email,
  dir_pos,
  dir_FullName,
  f_EID
) {
  //parents
  const editor = document.getElementById("editDialouge");
  const editOverlay = document.getElementById("editOverlay");
  const editForm = document.createElement("form");
  const fsForDOB = document.createElement("fieldset");
  const fsForEmail = document.createElement("fieldset");
  const fsForEID = document.createElement("fieldset");
  const divForNames = document.createElement("div");
  const divForInfo = document.createElement("div");
  const divForJPosition = document.createElement("div");
  const divforEmailEID = document.createElement("div");
  const divForBtns = document.createElement("div");

  editor.classList.remove("hideme");
  editor.appendChild(editForm);
  editForm.id = "editForm";

  //inputs

  //Name
  const editLName = document.createElement("input");
  const editFName = document.createElement("input");
  const editMName = document.createElement("input");
  const editSName = document.createElement("select");
  const comma = document.createElement("span");

  //DOB
  const editMMInput = document.createElement("select");
  const editDDInput = document.createElement("select");
  const editYYInput = document.createElement("select");
  //Gender
  const editSGender = document.createElement("select");
  //Status
  const editSStatus = document.createElement("select");

  //Job Position
  const editJPosition = document.createElement("select");
  const editLTeach = document.createElement("select");
  const editPosSubject = document.createElement("select");

  //Email and EID
  const editEmail = document.createElement("input");
  const copyeIDNumber = document.createElement("input");
  //Buttons
  const cancelBtn = document.createElement("button");
  const saveBtn = document.createElement("button");

  //Names
  editForm.appendChild(divForNames);
  divForNames.appendChild(editLName);
  divForNames.appendChild(comma);
  comma.textContent = ",";
  divForNames.appendChild(editFName);
  divForNames.appendChild(editMName);
  divForNames.appendChild(editSName);
  editSName.innerHTML = `<option value=" " disabled selected>Suffix</option>
    <option value=" ">None</option>
    <option>Jr.</option>
    <option>Sr.</option>`;

  //Assigning Class and ID
  divForNames.classList.add("inputSeparator", "nameSeparator");
  editLName.id = "editLName";
  editFName.id = "editFName";
  editMName.id = "editMName";
  editSName.id = "editSName";
  editLName.classList.add("inputBox", "nameInput");
  editFName.classList.add("inputBox", "nameInput");
  editMName.classList.add("inputBox", "nameInput");
  editSName.classList.add("inputBox", "nameInput", "sName");
  editLName.setAttribute("placeholder", "Last Name");
  editFName.setAttribute("placeholder", "First Name");
  editMName.setAttribute("placeholder", "Middle Name");

  //Info
  editForm.appendChild(divForInfo);
  divForInfo.appendChild(fsForDOB);
  fsForDOB.innerHTML = "<legend>DOB</legend>";
  fsForDOB.appendChild(editMMInput);
  editMMInput.innerHTML = `<option value="" disabled selected>MM</option>
    <option>JAN</option>
    <option>FEB</option>
    <option>MAR</option>
    <option>APR</option>
    <option>MAY</option>
    <option>JUN</option>
    <option>JUL</option>
    <option>AUG</option>
    <option>SEP</option>
    <option>OCT</option>
    <option>NOV</option>
    <option>DEC</option>`;
  fsForDOB.appendChild(editDDInput);
  editDDInput.innerHTML = `
    <option value="" disabled selected>DD</option>`;
  fsForDOB.appendChild(editYYInput);
  editYYInput.innerHTML = `
    <option value="" disabled selected>YYYY</option>`;

  divForInfo.appendChild(editSGender);
  editSGender.innerHTML = `<option value="" disabled selected>Gender</option>
    <option>Male</option>
    <option>Female</option>
    <option>Others</option>`;
  divForInfo.appendChild(editSStatus);
  editSStatus.innerHTML = `<option value="" disabled selected>Status</option>
    <option>Married</option>
    <option>Single</option>`;

  //Assign ID and Classes
  editMMInput.id = "editMMInput";
  editDDInput.id = "editDDInput";
  editYYInput.id = "editYYInput";
  divForInfo.classList.add("inputSeparator", "nameSeparator");
  fsForDOB.classList.add("formFieldSet");
  editMMInput.classList.add("dobS", "mmInput");
  editDDInput.classList.add("dobS", "ddInput");
  editYYInput.classList.add("dobS", "yyInput");
  editSGender.classList.add("inputBox", "sGender");
  editSStatus.classList.add("inputBox", "sStatus");
  //Functions for Dates
  editMMInput.addEventListener("change", function () {
    assignDay(editMMInput, editDDInput);
  });
  yearInput(editYYInput);

  //JOB POSITION
  editForm.appendChild(divForJPosition);
  divForJPosition.appendChild(editJPosition);
  divForJPosition.appendChild(editLTeach);
  divForJPosition.appendChild(editPosSubject);
  //Options
  editJPosition.innerHTML = `<option value="" disabled selected>Position</option>
    <option>Teacher</option>
    <option>Councelor</option>
    <option>Security</option>
    <option>Maintenance</option>
    <option>IT</option>
    <option>Accounting</option>
    <option>Finance</option>
    <option>Human Resource Management</option>
    <option>School Nurse</option>
    <option>School Dentist</option>
    <option>Librarian</option>
    <option>Food Service Specialist</option>`;
  editLTeach.innerHTML = `<option value="" disabled selected>Assigned Level</option>
    <option>Not Applicable</option>
    <option>Grade 1</option>
    <option>Grade 2</option>
    <option>Grade 3</option>
    <option>Grade 4</option>
    <option>Grade 5</option>
    <option>Grade 6</option>
    <option>Grade 7</option>
    <option>Grade 8</option>
    <option>Grade 9</option>
    <option>Grade 10</option>
    <option>Grade 11</option>
    <option>Grade 12</option>`;
  editPosSubject.innerHTML = `<option value="" disabled selected>Subject</option>
    <option>Not Applicable</option>
    <option>Math</option>
    <option>Science</option>
    <option>Language</option>
    <option>TLE</option>
    <option>Filipino</option>
    <option>Music</option>
    <option>Arts</option>
    <option>Physical Education</option>
    <option>Health</option>
    <option>Computer</option>`;

  //Assign ID and Classes
  editJPosition.id = "editJPosition";
  editLTeach.id = "editLTeach";
  editPosSubject.id = "editPosSubject";

  divForJPosition.classList.add("inputSeparator", "nameSeparator");
  editJPosition.classList.add("inputBox", "jPosition");
  editLTeach.classList.add("inputBox", "lTeach");
  editPosSubject.classList.add("inputBox", "posSubject");

  //Email and EID
  editForm.appendChild(divforEmailEID);
  divforEmailEID.appendChild(fsForEmail);
  divforEmailEID.appendChild(fsForEID);
  fsForEmail.innerHTML = "<legend>Email</legend>";
  fsForEID.innerHTML = "<legend>Employee ID</legend>";
  fsForEmail.appendChild(editEmail);
  fsForEID.appendChild(copyeIDNumber);

  editEmail.setAttribute("type", "email");
  copyeIDNumber.setAttribute("type", "text");

  //Assign ID and CLasses
  divforEmailEID.classList.add("inputSeparator");
  fsForEmail.classList.add("formFieldSet");
  fsForEID.classList.add("formFieldSet");
  editEmail.classList.add("inputBox", "email_N_empID");
  copyeIDNumber.classList.add("inputBox", "email_N_empID");
  editEmail.id = "editEmail";
  copyeIDNumber.id = "copyeIDNumber";
  //Set attribute
  editEmail.setAttribute("type", "email");
  editEmail.setAttribute("placeholder", "example@company.com");
  copyeIDNumber.setAttribute("type", "text");
  copyeIDNumber.setAttribute("placeholder", "00000000");

  // Buttons
  editForm.appendChild(divForBtns);
  divForBtns.appendChild(cancelBtn);
  divForBtns.appendChild(saveBtn);
  cancelBtn.setAttribute("type", "button");
  saveBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";
  saveBtn.textContent = "Submit";
  divForBtns.classList.add("inputSeparator");
  cancelBtn.classList.add("formBtn", "cButton");
  saveBtn.classList.add("formBtn", "subButton");
  cancelBtn.id = "cancelBtn";
  saveBtn.id = "saveBtn";

  //Get Values

  editFName.value = f_fName;
  editLName.value = f_lName;
  editMName.value = f_mName;
  editSName.value = f_sName;
  editMMInput.value = f_mm;
  editDDInput.value = f_dd;
  editYYInput.value = f_yy;
  editSGender.value = f_Gender;
  editSStatus.value = f_Status;
  editJPosition.value = f_Position;
  editLTeach.value = f_AssignLevel;
  editPosSubject.value = f_Subject;
  editEmail.value = f_Email;
  copyeIDNumber.value = f_EID;

  //Buttons

  //close editor's
  const closeEditor = function () {
    editForm.remove();
    editor.classList.add("hideme");
  };
  //Save button
  saveBtn.addEventListener("click", function () {
    //Save and Exit
    employeeID[copyeIDNumber.value]._Name._fName = editFName.value;
    employeeID[copyeIDNumber.value]._Name._mName = editMName.value;
    employeeID[copyeIDNumber.value]._Name._lName = editLName.value;
    employeeID[copyeIDNumber.value]._Name._sName = editSName.value;
    employeeID[copyeIDNumber.value].DOB.Month = editMMInput.value;
    employeeID[copyeIDNumber.value].DOB.Day = editDDInput.value;
    employeeID[copyeIDNumber.value].DOB.Year = editYYInput.value;
    employeeID[copyeIDNumber.value].Gender = editSGender.value;
    employeeID[copyeIDNumber.value].Status = editSStatus.value;
    employeeID[copyeIDNumber.value].Position = editJPosition.value;
    employeeID[copyeIDNumber.value].Assigned_Level = editLTeach.value;
    employeeID[copyeIDNumber.value].Subject = editPosSubject.value;
    employeeID[copyeIDNumber.value].Email = editEmail.value;
    dir_pos.textContent = editJPosition.value;
    dir_FullName.textContent = editFName.value;
    // f_EID = copyeIDNumber.value;
    closeEditor();
  });

  //cancel button
  cancelBtn.addEventListener("click", function () {
    closeEditor();
  });

  //click overlay to exit
  editOverlay.addEventListener("click", function () {
    closeEditor();
  });

  // console.log(`working edit`, employeeID[newEmpID.textContent]);

  //Generate Editor
  // const
};
