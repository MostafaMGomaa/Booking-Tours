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
  {
    airport: 'Cairo International Airport',
    city: 'Cairo',
    location: [30.1111, 31.1111],
  },
  {
    airport: 'Hurghada International Airport',
    city: 'Hurghada',
    location: [27.1111, 33.1111],
  },
  {
    airport: 'Sharm El-Sheikh International Airport',
    city: 'Sharm El-Sheikh',
    location: [27.1111, 34.1111],
  },
  {
    airport: 'Luxor International Airport',
    city: 'Luxor',
    location: [25.1111, 32.1111],
  },
  {
    airport: 'Alexandria International Airport',
    city: 'Alexandria',
    location: [31.1111, 29.1111],
  },
  {
    airport: 'Marsa Alam International Airport',
    city: 'Marsa Alam',
    location: [25.1111, 34.1111],
  },
  {
    airport: 'Aswan International Airport',
    city: 'Aswan',
    location: [24.1111, 32.1111],
  },
  {
    airport: 'Mersa Matruh Airport',
    city: 'Mersa Matruh',
    location: [31.1111, 27.1111],
  },
  {
    airport: 'Taba International Airport',
    city: 'Taba',
    location: [29.1111, 34.1111],
  },
  { airport: 'Assiut Airport', city: 'Assiut', location: [27.1111, 31.1111] },
  {
    airport: 'Sohag International Airport',
    city: 'Sohag',
    location: [26.1111, 31.1111],
  },
  {
    airport: 'Abu Simbel Airport',
    city: 'Abu Simbel',
    location: [22.1111, 31.1111],
  },
  {
    airport: 'Marsa Matruh Airport',
    city: 'Marsa Matruh',
    location: [31.1111, 27.1111],
  },
  {
    airport: 'Dakhla Oasis Airport',
    city: 'Dakhla Oasis',
    location: [25.1111, 29.1111],
  },
];

const getRandomAirport = () => {
  const randomIndex = Math.floor(Math.random() * egypt_airports.length);
  return egypt_airports[randomIndex];
};

const travelAgencies = {
  flight: {
    airArabia:
      'https://mostafa-dev-gp.s3.amazonaws.com/agency/flight/airArabia',
    airCairo: 'https://mostafa-dev-gp.s3.amazonaws.com/agency/flight/airCairo',
    flyEgypt: 'https://mostafa-dev-gp.s3.amazonaws.com/agency/flight/flyEgypt',
    nileAir: 'https://mostafa-dev-gp.s3.amazonaws.com/agency/flight/nileAir',
  },
  bus: {
    goBus: 'https://mostafa-dev-gp.s3.amazonaws.com/agency/bus/goBus',
    superJet: 'https://mostafa-dev-gp.s3.amazonaws.com/agency/bus/superJet',
    weBus: 'https://mostafa-dev-gp.s3.amazonaws.com/agency/bus/weBus',
  },
};
/***
 * COUNTERIES THAT OUR PROJECT SUPPORT
 * ADD MORE COUNTRIES IF NEEDED
 */
