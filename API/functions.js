const orders = require('./orders.json');

function getAll(){
    return orders;
};

function getOrder(number) {
    for(let i=0; i < orders.length; i++){
        if(orders[i].order_details.order_number === number){
            return orders[i];
        }
    } 
};

function getOrderDetails(){
    for(let i=0; i < orders.length; i++){
        if(orders[i].order_details.order_number === number){
            return orders[i].order_details;
        }
    } 
};

function getShipDetails(){
    for(let i=0; i < orders.length; i++){
        if(orders[i].order_details.order_number === number){
            return orders[i].ship_details;
        }
    } 
};

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

