'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

let hrArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCustomer: 6.3,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function () {
    let total = 0;
    for (let i = 0; i < hrArray.length; i++) {
      const randomCustomersPerHour = randomInRange(this.minCust, this.maxCust);
      const cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function () {
    const containerElem = document.getElementById('locationInfo');

    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hrArray[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;
  }
};

seattle.generateRandomCookiesPerHour();
seattle.render();

function randomInRange(min, max) {
  const range = max - min + 1;
  const randInSpan = Math.floor(Math.random() * range) + min;
  return min + randInSpan;
}


