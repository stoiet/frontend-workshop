// import { movies } from './movies';
// import { sortByField } from './';

// describe('#sortByField', () => {

//   it('should sortByField function defined', () => {
//     expect(sortByField).toBeDefined;
//   });


//   it('should sortByField return a function', () => {
//     expect(sortByField()).toBeDefined;
//   });


//   it('should return the original datas if invalid field name given', () => {
//     const sortByUnknown = sortByField('unknown');
//     expect(sortByUnknown(movies)).to.eql(movies);
//   });


//   it('should return the sorted datas by imdb score', () => {
//     const sortByUnknown = sortByField('imdb');
//     expect(sortByUnknown(movies)).to.eql([
//       {
//         director: 'Christopher Nolan',
//         imdb: 8.6,
//         title: 'Interstellar'
//       },
//       {
//         director: 'Gareth Edwards',
//         imdb: 8.1,
//         title: 'Rogue One'
//       },
//       {
//         director: 'Scott Derrickson',
//         imdb: 7.8,
//         title: 'Doctor Strange'
//       },
//       {
//         director: 'Bryan Singer',
//         imdb: 7.1,
//         title: 'X-Men: Apocalypse'
//       }
//     ]);
//   });

// });
