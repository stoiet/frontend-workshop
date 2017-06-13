import { modifyFirstName, modifyStreet, addFriend, removeFriend } from './';
import * as freeze from 'deep-freeze-node';

const darthVader = freeze({
  firstName: 'Darth',
  lastName: 'Vader',
  address: {
    street: 'Death Star',
    zip: 9876
  },
  friends: ['Palpatine']
});

const yoda = freeze({
  firstName: 'Yoda',
  lastName: null,
  address: {
    street: 'Dathomir',
    zip: 1
  },
  friends: ['Obi-Wan', 'Padmé', 'Dooku']
});


describe('[07] #modifyFirstName', () => {

  it('should modify the given name', () => {
    const modified = modifyFirstName(darthVader, 'Yoda');
    expect(modified.firstName).toEqual('Yoda');
  });


  it('should keep last name untouched', () => {
    const modified = modifyFirstName(darthVader, 'Yoda');
    expect(modified.lastName).toEqual('Vader');
  });


  it('should keep address reference untouched', () => {
    const modified = modifyFirstName(darthVader, 'Yoda');
    expect(modified.address).toBe(darthVader.address);
  });


  it('should keep friends reference untouched', () => {
    const modified = modifyFirstName(darthVader, 'Yoda');
    expect(modified.friends).toBe(darthVader.friends);
  });

});

describe('[07] #modifyStreet', () => {

  it('should modify the street', () => {
    const modified = modifyStreet(yoda, 'Geonosis');
    expect(modified.address.street).toEqual('Geonosis');
  });


  it('should keep other properties untouched', () => {
    const modified = modifyStreet(yoda, 'Geonosis');
    expect(modified.firstName).toEqual(yoda.firstName);
    expect(modified.lastName).toEqual(yoda.lastName);
    expect(modified.address.zip).toEqual(yoda.address.zip);
  });


  it('should keep friends reference untouched', () => {
    const modified = modifyStreet(yoda, 'Geonosis');
    expect(modified.friends).toBe(yoda.friends);
  });

});

describe('[07] #addFriend', () => {

  it('should add the given friend', () => {
    const modified = addFriend(yoda, 'Qui-Gon');
    expect(modified.friends).toEqual(['Obi-Wan', 'Padmé', 'Dooku', 'Qui-Gon']);
  });


  it('should keep other properties untouched', () => {
    const modified = addFriend(yoda, 'Qui-Gon');
    expect(modified.firstName).toEqual(yoda.firstName);
    expect(modified.lastName).toEqual(yoda.lastName);
    expect(modified.address).toBe(yoda.address);
  });

});

// describe('[07] #removeFriend', () => {

//   fit('should remove the given friend', () => {
//     const modified = removeFriend(yoda, 'Padmé');
//     expect(modified.friends).toEqual(['Obi-Wan', 'Dooku']);
//   });


//   it('should keep other properties untouched', () => {
//     const modified = removeFriend(yoda, 'Padmé');
//     expect(modified.firstName).toEqual(yoda.firstName);
//     expect(modified.lastName).toEqual(yoda.lastName);
//     expect(modified.address).toBe(yoda.address);
//   });

// });
