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

const randomObject = getRandomAirport();
const randomAirport = randomObject.airport;
const randomCity = randomObject.city;

console.log('Random Airport:', randomAirport);
console.log('Random City:', randomCity);
