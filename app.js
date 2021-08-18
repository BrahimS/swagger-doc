console.log('Hello express')
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      description : "Testing My API",
      version : "V1.2.3",
      title : "The only API you'll ever need to learn about me",
    },
    servers: ['http://localhost:5000']
  },
  apis:['app.js']
}

const app = express()

const port = process.env.PORT || 5000

const swaggerDos = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDos));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Get all the customers
 *    responses:
 *      '200':
 *        description: A Successful response
 */


// Routes
app.get("/customers", (req, res) => {
  res.send('Customers routes...');
});

app.listen(port, () => console.log('Hello swagger documentation'))