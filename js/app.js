'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:


const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  generateCust: function () { // generates random number of customers per hour
    const randomCust = getRandomInRange(this.minCust, this.maxCust);
    return parseInt(randomCust);
  },
  custCookies: function () { // calclulates simulated amounts of cookies per hour, stores in custCookies
    return Math.floor(this.generateCust() * this.avgCookies);
  },
  cookieArray: function () {
    let hrlyCookie = [this.custCookies()];
    for (let i = 0; i < 13; i++) {
      hrlyCookie.push(this.custCookies());
    }
    return hrlyCookie;
  }
};

function getRandomInRange(min, max) {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

let hrArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

const parentElement = document.getElementById('locationInfo');

const article = document.createElement('article');
parentElement.appendChild(article);

const h2 = document.createElement('h2');
h2.textContent = seattle.name;
article.appendChild(h2);

const ul = document.createElement('ul');
article.appendChild(ul);

for (let i = 0; i < 14; i++) {
  const li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = hrArray[i] + seattle.cookieArray()[i] + ' cookies';
}

const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  generateCust: function () { // generates random number of customers per hour
    const randomCust = getRandomInRange(this.minCust, this.maxCust);
    return parseInt(randomCust);
  },
  custCookies: function () { // calclulates simulated amounts of cookies per hour, stores in custCookies
    return Math.floor(this.generateCust() * this.avgCookies);
  },
  cookieArray: function () {
    let hrlyCookie = [this.custCookies()];
    for (let i = 0; i < 13; i++) {
      hrlyCookie.push(this.custCookies());
    }
    return hrlyCookie;
  }
};

const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  generateCust: function () { // generates random number of customers per hour
    const randomCust = getRandomInRange(this.minCust, this.maxCust);
    return parseInt(randomCust);
  },
  custCookies: function () { // calclulates simulated amounts of cookies per hour, stores in custCookies
    return Math.floor(this.generateCust() * this.avgCookies);
  },
  cookieArray: function () {
    let hrlyCookie = [this.custCookies()];
    for (let i = 0; i < 13; i++) {
      hrlyCookie.push(this.custCookies());
    }
    return hrlyCookie;
  }
};

const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  generateCust: function () { // generates random number of customers per hour
    const randomCust = getRandomInRange(this.minCust, this.maxCust);
    return parseInt(randomCust);
  },
  custCookies: function () { // calclulates simulated amounts of cookies per hour, stores in custCookies
    return Math.floor(this.generateCust() * this.avgCookies);
  },
  cookieArray: function () {
    let hrlyCookie = [this.custCookies()];
    for (let i = 0; i < 13; i++) {
      hrlyCookie.push(this.custCookies());
    }
    return hrlyCookie;
  }
};

const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  generateCust: function () { // generates random number of customers per hour
    const randomCust = getRandomInRange(this.minCust, this.maxCust);
    return parseInt(randomCust);
  },
  custCookies: function () { // calclulates simulated amounts of cookies per hour, stores in custCookies
    return Math.floor(this.generateCust() * this.avgCookies);
  },
  cookieArray: function () {
    let hrlyCookie = [this.custCookies()];
    for (let i = 0; i < 13; i++) {
      hrlyCookie.push(this.custCookies());
    }
    return hrlyCookie;
  }
};





// console.log(seattle);
// console.log(seattle.generateCust());
// console.log(seattle.custCookies());
// console.log(seattle.cookieArray());
