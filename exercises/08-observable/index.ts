import { Observable } from 'rxjs';

export type User = {
  firstName: string;
  lastName: string;
  address: {
    street: string,
    zip: number
  };
  friends: string[];
}

export type ZipCode = {
  code: number;
  asString: string;
}

export type NameWithZip = {
  firstName: string;
  zip: string;
}

export function names(user$: Observable<User>): Observable<string> {
}

export function onlyWithFriends(user$: Observable<User>): Observable<User> {
}

export function firstWithFriends(user$: Observable<User>): Observable<User> {
}

export function usersWithFriends(users$: Observable<User[]>): Observable<User[]> {
}

export function addZipCodes(users$: Observable<User[]>, zipCodes$: Observable<ZipCode[]>): Observable<NameWithZip[]> {
}
