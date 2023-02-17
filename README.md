# Full Stack Software Engineer Candidate Exercise by Ahmad Sofwan
This is a barebone CRUD GraphQL backend for managing merchants.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- GraphQL
- Knex.js
- PostgreSQL

## Installation

1. Clone the repository to your local machine using `git clone`.
2. Install the necessary dependencies by running `npm install`.
3. Create a new PostgreSQL database for the project.
4. Create a `.env` file in the root directory and add the following environment variables:
```
DB_HOST=<your database host>
DB_USER=<your database username>
DB_PASSWORD=<your database password>
DB_NAME=<your database name>
```

5. Run the database migrations by running `npm run migrate`.
6. Seed the database with sample data by running `npm run seed`.

## Usage

To start the server, run `npm start`. The server will be available at `http://localhost:3000`.

## API Documentation

The API supports the following operations:

| Type   | Function                                            |
|--------|-----------------------------------------------------|
| Mutate | Create new merchant                                 |
| Query  | Fetch merchants, with pagination and sorting        |
| Query  | Fetch merchant by ID                                |
| Mutate | Update a merchant                                   |
| Mutate | Toggle “Is Active” in bulk                          |

The schema for the merchant object is as follows:

| Field               | Type                    |
|---------------------|------------------------|
| id                  | String                  |
| merchant_name       | String                  |
| latitude            | Float                   |
| longitude           | Float                   |
| is_active           | Boolean (default false) |
| recorded_date_time  | Date & Time             |

For more information on the API, please refer to the GraphQL schema in the `schema.graphql` file.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
