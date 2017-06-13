import { addZipCodes, firstWithFriends, names, onlyWithFriends, User, usersWithFriends, ZipCode } from './';
import * as freeze from 'deep-freeze-node';
import { Subject } from 'rxjs';

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

const jarJar = freeze({
  firstName: 'Jar',
  lastName: 'Binks',
  address: {
    street: 'Tatooine',
    zip: 11
  },
  friends: []
});

describe('[08] #names', () => {

  //http://rxmarbles.com/#map
  it('should give back the first names from the given stream', () => {
    const user = new Subject<User>();
    let lastTriggered;
    names(user).subscribe(event => lastTriggered = event);

    user.next(darthVader);
    expect(lastTriggered).toEqual('Darth');

    user.next(yoda);
    expect(lastTriggered).toEqual('Yoda');
  });

});

describe('[08] #onlyWithFriends', () => {

  //http://rxmarbles.com/#filter
  it('should give back the users with friends', () => {
    const user = new Subject<User>();
    let lastTriggered;
    onlyWithFriends(user).subscribe(event => lastTriggered = event);

    user.next(darthVader);
    expect(lastTriggered).toEqual(darthVader);

    user.next(jarJar);
    expect(lastTriggered).toEqual(darthVader);

    user.next(yoda);
    expect(lastTriggered).toEqual(yoda);
  });

});

describe('[08] #firstWithFriends', () => {

  //http://rxmarbles.com/#filter
  //http://rxmarbles.com/#first
  it('should give back the first user with friends', () => {
    const user = new Subject<User>();
    let lastTriggered;
    firstWithFriends(user).subscribe(event => lastTriggered = event);

    user.next(jarJar);
    expect(lastTriggered).toBeUndefined();

    user.next(darthVader);
    expect(lastTriggered).toEqual(darthVader);

    user.next(yoda);
    expect(lastTriggered).toEqual(darthVader);
  });

});

describe('[08] #usersWithFriends', () => {

  //http://rxmarbles.com/#map
  it('should give back users with friends', () => {
    const users = new Subject<User[]>();
    let lastTriggered;
    usersWithFriends(users).subscribe(event => lastTriggered = event);

    users.next([jarJar, darthVader]);
    expect(lastTriggered).toEqual([darthVader]);

    users.next([darthVader, yoda]);
    expect(lastTriggered).toEqual([darthVader, yoda]);

    users.next([yoda, darthVader, jarJar]);
    expect(lastTriggered).toEqual([yoda, darthVader]);
  });

});

describe('[08] #addZipCodes', () => {

  // http://rxmarbles.com/#combineLatest
  it('should add zip code to the users', () => {
    const users = new Subject<User[]>();
    const zipCodes = new Subject<ZipCode[]>();
    let lastTriggered;
    addZipCodes(users, zipCodes).subscribe(event => lastTriggered = event);

    users.next([darthVader]);
    expect(lastTriggered).toBeUndefined();

    zipCodes.next([{ code: 9876, asString: 'Star Wars' }, { code: 1, asString: 'Avatar' }]);
    expect(lastTriggered).toEqual([ { firstName: 'Darth', zip: 'Star Wars' } ]);

    zipCodes.next([{ code: 9876, asString: 'Star Trek' }, { code: 1, asString: 'Avatar' }]);
    expect(lastTriggered).toEqual([ { firstName: 'Darth', zip: 'Star Trek' } ]);

    users.next([yoda]);
    expect(lastTriggered).toEqual([ { firstName: 'Yoda', zip: 'Avatar' } ]);
  });

});