const countries = [
  {
    city: 'Egypt',
    location: {
      coordinates: [26.8206, 30.8025],
      description: 'Egypt',
      type: 'Point',
    },
  },
  {
    city: 'France',
    location: {
      coordinates: [46.603354, 1.888334],
      description: 'France',
      type: 'Point',
    },
  },
  {
    city: 'SaudiArabia',
    location: {
      coordinates: [23.885942, 45.079162],
      description: 'Saudi Arabia',
      type: 'Point',
    },
  },
  {
    city: 'UnitedArabEmirates',
    location: {
      coordinates: [23.424076, 53.847818],
      description: 'United Arab Emirates',
      type: 'Point',
    },
  },
  {
    city: 'Russia',
    location: {
      coordinates: [61.52401, 105.318756],
      description: 'Russia',
      type: 'Point',
    },
  },
  {
    city: 'Spain',
    location: {
      coordinates: [40.463667, -3.74922],
      description: 'Spain',
      type: 'Point',
    },
  },
  {
    city: 'UnitedKingdom',
    location: {
      coordinates: [55.378051, -3.435973],
      description: 'United Kingdom',
      type: 'Point',
    },
  },
  {
    city: 'Italy',
    location: {
      coordinates: [41.87194, 12.56738],
      description: 'Italy',
      type: 'Point',
    },
  },
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
    const country = countries.find((x) => x.city === e.country);
    if (e.type === 'Airports' && country) {
      const obj = {
        name: e.name,
        city: e.city,
        country: e.country,
        state: e.state,
        location: [Number(e.lon), Number(e.lat)],
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
  price,
  agancy,
  agancyPhoto,
  startLocation,
  endLocation
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
    agancy,
    agancyPhoto,
    startLocation,
    endLocation,
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
    const travelAgency = ['airArabia', 'airCairo', 'flyEgypt', 'nileAir'][
      Math.floor(Math.random() * 4)
    ];
    const agancyPhoto = travelAgencies['flight'][travelAgency];
    const startLocation = from.location;
    const endLocation = to.location;
    const price = Math.trunc(Math.random() * 500) + 500;
    const planTour = getTour(
      from,
      to,
      classType,
      tourType,
      startDate,
      endDate,
      'plane',
      price,
      travelAgency,
      agancyPhoto,
      startLocation,
      endLocation
    );
    tours.push(planTour);
  });
  return tours;
};

