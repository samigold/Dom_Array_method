const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

console.log(data);

getRandomUser();
getRandomUser();

console.log(data);

// fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json()

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}

//Add new obj to data arr
function addData(obj) {
  data.push(obj) 

  updateDOM();
}

// Update DOM
function updateDOM(providedData = data){
  //clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`;
    main.appendChild(element);
  })
}

//Format number as money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}

// //double everyones money
// function doubleMoney(data) {
//   data = data.map(user =>{
//     //return {...user, money: user.money * 2};
//     const element = document.querySelector('.person');
//     element.innerHTML = `<strong>${user.name}</strong> ${user.money * 2}`;
//   })
// }

//Evennt Listeners
doubleBtn.addEventListener('click', doubleMoney);