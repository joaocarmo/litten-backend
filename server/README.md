# mypets

> Finding new friends for furry friends

## Models

### Users

| Field               | Type    | Attributes                         |
| ------------------- | ------- | ---------------------------------- |
| email               | string  | index, unique, lowercase, required |
| password            | string  | required                           |
| firstName           | string  | required                           |
| lastName            | string  | required                           |
| phoneNumber         | string  | index, unique                      |
| avatar              | string  |                                    |
| organization        | boolean |                                    |
| emailVerified       | boolean |                                    |
| phoneNumberVerified | boolean |                                    |
