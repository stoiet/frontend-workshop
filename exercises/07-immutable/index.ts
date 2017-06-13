export type User = {
  firstName: string;
  lastName: string;
  address: {
    street: string,
    zip: number
  };
  friends: string[];
}

export function modifyFirstName(user: User, newName: string): User {
}

export function modifyStreet(user: User, newStreet: string): User {

}

export function addFriend(user: User, newFriend: string): User {

}

export function removeFriend(user: User, friendToRemove: string): User {

}
