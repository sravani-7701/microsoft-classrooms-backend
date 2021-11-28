# <p align ="center" >Microsoft Classrooms</p>
## <p align ="center" >One step solution for online classes.</p>

<p align ="center" ><img src="https://ibb.co/Q94KH0p" height="350px" alt="Homepage"/></p>
<p align ="center"> <a href="https://www.youtube.com/watch?v=WClPDBkZvZk">Presentation Video</a> | <a href="https://github.com/sravani-7701/microsoft-classrooms-client">Frontend code</a></p>
## Table of Contents 📕

- [About the Challenge](#microsoft-engage-2021)
- [Agile development methodology](#agile-development-methodology)
- [Features](#features-)
- [Future Work](#future-work)
- [References](#references)

# Microsoft Engage-2021
* The Challenge
	* Build a functional prototype of a platform that gives students an array of digital academic and social tools to stay engaged with  their studies, peers and broader university community during pandemic.
# Agile development Methodology

* I divided the 3 week  program into 3 sprints. Each sprint consisted of one week period.
* I categorized my sprints into four sections - exploration, basic working model, features creation, adapt phase.
* We were given a problem statement in which we had to make a app of platform that would help student
 So I planned to build the most important features for students joining a call, Tasks app,Assignments, File Sharing and Discussion tab
* In the first week,I designed the plan,decided the techstack , learnt the socket.io and developed the calls featue and chat feature
* In the second week, I added the feature of creating class,Activity,and Filesharing tab
* In the third week, I added the assignment feature,Tasks creator feature and improved the UI

# Features :
## Landing page:
 This is the starting page where the page contains login/signup option and description all about the app.
## Homepage
* This is page after the login,and contains a side bar with all features of the app
	* Clicking on teams redirects you to Team's Interface
    * Clicking on calls allows you to make a call
	* Clicking on activity displays the activity happened
    * Clicking on todo pushes to Task creater app 
	* Logout
## Teams
* On the Teams Interface teams that the user is part will diplay,On clicking on each team will open a separate interface for each team.
  Here the user who creates the team is Admin and Admin has special rights over others.that evary taeam has special tabs like Assignment,File and sepearte Discussion tab for every team but only can add student to the team, create Assignment  and start a team call.
    # Assignment
    *  Assignment can be sheduled for any time by admin but member of the team can only see the assignment after the scheduled time.
	*  User can download the assignment and upload the assignment but only in the given deadline.After the deadline he/she can't submit the  assignment
    # Files
	* Any one can add the files to the team. So the remaining team members can easily download the files.
    # Discussion
	* This is the tab where users can discuss their doubts and any user can post their doubts.
	* Users can like others post and comment them.
	* This way user can open only the relevant posts and comments and username will be displayed above each comment and post
    # Call
	* This feature is only visible to the Admin of the team on clicking the tab he can start the meet and each user will recieve a link   of the meeting

## Activity
* Here user will be displayed all the activity that has happened in the teams that they belongs
* ## Calls
	* User can video chat with others by sharing the personal link.
		* It has certain features like toggle audio and video and also share the screen
* ## Todo
	* User  cazn add the task delte and mark it as complete

* ### Implementation Details
	* Tech Stacks Used:
		* Socketio
		* MongoDB
		* React
		*  Node, express JS (Server)
# Future Work
* Improve Discussion tab by implementing Search functionality according to keywords and also can post video or image.
* Plagarism checker in Assignments 
* Grade chart for the assignments
# References
* https://www.udemy.com/course/socketio-with-websockets-the-details/
* https://www.tutorialspoint.com/mongodb/mongodb_gridfs.htm