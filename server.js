const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const cors=require('cors');
const funnelRouter = require('./routes/funnel');

// dotenv.config();

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://divyabonda462:Divya123@cluster0.cx34y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

app.use(express.json());
app.use('/funnel', funnelRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
