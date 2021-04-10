"use strict";

//get main form Element
const regForm = document.getElementById("regForm");

//Month's dates----------------------------------------------
const currentWholeDate = new Date(),
  currentYear = currentWholeDate.getFullYear(),
  inputMonth = document.getElementById("mmInput"),
  inputDay = document.getElementById("ddInput"),
  inputYear = document.getElementById("yyInput"),
  thirtyOne = ["JAN", "MAR", "MAY", "JUL", "AUG", "OCT", "DEC"],
  thirty = ["APR", "JUN", "SEP", "NOV"];

//We use loop to call all the element with the same class name
//for example, Month/day/year
//they have 2 elements each input
//one is for registration
//and one is for the editor
//Change number of dates in a certain Months

//removing Previous days in order to prevent more dates
const removePrevDays = function (rd) {
  // rd.innerHTML = `<option>DD</option>`;
  for (let xDays = 31; xDays >= 0; xDays--) {
    rd.innerHTML -= `<option>${xDays}</option>`;
  }
};

//Function to update Number of days in selec input when Selecting a certain month
const assignDay = function (mm, dd) {
  // loop for Febuary's days
  if (mm.value === "FEB") {
    removePrevDays(dd);
    for (let febDay = 1; febDay <= 29; febDay++) {
      document.getElementsByTagName("option");
      dd.innerHTML += `<option>${febDay}</option>`;
    }
  }
  // loop for Months with 31 days
  for (let monthsWith31 = 0; monthsWith31 <= thirtyOne.length; monthsWith31++) {
    if (mm.value === thirtyOne[monthsWith31]) {
      removePrevDays(dd);

      for (let m31 = 1; m31 <= 31; m31++) {
        dd.innerHTML += `<option>${m31}</option>`;
      }
    }
  }
  // loop for Months with 30 days
  for (let monthsWith30 = 0; monthsWith30 <= thirty.length; monthsWith30++) {
    if (mm.value === thirty[monthsWith30]) {
      removePrevDays(dd);
      for (let m30 = 1; m30 <= 30; m30++) {
        dd.innerHTML += `<option>${m30}</option>`;
      }
    }
  }
};

//When input month is change on selected month
//day selection will load
inputMonth.addEventListener("change", function () {
  assignDay(inputMonth, inputDay);
});

//Year
//Function to update Year selection when Current year is change
const yearInput = function (yy) {
  for (let yearBorn = currentYear - 80; yearBorn <= currentYear; yearBorn++) {
    yy.innerHTML += `<option>${yearBorn}</option>`;
  }
};
yearInput(inputYear);

//Make name capitalize
const capMyName = function (getName) {
  const storeArrName = [];
  const trimName = getName.trim();
  const splitMyName = trimName.split(" ");

  for (let letsCap of splitMyName) {
    storeArrName.push(
      letsCap[0].toUpperCase() + letsCap.slice(1).toLowerCase()
    );
  }

  return storeArrName.join(" ");
};

//Disable Option if not teacher
const jPosition = document.getElementById("jPosition");
const getLTeach = document.getElementById("lTeach");
const getSubject = document.getElementById("posSubject");

//Will disable Assigned Level and Subject select if Job Position is not teacher
const ifTeacher = function (jpos, tLevel, tSubject) {
  if (jpos.value != "" && jpos.value != "Teacher") {
    tLevel.value = "NotApplicable";
    tSubject.value = "NotApplicable";
    tLevel.disabled = true;
    tSubject.disabled = true;
  } else {
    tLevel.value = "";
    tSubject.value = "";
    tLevel.disabled = false;
    tSubject.disabled = false;
  }
};
//Calling function on load
ifTeacher(jPosition, getLTeach, getSubject);

//Function when Position is change to teacher or not
jPosition.addEventListener("change", function () {
  ifTeacher(jPosition, getLTeach, getSubject);
});

// //Employee ID
//format: YYMMDDEN
// YY= Year, MM=Month, DD=Day, EN=Employee Number

//Getting Month's Number
//We added +1 because January starts with 0
const currentMonth = currentWholeDate.getMonth() + 1,
  currentDate = currentWholeDate.getDate(),
  leadingZero = "0";
//Make single Digit Month to 2 digit with leading Zero
const _twoDigitMonth = function () {
  return currentMonth < 10 ? leadingZero + currentMonth : currentMonth;
};
//Make Single digit date to 2 digit with leading Zero
const _twoDigitDate = function () {
  return currentDate < 10 ? leadingZero + currentDate : currentDate;
};

