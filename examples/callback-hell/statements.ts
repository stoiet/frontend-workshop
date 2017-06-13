
const MAX = 1000;
const MIN = 200;


export const syncStatement = callback => {
  callback();
};


export const asyncStatement = callback => {
  setTimeout(callback, Math.floor(Math.random() * (MAX - MIN) + MIN));
};
