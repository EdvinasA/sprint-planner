title = "“Sourcery Students” - Sprint 17";
startDate = "2021-10-21T00:00:00.000Z";
endDate = "2021-10-29T00:00:00.000Z";
sprintId = 0;
isHistorical = false;

username = ["Vardenis Pavardenis", "Vardinis Pavardinis", "Vardenė Pavardenė",
  "Vardaitė Pavardaitė"];

dates = ["2021-10-21T00:00:00.000Z", "2021-10-22T00:00:00.000Z", "2021-10-23T00:00:00.000Z", "2021-10-24T00:00:00.000Z",
 "2021-10-25T00:00:00.000Z", "2021-10-26T00:00:00.000Z",
"2021-10-27T00:00:00.000Z", "2021-10-218T00:00:00.000Z", "2021-10-29T00:00:00.000Z"];

id = [0 ,1, 2, 3, 4, 5, 6];
key = ["SFD-182", "SFD-175", "SFD-192","SFD-140", "SFD-173", "Vacation", "Education"];
description = ["Create collapsable card component with styles", "Update role handling",
    "Create login form with styles and error handling", "Create general page layout",
    "Set up React app with main folder structure", "Vacation", "Education"];
type =["Goal", "Technical", "-", "Goal", "-"];
buttonColor =["#1AC889", "#1A9EC8", "#1A55C8", "#F7C3FF", "#FFE9B0", "#878787", "#878787"];
oldPoints =[0, 1, 5, 0, 0, 0, 0];
remainingPoints=[0, 1, 2, 0, 0, 0, 0];
newPoints=[5, 0, 0, 5, 3, 0, 0];
show=[true, true, true, true, true, false, false]

class task {
    constructor(id, key, description, type, oldPoints, remainingPoints, newPoints, buttonColor, show){
        this.id = id
        this.key = key;
        this.description = description;
        this.type = type;
        this.oldPoints = oldPoints;
        this.remainingPoints = remainingPoints;
        this.newPoints = newPoints;
        this.buttonColor = buttonColor;
        this.sprintId = sprintId;
        this.show = show;
    }
}
tasks = []

class currentSprint{
 constructor(title, startDate, endDate, sprintId, isHistorical, users, tasks)
 {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.sprintId = sprintId;
    this.isHistorical = isHistorical;
    this.users = users;
    this.tasks = tasks;
 }
}

users = [
    {
        id: 2,
        name: "Vardinis Pavardinis",
        role: "Designer",
        day:
        [
            {
                id: 1,
                taskId: 0
            },
            {
                id: 2,
                taskId: 0
            },
            {
                id: 3,
                taskId: 0
            },
            {
                id: 4,
                taskId: 0
            },
            {
                id: 5,
                taskId: 0
            },
            {
                id: 6,
                taskId: 0
            },
            {
                id: 7,
                taskId: 0
            }
        ]
    },
    {
        id: 5,
        name: "Vardas Pavardė",
        role: "Front-End",
        day:
            [
                {
                    id: 8,
                    taskId: 2
                },
                {
                    id: 9,
                    taskId: 1
                },
                {
                    id: 10,
                    taskId: 3
                },
                {
                    id: 11,
                    taskId: 4
                },
                {
                    id: 12,
                    taskId: 1
                },
                {
                    id: 13,
                    taskId: 1
                },
                {
                    id: 14,
                    taskId: 1
                }
            ]
    },
    {
        id: 7,
        name: "Pavardė Vardas",
        role: "Back-End",
        day:
            [
                {
                    id: 15,
                    taskId: 2
                },
                {
                    id: 15,
                    taskId: 1
                },
                {
                    id: 16,
                    taskId: 3
                },
                {
                    id: 17,
                    taskId: 4
                },
                {
                    id: 18,
                    taskId: 1
                },
                {
                    id: 19,
                    taskId: 1
                },
                {
                    id: 20,
                    taskId: 1
                }
            ]
    },
    {
        id: 9,
        name: "Vardinis Pavardinis",
        role: "Back-End",
        day:
            [
                {
                    id: 21,
                    taskId: 2
                },
                {
                    id: 22,
                    taskId: 1
                },
                {
                    id: 23,
                    taskId: 3
                },
                {
                    id: 24,
                    taskId: 4
                },
                {
                    id: 25,
                    taskId: 1
                },
                {
                    id: 26,
                    taskId: 1
                },
                {
                    id: 27,
                    taskId: 1
                }
            ]
    }
    ];

for (let i = 0; i < key.length; i++){
    tasks[i] = new task(id[i], key[i], description[i], type[i], oldPoints[i],
        remainingPoints[i], newPoints[i], buttonColor[i], show[i]);
}

module.exports = new currentSprint(title, startDate, endDate, sprintId, isHistorical, users, tasks);



