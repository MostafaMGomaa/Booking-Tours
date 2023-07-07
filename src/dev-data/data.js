const countries = {
  egypt: {
    location: {
      coordinates: [26.8206, 30.8025],
      description: 'Egypt',
      type: 'Point',
    },
  },
  france: {
    location: {
      coordinates: [46.603354, 1.888334],
      description: 'France',
      type: 'Point',
    },
  },
  saudiArabia: {
    location: {
      coordinates: [23.885942, 45.079162],
      description: 'Saudi Arabia',
      type: 'Point',
    },
  },
  unitedArabEmirates: {
    location: {
      coordinates: [23.424076, 53.847818],
      description: 'United Arab Emirates',
      type: 'Point',
    },
  },
  russia: {
    location: {
      coordinates: [61.52401, 105.318756],
      description: 'Russia',
      type: 'Point',
    },
  },
  spain: {
    location: {
      coordinates: [40.463667, -3.74922],
      description: 'Spain',
      type: 'Point',
    },
  },
  unitedKingdom: {
    location: {
      coordinates: [55.378051, -3.435973],
      description: 'United Kingdom',
      type: 'Point',
    },
  },
  italy: {
    location: {
      coordinates: [41.87194, 12.56738],
      description: 'Italy',
      type: 'Point',
    },
  },
};

const stations = {
  alexandria: {
    location: {
      coordinates: [31.2156, 29.9553],
      description: 'Alexandria',
      type: 'Point',
    },
  },
  cairo: {
    location: {
      coordinates: [31.2357, 30.0444],
      description: 'Cairo',
      type: 'Point',
    },
  },
  tanta: {
    location: {
      coordinates: [30.7907, 30.9991],
      description: 'Tanta',
      type: 'Point',
    },
  },
  damanhour: {
    location: {
      coordinates: [30.4652, 31.0378],
      description: 'Damanhour',
      type: 'Point',
    },
  },
  kafrElSheikh: {
    location: {
      coordinates: [31.1129, 30.9408],
      description: 'Kafr El Sheikh',
      type: 'Point',
    },
  },
  mansoura: {
    location: {
      coordinates: [31.0379, 31.3784],
      description: 'Mansoura',
      type: 'Point',
    },
  },
  beniSuef: {
    location: {
      coordinates: [31.0891, 29.7291],
      description: 'Beni Suef',
      type: 'Point',
    },
  },
};

const destinations = {
  giza: {
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
  luxor: {
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
  aswan: {
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
  cairo: {
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
  alexandria: {
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
  sharmElSheikh: {
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
  hurghada: {
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
  dahab: {
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
  siwaOasis: {
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
  marsaAlam: {
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
  fayoum: {
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
  abydos: {
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
  edfu: {
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
  philae: {
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
  marsaMatruh: {
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
  whiteDesert: {
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
  rasMohammed: {
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
  nuweiba: {
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
  saintCatherine: {
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
  bahariyaOasis: {
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
};

const travelAgency = {
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

`
GEO EX: 
    startLocation": {
        "description": "Miami, USA",
        "type": "Point",
        "coordinates": [-80.185942, 25.774772],
        "address": "301 Biscayne Blvd, Miami, FL 33132, USA"
    }

// Make GEO using mongoose
    startLocation: {
        // GeoJSON
        type: {
        type: String,
        default: 'Point',
        enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String
    },
`;
