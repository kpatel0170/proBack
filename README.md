# proBack


## Concepts
* REST API principals
    * CRUD
    * HTTP methods
* JWT & refresh tokens
* Request validation
* API Testing
* Documentation
* Deployment

## Technologies
* Node.js
* MongoDB with Mongoose - Database
* TypeScript
* Express.js & Express.js middleware
* Zod - Validation
* Testing the API with Jest
* Add Prometheus metrics to the API
* Swagger UI - API Documentation
* Docker (image)
* docker-compose (container)
* Caddy - Web server
* DigitalOcean

## Structure

   - app.ts - Setup express JS
   - routes.ts - Create routes function
   - utils/connect.ts - Setup database connection
   - utils/legger.ts - Setup logger
   - schema/ - Validate request middleware
   - model/user.model -  user model
   - User CRUD - user endpoint
   - Session CRUD -  user session
   - Product CRUD - product endpoint
   - middleware/deserializedUser.ts - Deserialize user middleware (refresh tokens)
   - middleware/requiredUser.ts - Require user middleware
   - models/product.model - product model



## Data flow
![](./diagrams/data-flow.png)


## Access & refresh token flow
![](./diagrams/refresh-token-flow.png)

