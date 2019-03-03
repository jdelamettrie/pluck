const axios = require('axios');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const connection = require('./database/index');


const possibleFinalGardenArray = {
  Apples: 'https://i.imgur.com/VWk0EHqh.jpg',
  Apricots: 'https://i.imgur.com/9Xv87cDh.jpg',
  Artichokes: 'https://i.imgur.com/Fir9Czch.jpg',
  Arugula: 'https://i.imgur.com/tV6bWixh.jpg',
  Bananas: 'https://i.imgur.com/XxL6baYh.jpg',
  Beans: 'https://i.imgur.com/UWr8qiRh.jpg',
  Blueberries: 'https://i.imgur.com/SGlygBCh.jpg',
  'Bok Choy': 'https://i.imgur.com/flkU578h.jpg',
  Broccoli: 'https://i.imgur.com/rc5y4tKh.jpg',
  'Brussel Sprouts': 'https://i.imgur.com/IEhPjjJh.jpg',
  Cabbages: 'https://i.imgur.com/SYUmqEqh.jpg',
  Cauliflower: 'https://i.imgur.com/XN4JXmVh.png',
  Celery: 'https://i.imgur.com/M4mtnuth.jpg',
  Cherries: 'https://i.imgur.com/pNhAoNdh.jpg',
  'Chile Peppers': 'https://i.imgur.com/meQyn3jh.jpg',
  'Collard Greens': 'https://i.imgur.com/BLA5Jveh.jpg',
  Corn: 'https://i.imgur.com/mi1TRHbh.jpg',
  Cucumbers: 'https://i.imgur.com/jnNOahTh.jpg',
  Dewberrys: 'https://i.imgur.com/fgRXi2Xh.jpg',
  Dill: 'https://i.imgur.com/uLa4koEh.jpg',
  'Elephant Fruit': 'https://i.imgur.com/uCapFRJh.jpg',
  Peas: 'https://i.imgur.com/3omJ6Dkh.jpg',
  'Escarole Lettuce': 'https://i.imgur.com/T80eHJPh.png',
  Figs: 'https://i.imgur.com/KSITPcoh.jpg',
  Garlic: 'https://i.imgur.com/G7ql5gch.jpg',
  Grapes: 'https://i.imgur.com/Z2RkzoYh.jpg',
  'Honeydew Melons': 'https://i.imgur.com/EBAG2HXh.jpg',
  Kiwis: 'https://i.imgur.com/5fIk7nbh.jpg',
  Leeks: 'https://i.imgur.com/cSzDYFfh.jpg',
  Mangos: 'https://i.imgur.com/THfmOcZh.jpg',
  Mushrooms: 'https://i.imgur.com/txxOeI6h.jpg',
  Noni: 'https://i.imgur.com/MDa7epQh.jpg',
  Okra: 'https://i.imgur.com/RZO2RVMh.jpg',
  Olives: 'https://i.imgur.com/Yuud9Vrh.jpg',
  Oranges: 'https://i.imgur.com/fdXntPL.jpg',
  Oregano: 'https://i.imgur.com/t9dH9Cdh.jpg',
  Parsley: 'https://i.imgur.com/9eRh3ohh.jpg',
  Parsnips: 'https://i.imgur.com/OJI7nN9h.jpg',
  Peaches: 'https://i.imgur.com/I6Qij5fh.jpg',
  Pineapples: 'https://i.imgur.com/vZ0sFH7h.jpg',
  Potatoes: 'https://i.imgur.com/VU3Vx4F.jpg',
  Pumpkins: 'https://i.imgur.com/xCVsN2Wh.jpg',
  Quince: 'https://i.imgur.com/b8pYNLCh.jpg',
  Radicchio: 'https://i.imgur.com/jH9e8dgh.jpg',
  Radishes: 'https://i.imgur.com/mN2b6a9h.jpg',
  Rambutan: 'https://i.imgur.com/pcCy6Zmh.png',
  Raspberries: 'https://i.imgur.com/m1AwCIhh.jpg',
  Rosemary: 'https://i.imgur.com/qB4w42Bh.jpg',
  Rutabagas: 'https://i.imgur.com/ecOahpmh.jpg',
  Sage: 'https://i.imgur.com/EzHuv6eh.jpg',
  Shallots: 'https://i.imgur.com/XEDKe6Zh.jpg',
  Strawberries: 'https://i.imgur.com/XbgKeGlh.jpg',
  Squash: 'https://i.imgur.com/InFdzqFh.jpg',
  'Sweet Potatoes': 'https://i.imgur.com/CFfgmJLh.jpg',
  Thyme: 'https://i.imgur.com/8rfdjlSh.jpg',
  Pears: 'https://i.imgur.com/QFH6lVZh.jpg',
  Watermelons: 'https://i.imgur.com/uFOK2HN.jpg',
  Zucchini: 'https://i.imgur.com/pNHF6S6h.jpg',
  Tomatoes: 'https://i.imgur.com/GXxgXWa.jpg',
};

// _.forEach(possibleFinalGardenArray, (link, planttype) => {
//   connection.insertPlantData(planttype, link, (err, res) => {
//     console.log(res);
//   });
// });

// connection.updateUserLikedPlant(1, 1, (err, res) => {
//   console.log(err, res);
// });

// connection.insertUser('acreed1998', 'tigerlamb345', '1725 Delachaise St., Apt#108, New Orleans, LA', 70115, (err, res) => {
//   console.log(err, res);
// });

// connection.verifyUser('acreed1998', 'tigerlamb345', (err, res) => {
//   console.log(err, res);
// });

// for (let i = 0; i < 10; i++) {
//   connection.insertPlant(1, 'Apples', '1725 Delachaise St., Apt#108, New Orleans, LA', 70115, "These Are Some Good Apples", (err, res) => {
//     console.log(err, res);
//   });
// }
