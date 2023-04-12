type Email = string;
type ID = number;
type PhoneNumber = string;
type Website = string;

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

export interface Comment {
    postId: ID,
    id: ID,
    name: string,
    email: Email,
    body: string
}

export interface Coordinates {
    lat: string,
    lng: string
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Coordinates
}

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
  }

export interface User {
    id: ID,
    name: string,
    username: string,
    email: Email,
    address: Address,
    phone: PhoneNumber,
    website: Website,
    company: Company
  }

