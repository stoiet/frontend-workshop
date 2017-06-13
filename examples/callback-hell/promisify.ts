
export const promisify = statement => {
  return callback => (
    new Promise(resolve => statement(() => {
      callback();
      resolve();
    }))
  );
};
