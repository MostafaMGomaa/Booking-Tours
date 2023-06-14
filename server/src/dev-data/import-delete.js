/***** NPM PACKAGE HASE SOME METHOD READ AND HANDLE THE JSON FILES */
const jsonfile = require('jsonfile');
const moment = require('moment');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const random_date = require('random-date-generator');
const fs = require('fs');

const Tour = require('../models/tourModel');
dotenv.config({ path: `${__dirname}/../.env` });
let DB = '';
if (process.env.LOCAL) {
  DB = process.env.DATABASE_LOCAL;
} else {
  DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );
}
mongoose.set('strictQuery', false);

mongoose.connect(DB).then(() => console.log('Connected Successfully'));

/***
 * return random date using random-date-generator package
 */
const randomDate = () => {
  const startDate = new Date(2023, 1, 1);
  const endDate = new Date(2023, 12, 31);
  return random_date.getRandomDateInRange(startDate, endDate);
};

/*****
 * Egypt Airports with cities
 */

const egypt_airports = [
  { airport: 'Cairo International Airport', city: 'Cairo' },
  { airport: 'Hurghada International Airport', city: 'Hurghada' },
  { airport: 'Sharm El-Sheikh International Airport', city: 'Sharm El-Sheikh' },
  { airport: 'Luxor International Airport', city: 'Luxor' },
  { airport: 'Alexandria International Airport', city: 'Alexandria' },
  { airport: 'Marsa Alam International Airport', city: 'Marsa Alam' },
  { airport: 'Aswan International Airport', city: 'Aswan' },
  { airport: 'Mersa Matruh Airport', city: 'Mersa Matruh' },
  { airport: 'Taba International Airport', city: 'Taba' },
  { airport: 'Assiut Airport', city: 'Assiut' },
  { airport: 'Sohag International Airport', city: 'Sohag' },
  { airport: 'Abu Simbel Airport', city: 'Abu Simbel' },
  { airport: 'Marsa Matruh Airport', city: 'Marsa Matruh' },
  { airport: 'Dakhla Oasis Airport', city: 'Dakhla Oasis' },
];

const getRandomAirport = () => {
  const randomIndex = Math.floor(Math.random() * egypt_airports.length);
  return egypt_airports[randomIndex];
};

/***
 * COUNTERIES THAT OUR PROJECT SUPPORT
 * ADD MORE COUNTRIES IF NEEDED
 */
const countries = [
  'Egypt',
  'France',
  'Saudi Arabia',
  'United Arab Emirates',
  'Russia',
  'Spain',
  'United Kingdom',
  'Italy',
];

const data = [];

/***
 * READ THE FILE
 * THEN FILTER THE FILE TO GET THE ONLY THE AIRPORTS AND THE SUPPORTED COUNTRIES
 * THEN PUSH IT TO THE DATA ARRAY
 */
const file = jsonfile
  .readFileSync(`${__dirname}/airports.json`)
  .forEach((e) => {
    if (e.type === 'Airports' && countries.includes(e.country)) {
      const obj = {
        name: e.name,
        city: e.city,
        country: e.country,
        state: e.state,
      };
      data.push(obj);
    }
  });

const getTour = (
  from,
  to,
  classType,
  tourType,
  startDate,
  endDate,
  transportation,
  price
) => {
  return {
    fromCountry: from.country,
    fromCity: from.city || from.country,
    fromSite: from.name || from.city,
    toCountry: 'Egypt',
    toCity: to.city,
    toSite: to.airport || to.city,
    name: `a Tour from ${from.city || from.country} to ${to.city}`,
    price,
    type: tourType,
    takeOff: startDate,
    endDate,
    duration: Math.trunc(Math.random() * 21) + 1,
    description: `a fantastic Tour start in '${moment(randomDate()).format(
      'MMMM Do YYYY'
    )}' and take about '${
      Math.trunc(Math.random() * 21) + 1
    }hrs', to enjoy in ${to.city} `,
    summary: `a Tour from ${from.city || from.country} to ${to.city}`,
    baggage: [30, 23][Math.floor(Math.random() * 2)],
    transportation,
    class: classType,
  };
};

/**
 * GENERATE SOME PLAN TOURS FROM THE DATA ARRAY
 * GENERATE A TOUR FROM EACH ELEMENT TO A RANDOM ELEMENT
 * GENERATE A RANDOM PRICE BETWEEN 500$-1000$
 * GENERATE DATE AND TIME
 * PUSH THIS TOUR TO THE PLAN TOURS ARRAY
 * DO SOME WITH BUS TOURS
 * THEN WRITE TOURS INTO TOURS.JSON
 */

const generatePlanTours = (data) => {
  const tours = [];

  // Generate a random plan tours
  data.forEach((from) => {
    const to = getRandomAirport();
    const tourType = ['oneway', 'return'][Math.floor(Math.random() * 2)];
    const startDate = randomDate();
    const endDate =
      tourType === 'return'
        ? new Date(moment(startDate).add(3, 'M'))
        : startDate;
    const classType = ['first', 'business', 'comfort'][
      Math.floor(Math.random() * 3)
    ];
    const price = Math.trunc(Math.random() * 500) + 500;
    const planTour = getTour(
      from,
      to,
      classType,
      tourType,
      startDate,
      endDate,
      'plane',
      price
    );
    tours.push(planTour);
  });
  return tours;
};

const generateBusTours = () => {
  const tours = [];
  const stations = [
    'Alexandria',
    'Cairo',
    'Tanta',
    'Damanhour',
    'Kafr El Sheikh',
    'Mansoura',
    'Beni Suef',
  ];
  const destinations = [
    'Giza',
    'Luxor',
    'Aswan',
    'Cairo',
    'Alexandria',
    'Sharm El Sheikh',
    'Hurghada',
    'Dahab',
    'Siwa Oasis',
    'Marsa Alam',
    'Fayoum',
    'Abydos',
    'Edfu',
    'Philae',
    'Marsa Matruh',
    'White Desert',
    'Ras Mohammed',
    'Nuweiba',
    'Saint Catherine',
    'Bahariya Oasis',
  ];

  for (let i = 0; i < stations.length; i++) {
    for (let j = 0; j < destinations.length; j++) {
      const tourType = 'return';
      const startDate = randomDate();
      const endDate = new Date(moment(startDate).add(5, 'DAYS'));
      const classType = ['first', 'business', 'economy'][
        Math.floor(Math.random() * 3)
      ];
      const price = Math.trunc(Math.random() * 100) + 100;
      const element = destinations[j];
      const from = {};
      const to = {};
      if (element === stations[i]) continue;
      from.country = 'Egypt';
      from.city = stations[i];
      to.city = destinations[j];
      const tour = getTour(
        from,
        to,
        classType,
        tourType,
        startDate,
        endDate,
        'bus',
        price
      );
      tours.push(tour);
    }
  }
  return tours;
};

const generateTours = () => {
  const planTours = generatePlanTours(data);
  const busTours = generateBusTours();
  return [...busTours, ...planTours];
};

// Write data on tours.json
fs.writeFileSync(
  `${__dirname}/tours.json`,
  JSON.stringify(generateTours()),
  'utf-8'
);

// Read data from tours.json.
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));

const importDataToDB = async () => {
  try {
    await Tour.create(tours);
    console.log('Inserted Successfully');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteDataFromDB = async () => {
  try {
    await Tour.deleteMany();
    console.log('Deleted Successfully');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') importDataToDB();
if (process.argv[2] === '--delete') deleteDataFromDB();
