const express = require('express');
const dotenv = require('dotenv');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const costumerRoutes = require('./routes/customerRouters');
const restaurantRoutes = require('./routes/restaurantRoutes');
const reservationRoutes = require('./routes/reservationController')

dotenv.config();

const app = express();


app.use(express.json())

app.use('/api/customers', costumerRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/reservations', reservationRoutes);

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
    console.log(`Swagger docs disponibles en http://localhost:${PORT}/api-docs`);
});


