/***** NPM PACKAGE HASE SOME METHOD READ AND HANDLE THE JSON FILES */
const jsonfile = require("jsonfile");
const date = new Date();

/***
 * COUNTERIES THAT OUR PROJECT SUPPORT
 * ADD MORE COUNTRIES IF NEEDED
 */
const countries = [
    "Egypt",
    "France",
    "Saudi Arabia",
    "United Arab Emirates",
    "Russia",
    "Spain",
    "United Kingdom",
    "Italy",
];

const data = [];

/***
 * READ THE FILE
 * THEN FILTER THE FILE TO GET THE ONLY THE AIRPORTS AND THE SUPPORTED COUNTRIES
 * THEN PUSH IT TO THE DATA ARRAY
 */
const file = jsonfile.readFileSync("airports.json").forEach((e) => {
    if (e.type === "Airports" && countries.includes(e.country)) {
        const obj = {
            name: e.name,
            city: e.city,
            country: e.country,
            state: e.state,
        };
        data.push(obj);
    }
});

/**
 * GENERATE SOME FLIGHTS FROM THE DATA ARRAY
 * GENERATE A FLIGHT FROM EACH ELEMENT TO A RANDOM ELEMENT
 * GENERATE A RANDOM PRICE BETWEEN 500$-1000$
 * CURRENT DATE AND TIME
 * PUSH THIS FLIGHT TO THE FLIGHTS ARRAY
 */

const flights = [];

data.forEach((from, idx) => {
    var toIdx = Math.trunc(Math.random() * data.length);
    while (idx === toIdx) toIdx = Math.trunc(Math.random() * data.length);
    const to = data[toIdx];
    const flight = {
        fromCountry: from.country,
        fromCity: from.city,
        fromAirport: from.name,
        toCountry: to.country,
        toCity: to.city,
        toAirport: to.name,
        price: `${Math.trunc(Math.random() * 501 + 500)}$`,
        day: date.toJSON().slice(0, 10),
        time: date.toJSON().slice(11, 19),
    };
    flights.push(flight);
});