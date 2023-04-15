const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

// Function to filter out names that match the given name
const findMatching = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
};

const filteredDrivers = findMatching(drivers, 'Bobby');
console.log(filteredDrivers);


// Function to filter out names that match the given name
const fuzzyMatch = (drivers, letters) => {
  return drivers.filter(driver => driver.startsWith(letters));
};

const filterDrivers = fuzzyMatch(drivers, 'Sa');
console.log(filteredDrivers);

const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh'
    },
    {
      name: 'Sammy',
      hometown: 'New York'
    },
    {
      name: 'Sally',
      hometown: 'Cleveland'
    },
    {
      name: 'Annette',
      hometown: 'Los Angeles'
    },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay'
    }
  ];
  
  
  const matchName = (driver, name) => {
    return driver.filter(driver => driver.name === name);
  };
  
  const matchedDriver = matchName(driver, 'Bobby');
  console.log(matchedDriver);