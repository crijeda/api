var express = require('express'),
	restful = require('node-restful'),
	mongoose = restful.mongoose;


var app = express()
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
})

var basicAuth = require('express-basic-auth')
 
app.use(basicAuth({
    users: { 'jose.torres@abcdin.cl/': 'passworddeprueba' }
}))

mongoose.connect('mongodb://localhost/abcdin');

var ProductSchema = mongoose.Schema({
	name:String,
	sku: String,
	price: Number
});

var Products = restful.model('products', ProductSchema);
Products.methods(['get','put','post','delete']);
Products.register(app,'/algo/pruebacristian/TOD-28');

app.listen(3000);
