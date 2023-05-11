# proBack

## Installation

To install the dependencies for the backend, run the following command:

1. Clone the repository: `git clone https://github.com/kpatel0170/proBack.git`
2. Install dependencies: `npm install`
3. Set up environment variables:
    - Create a `.env` file in the root directory of the project.
    - Copy the contents of `.env.example` into `.env` and fill in the required values.
4. Start the server: `npm start`
5. Navigate to `http://localhost:5000/docs` in your browser to view API documentation.


## Technologies
- `Node.js` - An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.
- `Express.js` - A minimalist web framework for Node.js that provides a set of features for building web and mobile applications.
- `MongoDB`- A document-based NoSQL database that provides high scalability, flexibility, and performance.
- `TypeScript` - A typed superset of JavaScript that compiles to plain JavaScript and provides static type-checking at compile time.
- `Postman` - A popular API development tool that allows developers to design, build, and test APIs.
- `Zod` - A TypeScript-first schema validation library that provides a simple and intuitive API for defining and validating data.
- `Jest` - A JavaScript testing framework that provides a simple and powerful way to test JavaScript code. 
- `Prometheus` - A popular open-source monitoring system and time-series database that collects metrics from monitored targets and stores them in a time-series database.
- `Swagger UI` - An open-source tool for generating interactive API documentation that allows users to explore and test APIs directly from the documentation.
- `Docker` - A popular platform for building, shipping, and running applications in containers.
- `docker-compose` - A tool for defining and running multi-container Docker applications.
- `Caddy` - A fast, easy-to-use web server that provides automatic HTTPS encryption and other features.
- `DigitalOcean` - A cloud computing platform that provides scalable infrastructure services for deploying and managing applications in the cloud.


## Project Directory Structure

Below is the directory structure of the project:

```
├── config/
│   ├── default.ts
│   └── production.ts
├── src/
│   ├── controller/
|   │   ├── product.controller.ts
|   │   ├── session.controller.ts
|   │   └── user.controller.ts
│   ├── middleware/
|   │   ├── deserializedUser.ts
|   │   ├── requiredUser.ts
|   │   └── validateUser.ts
│   ├── models/
|   │   ├── product.model.ts
|   │   ├── session.model.ts
|   │   └── user.model.ts
│   ├── schema/
|   │   ├── product.schema.ts
|   │   ├── session.schema.ts
|   │   └── user.schema.ts
│   ├── service/
|   │   ├── product.service.ts
|   │   ├── session.service.ts
|   │   └── user.service.ts
│   └──utils/
|   │   ├── connect.ts
|   │   ├── jwt.utils.ts
|   │   ├── logger.ts
|   │   ├── metrics.ts
|   │   └── swagger.ts
|   ├── app.ts
|   └── routes.ts
├── .env-sample
├── docker-compose.yml
├── Dokerfile
├── package-lock.json
├── package.json
└── tsconfig.json
```



## Data flow
![](./diagrams/data-flow.png)


## Access & refresh token flow
![](./diagrams/refresh-token-flow.png)

## Authors
 **Kartik Patel** - [@kpatel0170](https://github.com/kpatel0170)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
