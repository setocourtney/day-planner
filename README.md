# day-planner

Deployed: https://setocourtney.github.io/day-planner/

Simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


## User Story

> AS AN busy individual <br />
> I WANT to be able to plan my daily schedule <br />
> SO THAT I can optimize my time and get all of my tasks done.


## Functionality

The app displays standard business hours (9 a.m. to 5 p.m.). Each time slot represents one hour and contains the following:

    * The time

    * A field to hold user input

    * A save button

Clicking on the save button will store the time and user input in `localStorage`.

Each hour is color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day.

This application uses the [Moment.js](https://momentjs.com/) library to work with date and time.



## Technologies

### FrontEnd

* [Moment.js](https://momentjs.com/)
* [Bootstrap](https://getbootstrap.com/)
* HTML
* JavaScript



## Directory

    *script.js - javascript using jquery to dynamically update contents
    *index.html - markup for page contents
    *style.css - stylesheet supplement to bootstrap package

    
## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 Courtney J. Seto

