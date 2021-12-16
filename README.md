# Sprint planning tool

##### Tool that allows Project leads/managers to plan upcoming sprint.

### Project setup

* clone project
    * `git clone https://justasbuzaitis@bitbucket.org/devbridge-sourcery/sourcery-academy-2021-fall-team-justas.git`
* Open sourcery-academy-2021-fall-team-justas catalog using Intellij
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
