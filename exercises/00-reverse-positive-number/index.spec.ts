import { reverseNumber } from './';

describe('[00] #reverseNumber', () => {

  it('should reverseNumber function defined', () => {
    expect(reverseNumber).toBeDefined;
  });


  it('should return the given single-digit number', () => {
    expect(reverseNumber(1)).toEqual(1);
  });


  it('should return the given two-digit number as commuted ', () => {
    expect(reverseNumber(12)).toEqual(21);
  });


  it('should return the given N-digit number as reversed ', () => {
    expect(reverseNumber(12436576)).toEqual(67563421);
  });

});
