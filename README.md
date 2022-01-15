# Dr.Diary 

<p align="center">
  <img width="200" height="200" src="public/images/journal.png">
</p>

## Objective 
Build a full-stack CRUD application using Node/Express and MongoDB from the ground up. 

## Purpose of Application
Medications are currently prescribed on a trial and error basis to patients. Depending on the type of medication and its half-life it can potentially take years to identify the proper med and dosage for that patient. Dr.Diary allows patients to track their prescriptions and make daily journals (free writing) and notes (specified by Dr) that their Dr has access to - providing LIVE data for the health care professional. The more relevant data means a quicker identification process! 

**View my Trello board [here](https://trello.com/b/X8p4Mr0t/drdiary)!**

## Initial Designs
- Wire frame of the initial design -> during development I realized that the below design would not work effectively for the purpose of the application. The patient side uses RESTful routing while the Dr. side does not. 
<br><br>
![Wire Frame](/public/images/WireFrame.png)
<br><br>
- ERD showing the relationship between my data.
<br><br>
![ERD](/public/images/ERD.jpg)

## Models
<br>

- The Dr. Model -> patients are referenced within the doctor schema in order to populate the updated patient info on the Dr account side. 
<br><br>
![drmodel](/public/images/drmodel.png)
<br><br>
- The patient Model -> journals are embedded within the patient schema to redirect. 
<br><br>
![patientmodel](/public/images/patientmodel.png)

## Screenshots 
<br>

- Full view of the doctor information page. From this page the doctor has full access to a list of their patients and their respective journals on the right drop down menus.
<br><br>
![drinfo](/public/images/doctorinfo.png)
<br><br>
- Here is where you write your patient journal that your Dr. has access to. Click "Submit" when created. 
<br><br>
![newjournal](/public/images/newjournal.png)
<br><br>
- The patient information screen. The patient has no access to modify their medications or dosage strength, this is only available with Dr. permission on the other side. 
<br><br>
![patient](/public/images/patientscreen.png)
<br><br>

## Technologies Used
- Node.js
- Express.js
- oAuth
- MongoDb
- Mongoose
- RESTful routing
- Passport
- Heroku 
- HTML
- CSS 
- JAVASCRIPT 
- GIT 
- mongoDB Compass

## Future Development 
- Add functionality so that in order for a Dr. to log in with special permission they must input their physician registration number from the Ministry of Health 
- Add more CSS to create a nicer UX 
- Functionality to distinguish patient meds on Dr. account page 


## Use the app on Heroku! 
Click <a href="https://dctrdiary.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a> to access the app. 
<br><br>
## About the Creator 
This is the first project using the MEN stack with RESTful routing by **Dylan Burston.**
- **[Linkedin](https://www.linkedin.com/in/dylan-burston-09727265/)**