# School Employee Registration
## Purpose
This project is a webapp where a person in charge (Most probably the Human Resource) of registering new employee's data and store in a database
## Features
- In this project, data is only stored in an **Object**
- (C)reate (R)ead (U)pdate (D)elete
  - Will **Create** and store the data of the registered Person in the database and in the data table
  - Can **Read** the data in the data table
  - Can **Update** data from database and data table using **Edit** button in the data table
  - Can **Delete** data from database and data table using **Edit** button in the data table
  - Additionally, there's a **Clear** Button whereas the user can clear the inputted data before the submission
- Employee ID is unique for each person is registered 
  - Format is YYMMDDNN
    - YY Last 2 digit of the year
    - MM Month
    - DD Day
    - NN Number where that person is registered on that day
  - Employee ID will change every day based on the current Date
- Properly converted some mis-capslocked letters or starting small letters to database and data table
  - Example: jUan deLa cruz **to** Juan Dela Cruz
- Some selection option will be disabled on a specific Selected option
  - Example: When HR registring a **Counselor** job position, **Assigned Level** and **Subject** will be disabled, unless the job position is **Teacher**
