# Sprint planning tool

##### Tool that allows Project leads/managers to plan upcoming sprint.

### Project setup

* Open catalog using Intellij
* `File -> Project settings -> Project -> Set project SDK (Java 11) -> Press apply`
    * If you don't have Java 11, download jdk11 from here https://www.oracle.com/java/technologies/downloads/#java11
* `File -> Project settings -> Modules -> Plus sign -> import module gradle-> select backend catalog`
    * on pop up window: `choose gradle -> finish import -> ok`
* Go to "File" - "Settings..." - Editor - Code Style - "Gear Icon" - Import - backend/config/CodeStyle.xml
* Using command line tool navigate to frontend directory and run `npm install`
  * If you don't have Node, download and install from here (v14.18.0 is preferred) https://nodejs.org/en/download/

### Database setup

* Download and install `PostgreSQL 13` https://www.postgresql.org/download/
* If everything was successful you should be able to find and launch `pgAdmin` app
* Double-click on `Servers` and then on `PostgreSQL 13`
* Right click on `Login/Group Roles` > `Create` > `Login/Group Role...`
* Set
    * `General > Name`: `CHANGE_ME`
    * `Definition > Password`: `CHANGE_ME`
    * `Privileges > Can login?`: `Yes`
* Save
* Right click on `Databases` > `Create` > `Database...`
* Set
    * `General > Database`: `sprint_planning`
    * `General > Owner`: `CHANGE_ME`
    * `Security > add privilege`:
        * `Grantee`: `CHANGE_ME`
        * `Privileges`: `ALL` `WITH GRANT OPTION`
* Save

### Launch backend

* From Intellij menu select `Run -> Run 'SprintPlanningApplication'`

### Launch frontend:

* Using command line tool navigate to frontend directory and run `npm start`

Below pictures from created application:
![Screenshot_1](https://user-images.githubusercontent.com/47150498/150013041-9787c076-9c8d-43c1-aefe-fbca883c8471.png)
![Screenshot_2](https://user-images.githubusercontent.com/47150498/150013052-5afada4d-cc10-4d10-a071-baf73b30e7d9.png)
![Screenshot_3](https://user-images.githubusercontent.com/47150498/150013060-d79ae5d2-d40a-49a5-b01e-0225333049ff.png)
![Screenshot_4](https://user-images.githubusercontent.com/47150498/150013064-025e560d-1a12-4fad-a671-fdaefffbce44.png)
![Screenshot_5](https://user-images.githubusercontent.com/47150498/150013066-833cddf5-6da3-45c9-a998-709890480006.png)
![Screenshot_6](https://user-images.githubusercontent.com/47150498/150013069-bcff5aa9-dfd8-4609-af58-b5884b8c96e2.png)

