const express = require('express');
const cors = require('cors');
var bodyparser = require('body-parser');
var jsonparser = bodyparser.json();

require('dotenv').config()

const port = process.env['PORT'] || 8082;
const ip = process.env['IP'] || "localhost";

const app = express().use(cors())

const { getOrder, getAll, getOrderDetails, getShipDetails, getPaymentDetails } = require('./functions');

// Endpoint para obtener todas las ordenes.
app.get('/all_orders', jsonparser, (req, res) => {
  let code = 200;
  let data = getAll();
  res.status(code).json(data);
  });

// Endpoint para obtener una orden en especifico segun su numero de orden.
app.get('/get_order/:number', jsonparser, (req, res) => {
    let code = 200;
    let number = req.params['number'];
    let data = getOrder(number);
    res.status(code).json(data);
  });

// Endpoint para obtener los detalles de la orden de acuerdo a el numero de orden
app.get('/get_order_details/:number', jsonparser, (req, res) => {
    let code = 200;
    let number = req.params['number'];
    let data = getOrderDetails(number);
    res.status(code).json(data);
  });

// Endpoint para obtener los detalles del envio de acuerdo a el numero de orden
app.get('/get_ship_details/:number', jsonparser, (req, res) => {
    let code = 200;
    let number = req.params['number'];
    let data = getShipDetails(number);
    res.status(code).json(data);
  });

// Endpoint para obtener los detalles del pago de acuerdo a el numero de orden
app.get('/get_payment_details/:number', jsonparser, (req, res) => {
    let code = 200;
    let number = req.params['number'];
    let data = getPaymentDetails(number);
    res.status(code).json(data);
  });

app.listen(port, () => {
  console.log(`Aplicación corriendo en: http://${ip}:${port}`)
})