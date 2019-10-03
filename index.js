const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const Product = require('./models/Product')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
	process.env.DB_CONNECTION, 
	{
		useNewUrlParser : true,
		useUnifiedTopology: true
	}
)

//routes
const resultsLimit = new Number(process.env.RESULTS_LIMIT) || 25;

app.get('/', async (req, res) => {
	try{
		const products = await Product.find()
		.limit(resultsLimit)
		.sort('title');
		res.json(products)
	}catch(err){
		res.json({message: err})
	}
})

app.listen(
	process.env.PORT, 
	() => console.log(`\n[+] Listening on ${process.env.PORT}...\n`)
)