const generateBusTours = () => {
  const tours = [];
  const stations = [
    {
      city: 'Alexandria',
      location: {
        coordinates: [31.2156, 29.9553],
        description: 'Alexandria',
        type: 'Point',
      },
    },
    {
      city: 'Cairo',
      location: {
        coordinates: [31.2357, 30.0444],
        description: 'Cairo',
        type: 'Point',
      },
    },
    {
      city: 'Tanta',
      location: {
        coordinates: [30.7907, 30.9991],
        description: 'Tanta',
        type: 'Point',
      },
    },
    {
      city: 'Damanhour',
      location: {
        coordinates: [30.4652, 31.0378],
        description: 'Damanhour',
        type: 'Point',
      },
    },
    {
      city: 'KafrElSheikh',
      location: {
        coordinates: [31.1129, 30.9408],
        description: 'Kafr El Sheikh',
        type: 'Point',
      },
    },
    {
      city: 'Mansoura',
      location: {
        coordinates: [31.0379, 31.3784],
        description: 'Mansoura',
        type: 'Point',
      },
    },
    {
      city: 'BeniSuef',
      location: {
        coordinates: [31.0891, 29.7291],
        description: 'Beni Suef',
        type: 'Point',
      },
    },
  ];
  const destinations = [
    {
      city: 'Giza',
      location: {
        coordinates: [29.9773, 31.1325],
        description: 'Giza',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/giza-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/giza-2.jpg',
      ],
    },
    {
      city: 'Luxor',
      location: {
        coordinates: [32.6396, 25.6872],
        description: 'Luxor',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/luxor-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/luxor-2.jpg',
      ],
    },
    {
      city: 'Aswan',
      location: {
        coordinates: [32.8797, 24.0889],
        description: 'Aswan',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/aswan-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/aswan-2.jpg',
      ],
    },
    {
      city: 'Cairo',
      location: {
        coordinates: [30.0444, 31.2357],
        description: 'Cairo',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/cairo-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/cairo-2.jpg',
      ],
    },
    {
      city: 'Alexandria',
      location: {
        coordinates: [31.2156, 29.9553],
        description: 'Alexandria',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/alexandria-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/alexandria-2.jpg',
      ],
    },
    {
      city: 'SharmElSheikh',
      location: {
        coordinates: [34.3296, 27.9158],
        description: 'Sharm El Sheikh',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/sharmElSheikh-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/sharmElSheikh-2.jpg',
      ],
    },
    {
      city: 'Hurghada',
      location: {
        coordinates: [27.2579, 33.8116],
        description: 'Hurghada',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/hurghada-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/hurghada-2.jpg',
      ],
    },
    {
      city: 'Dahab',
      location: {
        coordinates: [28.5095, 28.5095],
        description: 'Dahab',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/dahab-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/dahab-2.jpg',
      ],
    },
    {
      city: 'SiwaOasis',
      location: {
        coordinates: [25.517, 28.5579],
        description: 'Siwa Oasis',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/siwaOasis-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/siwaOasis-2.jpg',
      ],
    },
    {
      city: 'MarsaAlam',
      location: {
        coordinates: [34.887, 25.0705],
        description: 'Marsa Alam',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/marsaAlam-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/marsaAlam-2.jpg',
      ],
    },
    {
      city: 'Fayoum',
      location: {
        coordinates: [29.3084, 29.3084],
        description: 'Fayoum',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/fayoum-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/fayoum-2.jpg',
      ],
    },
    {
      city: 'Abydos',
      location: {
        coordinates: [26.183, 31.9216],
        description: 'Abydos',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/abydos-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/abydos-2.jpg',
      ],
    },
    {
      city: 'Edfu',
      location: {
        coordinates: [32.9609, 24.979],
        description: 'Edfu',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/edfu-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/edfu-2.jpg',
      ],
    },
    {
      city: 'Philae',
      location: {
        coordinates: [32.8801, 24.0141],
        description: 'Philae',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/philae-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/philae-2.jpg',
      ],
    },
    {
      city: 'MarsaMatruh',
      location: {
        coordinates: [27.2456, 31.0362],
        description: 'Marsa Matruh',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/marsaMatruh-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/marsaMatruh-2.jpg',
      ],
    },
    {
      city: 'WhiteDesert',
      location: {
        coordinates: [29.2385, 26.7238],
        description: 'White Desert',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/whiteDesert-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/whiteDesert-2.jpg',
      ],
    },
    {
      city: 'RasMohammed',
      location: {
        coordinates: [34.2655, 27.8166],
        description: 'Ras Mohammed',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/rasMohammed-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/rasMohammed-2.jpg',
      ],
    },
    {
      city: 'Nuweiba',
      location: {
        coordinates: [34.9613, 28.8967],
        description: 'Nuweiba',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/nuweiba-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/nuweiba-2.jpg',
      ],
    },
    {
      city: 'SaintCatherine',
      location: {
        coordinates: [28.5544, 28.5544],
        description: 'Saint Catherine',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/saintCatherine-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/saintCatherine-2.jpg',
      ],
    },
    {
      city: 'BahariyaOasis',
      location: {
        coordinates: [28.3553, 28.3553],
        description: 'Bahariya Oasis',
        type: 'Point',
      },
      images: [
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/bahariyaOasis-1.jpg',
        'https://mostafa-dev-gp.s3.amazonaws.com/destinations/bahariyaOasis-2.jpg',
      ],
    },
  ];
  for (let i = 0; i < stations.length; i++) {
    for (let j = 0; j < destinations.length; j++) {
      const tourType = 'return';
      const startDate = randomDate();
      const endDate = new Date(moment(startDate).add(5, 'DAYS'));
      const classType = ['first', 'business', 'economy'][
        Math.floor(Math.random() * 3)
      ];
      const travelAgency = ['goBus', 'superJet', 'weBus'][
        Math.floor(Math.random() * 3)
      ];
      const agancyPhoto = travelAgencies['bus'][travelAgency];

      const startLocation = stations[i].location.coordinates;
      const endLocation = destinations[j].location.coordinates;

      const price = Math.trunc(Math.random() * 100) + 100;
      const from = {};
      const to = {};
      from.country = 'Egypt';
      from.city = stations[i].city;
      to.city = destinations[j].city;
      if (from.city === to.city) continue;
      const tour = getTour(
        from,
        to,
        classType,
        tourType,
        startDate,
        endDate,
        'bus',
        price,
        travelAgency,
        agancyPhoto,
        startLocation,
        endLocation
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
