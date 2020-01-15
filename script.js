/* javascript for day-planner application
    - requires moment.js library
*/

/* format of saved schedule objects:
    daySchedule {
        Time: hr
        Activity: description }
*/

var currentMoment;
var savedSchedule;
var momentDay;

refreshMoment();
getSavedSchedule();
parseSchedule();

//refresh moment variable
function refreshMoment() {
    currentMoment = moment();
    savedSchedule = [];
    //display current day and time
    momentDay = currentMoment.format("dddd, MMMM Do");  //ex: Tuesday, January 14th
    $("#currentDay").text(momentDay);
    $(".time-block").text(currentMoment.format("h:mm A"));  //ex: 2:30 PM
}

//create schedule blocks from 9-5 including hr, description, and save buttons
function parseSchedule() {
    var container = $(".container");
    container.empty();
    var momentHour = currentMoment.hour();
    for (hr = 9; hr <= 17; hr++) {
        var row = $("<div>");
        row.addClass("row");

        //create hour block
        var hrText = currentMoment.clone();
        hrText.hour(hr);
        var hour = $("<div>");
        hour.addClass("hour col-2");
        hour.text(hrText.format("hA"));
        row.append(hour);        

        //get saved activities from local storage or set description text to empty string
        var descriptionText = getSavedActivity(hr);
        var description = $("<input>");
        description.attr("type", "text");
        description.attr("id", "desc-" + hr);
        description.attr("value", descriptionText);
        description.addClass("description col-8");

        //change description box color based on current hour
        if(hr < momentHour) {
            description.addClass("past");
        } else if (hr === momentHour) {
            description.addClass("present");
        } else {
            //hr > momentHour
            description.addClass("future");
        };
        row.append(description);

        //create save button with data-hr equal to hr
        var saveBtn = $("<button>");
        var icon = $("<i>");
        icon.addClass("far fa-save");
        //add attribute data-hr equal to hr
        saveBtn.append(icon);
        saveBtn.addClass("saveBtn col-2");
        saveBtn.attr("data-hr", hr);
        row.append(saveBtn);

        //add schedule row to page
        container.append(row);
    };
};

//get saved schedule items from local storage and save to savedSchedule array
function getSavedSchedule() {
    savedSchedule = JSON.parse(localStorage.getItem("daySchedule"));
    if (!savedSchedule) {
        savedSchedule = [];
    };
};

//returns savedSchedule object of given hr or empty string
function getSavedActivity(hr) {
    var savedDescription = "";
    for(i = 0; i < savedSchedule.length; i++) {
        if (savedSchedule[i].Time == hr) {
            savedDescription = savedSchedule[i].Activity;
        };
    };
    return savedDescription;
};

//click event for save button, stores description text for relative hr as object in daySchedule to local storage
$(".saveBtn").on("click", function(e) {
    e.preventDefault();
    getSavedSchedule();
    var activityHr = $(this).attr("data-hr");
    var newActivity = document.querySelector("#desc-" + activityHr).value;
    var newScheduleObject = {
        Time: activityHr, 
        Activity: newActivity
    };
    for(i = 0; i < savedSchedule.length; i++) {
        if (savedSchedule[i].Time === activityHr) {
            savedSchedule.splice(i, 1);
        };
    };
    savedSchedule.push(newScheduleObject);
    localStorage.setItem("daySchedule", JSON.stringify(savedSchedule));
});
