# Bike Cammers Map Api

An API to store youtube channel data and metadata.

---

## Links

The front-end is deployed here:<br>


The back-end is deployed here:<br>


The front-end repo can be found here:<br>


The back-end deployed repo can be found here:<br>


---

## API end-points

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out/:id`        | `users#signout`   |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| GET    | `/channels`            | `channels#index`  |
| POST   | `/channels`            | `channels#create` |
| GET    | `/channels/:id`        | `channels#show`   |
| PATCH  | `/channels/:id`        | `channels#update` |
| DELETE | `/channels/:id`        | `channels#destroy`|


---

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