//Function to Generate ID Number
let empNum = 1;
const _twoDigitempNum = function () {
  return empNum < 10 ? leadingZero + empNum : empNum;
};

const generateEID = function () {
  eIDNumber.value =
    String(currentYear).slice(2) +
    _twoDigitMonth() +
    _twoDigitDate() +
    _twoDigitempNum();
};

//function to call to display Employee ID onload
generateEID();

//
//Event to incriment employee number
const regSubBtn = document.getElementById("submitButton");
regSubBtn.addEventListener("click", function () {
  empNum++;
});

//addEventListener must listen to the Form INSTEAD of the Submit Button of the form
//Submit Button
regForm.addEventListener("submit", function (e) {
  //To prevent page refresh when submit is clicked
  e.preventDefault();
  //Get Elements
  const getLName = document.getElementById("lName"),
    getFName = document.getElementById("fName"),
    getMName = document.getElementById("mName"),
    getSName = document.getElementById("sName"),
    getEmpID = document.getElementById("eIDNumber"),
    getDobMM = document.getElementById("mmInput"),
    getDobDD = document.getElementById("ddInput"),
    getDobYY = document.getElementById("yyInput"),
    getGender = document.getElementById("sGender"),
    getEmail = document.getElementById("eMail"),
    getStatus = document.getElementById("sStatus"),
    parentTable = document.getElementById("empInfo");

  //Generating Element
  const newEmpRow = document.createElement("tr"),
    newEmpID = document.createElement("th"),
    newPosition = document.createElement("th"),
    newFullName = document.createElement("th"),
    newActionBtn = document.createElement("th"), //Must be Button
    newEditBtn = document.createElement("button");
  //Organizing Elements
  parentTable.appendChild(newEmpRow);
  newEmpRow.appendChild(newEmpID);
  newEmpRow.appendChild(newFullName);
  newEmpRow.appendChild(newPosition);
  newEmpRow.appendChild(newActionBtn);
  newEmpRow.classList.add("dataRow");

  //Capitalizing Names
  const fName = capMyName(getFName.value),
    mName = capMyName(getMName.value),
    lName = capMyName(getLName.value),
    sName = getSName.value; //does not need capitalization due to Selection is given

  newPosition.textContent = jPosition.value;
  newFullName.textContent = `${fName} ${mName[0]}. ${lName} ${sName}`;
  newEmpID.textContent = getEmpID.value;
  newActionBtn.appendChild(newEditBtn);

  newEditBtn.classList.add("editBtn");
  newEditBtn.textContent = "Edit";

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

  //function to get the current Employee ID before submitting
  generateEID();

  //EDIT EVENT BUTTON
  newEditBtn.addEventListener("click", function () {
    getLTeach.disabled = false;
    getSubject.disabled = false;

    // assignDay(getDobMM, getDobDD);
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
  });

  //clearing form after submitting
  getLName.value = "";
  getFName.value = "";
  getMName.value = "";
  getSName.value = "";
  getDobMM.value = "";
  //function to remove days after submitting
  removePrevDays(getDobDD);
  getDobDD.innerHTML = ` <option value="" disabled selected>DD</option>`;
  getDobYY.value = "YYYY";
  jPosition.value = "";
  getLTeach.value = "";
  getLTeach.disabled = false;
  getSubject.value = "";
  getSubject.disabled = false;
  getEmail.value = "";
  getGender.value = "";
  getStatus.value = "";
});

//Object
//Storing Data
const schoolEmployees = {
  employeeID: {},
};
//Variable where we can call to store Data
const { employeeID } = schoolEmployees;

