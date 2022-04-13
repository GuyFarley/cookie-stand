'use strict';

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function City(name, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.randomCookiesSoldPerHour = this.generateRandomCookiesSoldPerHour();
  this.totalCookies = this.generateTotalCookies(this.randomCookiesSoldPerHour);
}

City.prototype.generateRandomCustomersPerHour = function () {
  return randomInRange(this.minCustomers, this.maxCustomers);
};

City.prototype.generateRandomCookiesSoldPerHour = function () {
  const array = [];
  for (let i = 0; i < hours.length; i++) {
    const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
    const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
    array[i] = cookiesSold;
  }
  return array;
};

City.prototype.generateTotalCookies = function sumArray(sumArr) {
  let arraySum = 0;
  for (let i = 0; i < sumArr.length; i++) {
    arraySum = arraySum + sumArr[i];
  }
  return arraySum;
};

const containerElem = document.getElementById('location-info');

const tableElem = document.createElement('table');
containerElem.appendChild(tableElem);

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = new City('Seattle', 23, 65, 6.3);
const tokyo = new City('Tokyo', 3, 24, 1.2);
const dubai = new City('Dubai', 11, 38, 3.7);
const paris = new City('Paris', 20, 38, 2.3);
const lima = new City('Lima', 2, 16, 4.6);
let allStoreLocations = [seattle, tokyo, dubai, paris, lima];

// header row
const headerRow = document.createElement('tr');
tableElem.appendChild(headerRow);

const headerCell = document.createElement('th');
headerRow.appendChild(headerCell);

for (let i = 0; i < hours.length; i++) {
  const headerCell = document.createElement('th');
  headerRow.appendChild(headerCell);
  headerCell.textContent = hours[i];
}

// data rows
City.prototype.render = function () {

  const dataRow = document.createElement('tr');
  tableElem.appendChild(dataRow);

  const nameCell = document.createElement('td');
  dataRow.appendChild(nameCell);
  nameCell.textContent = this.name;

  for (let i = 0; i < this.randomCookiesSoldPerHour.length; i++) {
    const dataCell = document.createElement('td');
    dataRow.appendChild(dataCell);
    dataCell.textContent = this.randomCookiesSoldPerHour[i];
  }

  const totalCell = document.createElement('td');
  dataRow.appendChild(totalCell);
  totalCell.textContent = this.totalCookies;
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// totals row
const hourlyTotalsRow = document.createElement('tr');
tableElem.appendChild(hourlyTotalsRow);

const blankTotalCell = document.createElement('th');
hourlyTotalsRow.appendChild(blankTotalCell);
blankTotalCell.textContent = 'Totals';

for (let i = 0; i < hours.length; i++) {
  const hourlyTotalsCell = document.createElement('th');
  hourlyTotalsRow.appendChild(hourlyTotalsCell);

  let totalSum = 0;
  for (let j = 0; j < 5; j++) {
    totalSum = totalSum + allStoreLocations[j].randomCookiesSoldPerHour[i];
  }
  hourlyTotalsCell.textContent = totalSum;
}



