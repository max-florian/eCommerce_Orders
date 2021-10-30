// Se obtienen las ordenes a partir del archivo json
const orders = require('./orders.json');

// Función que devuelve todas las ordenes
function getAll(){
    return orders;
};

// Función que obtiene una orden en especifico segun su numero de orden.
function getOrder(number) {
    for(let i=0; i < orders.length; i++){
        if(orders[i].order_details.order_number === number){
            return orders[i];
        }
    } 
};

// Función que obtiene los detalles de la orden de acuerdo a el numero de orden
function getOrderDetails(){
    for(let i=0; i < orders.length; i++){
        if(orders[i].order_details.order_number === number){
            return orders[i].order_details;
        }
    } 
};

// Función que obtiene los detalles del envio de acuerdo a el numero de orden
function getShipDetails(){
    for(let i=0; i < orders.length; i++){
        if(orders[i].order_details.order_number === number){
            return orders[i].ship_details;
        }
    } 
};

// Función que obtiene los detalles del pago de acuerdo a el numero de orden
function getPaymentDetails(){
    for(let i=0; i < orders.length; i++){
        if(orders[i].order_details.order_number === number){
            return orders[i].payment_details;
        }
    } 
};

module.exports = { 
    getAll,
    getOrder,
    getOrderDetails,
    getShipDetails,
    getPaymentDetails
};

