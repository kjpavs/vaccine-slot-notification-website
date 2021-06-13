const express = require('express');
const http = require('http')
const fetch = require('node-fetch')
const axios = require('axios')

const app = express();


app.get('/' , (req,res) => {

})

app.post('/api/slots' , (request,response) => {
axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${request.body.pincode}&date=${request.body.date}`).then(res => {
    console.log(`status code : ${res.statusCode}`)

    console.log(res);
    response.json({data : JSON.stringify(res.data)})
}).catch(error => {
    console.error(error)
})
})

app.listen(5000 , () => {
    console.log('its running on port 5000');
})