//Editor Function
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
  //Variables to generate elemetns
  const editor = document.getElementById("editDialouge"),
    editOverlay = document.getElementById("editOverlay"),
    editForm = document.createElement("form"),
    fsForDOB = document.createElement("fieldset"),
    fsForEmail = document.createElement("fieldset"),
    fsForEID = document.createElement("fieldset"),
    divForNames = document.createElement("div"),
    divForInfo = document.createElement("div"),
    divForJPosition = document.createElement("div"),
    divforEmailEID = document.createElement("div"),
    divForBtns = document.createElement("div");

  //To show editor's overlay and frame
  editor.classList.remove("hideme");
  editor.appendChild(editForm);
  editForm.id = "editForm";

  //Generate Inputs

  //Name
  const editLName = document.createElement("input"),
    editFName = document.createElement("input"),
    editMName = document.createElement("input"),
    editSName = document.createElement("select"),
    comma = document.createElement("span");

  //DOB
  const editMMInput = document.createElement("select"),
    editDDInput = document.createElement("select"),
    editYYInput = document.createElement("select");
  //Gender
  const editSGender = document.createElement("select");
  //Status
  const editSStatus = document.createElement("select");
  //Job Position
  const editJPosition = document.createElement("select"),
    editLTeach = document.createElement("select"),
    editPosSubject = document.createElement("select");

  //Email and EID
  const editEmail = document.createElement("input"),
    copyeIDNumber = document.createElement("input");
  //Buttons
  const cancelBtn = document.createElement("button"),
    saveBtn = document.createElement("button");

  //Names
  editForm.appendChild(divForNames);
  divForNames.appendChild(editLName);
  divForNames.appendChild(comma);
  comma.textContent = ",";
  divForNames.appendChild(editFName);
  divForNames.appendChild(editMName);
  divForNames.appendChild(editSName);
  editSName.innerHTML = `<option value="" disabled selected>Suffix</option>
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
  // window.addEventListener("load", function () {
  assignDay(editMMInput, editDDInput);
  // });
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
  editLTeach.innerHTML = `<option disabled selected value="">Assigned Level</option>
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
  <option>Grade 12</option>
  <option value="NotApplicable" disabled>Not Applicable</option>`;
  editPosSubject.innerHTML = `<option selected disabled value="">Subject</option>
  <option>Math</option>
  <option>Science</option>
  <option>Language</option>
  <option>TLE</option>
  <option>Filipino</option>
  <option>Music</option>
  <option>Arts</option>
  <option>Physical Education</option>
  <option>Health</option>
  <option>Computer</option>
  <option value="NotApplicable" disabled>Not Applicable</option>`;

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
  saveBtn.textContent = "Save & Exit";
  divForBtns.classList.add("inputSeparator");
  cancelBtn.classList.add("formBtn", "cButton");
  saveBtn.classList.add("formBtn", "subButton");
  cancelBtn.id = "cancelBtn";
  saveBtn.id = "saveBtn";

  editJPosition.addEventListener("change", function () {
    ifTeacher(editJPosition, editLTeach, editPosSubject);
  });

  //Get Values
  assignDay(editMMInput, editDDInput);
  ifTeacher(editJPosition, editLTeach, editPosSubject);

  editFName.value = f_fName;
  editLName.value = f_lName;
  editMName.value = f_mName;
  editSName.value = f_sName;
  editMMInput.value = f_mm;
  //Function to make Day input work after Selected month appear
  assignDay(editMMInput, editDDInput);
  editDDInput.value = f_dd;
  editYYInput.value = f_yy;
  editSGender.value = f_Gender;
  editSStatus.value = f_Status;
  editJPosition.value = f_Position;
  //Function to make Assigned Level and Subject work after Job Position shows up
  ifTeacher(editJPosition, editLTeach, editPosSubject);
  editLTeach.value = f_AssignLevel;
  editPosSubject.value = f_Subject;
  editEmail.value = f_Email;
  copyeIDNumber.value = f_EID;
  copyeIDNumber.readOnly;
  copyeIDNumber.disabled = true;

  //Buttons
  //close editor's
  const closeEditor = function () {
    editForm.remove();
    editor.classList.add("hideme");
  };
  //Save button
  saveBtn.addEventListener("click", function () {
    //capitalize name
    const capFname = capMyName(editFName.value);
    const capMname = capMyName(editMName.value);
    const capLname = capMyName(editLName.value);
    const dir_sName = editSName.value;

    //Save and Exit
    employeeID[copyeIDNumber.value]._Name._fName = capFname;
    employeeID[copyeIDNumber.value]._Name._mName = capMname;
    employeeID[copyeIDNumber.value]._Name._lName = capLname;
    employeeID[copyeIDNumber.value]._Name._sName = dir_sName;
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
    dir_FullName.textContent = `${capLname}, ${capFname} ${capMname[0]}. ${dir_sName}`;

    assignDay(editMMInput, editDDInput);
    ifTeacher(editJPosition, editLTeach, editPosSubject);
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
};
