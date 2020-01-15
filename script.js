
/* javascript for day-planner application
    - requires moment.js library
*/

Object scheduledActivity = {
    time: , 
    activity:
};

const schedule = [];

const currentMoment = moment();

setTime();
//referesh page every 60 seconds
function setTime() {
    var timeLeft = 60;
    timerInterval = setInterval(function() {
        timeLeft--;
        if(timeLeft === 0) {
            location.reload();
        }
    }, 1000);
};


//display current day and time
const momentDay = currentMoment.format("dddd, MMMM Do");  //ex: Tuesday, January 14th
$("#currentDay").text(momentDay);
$(".time-block").text(currentMoment.format("h:mm A"));  //ex: 2:30 PM


parseSchedule();
//create schedule blocks from 9-5 including hr, description, and save buttons
function parseSchedule() {
    const container = $(".container");
    const momentHour = currentMoment.hour();
    for (hr = 9; hr <= 17; hr++) {
        var row = $("<div>");
        row.addClass("row");

        var hrText = currentMoment.clone();
        hrText.hour(hr);
        var hour = $("<div>");
        hour.addClass("hour col-2");
        hour.text(hrText.format("hA"));
        row.append(hour);        

        var description = $("<input>");
        description.attr("type", "text");
        description.addClass("description col-8");
        //change color based on current hour
        if(hr < momentHour) {
            description.addClass("past");
        } else if (hr === momentHour) {
            description.addClass("present");
        } else {
            //hr > momentHour
            description.addClass("future");
        };
        row.append(description);

        var saveBtn = $("<button>");
        var icon = $("<i>");
        icon.addClass("far fa-save");
        saveBtn.append(icon);
        saveBtn.addClass("saveBtn col-2");
        row.append(saveBtn);

        container.append(row);

    };
};



//create blocks 9-5
    //row
        //time-block
            //hour
        //description
        //saveBtn
    
//save = save description to local storage

//add class depending on time of day
    //past, present, future