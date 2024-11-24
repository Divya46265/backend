const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const FunnelData = require('./models/FunnelData');

// dotenv.config();

mongoose.connect('mongodb+srv://divyabonda462:Divya123@cluster0.cx34y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB Atlas');

  // Remove existing data
  await FunnelData.deleteMany({});

  const data = [
    // Last 7 days
    { stage: 'Awareness', value: 900, date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000) },
    { stage: 'Interest', value: 800, date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000) },
    { stage: 'Consideration', value: 700, date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000) },
    { stage: 'Intent', value: 600, date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000) },
    { stage: 'Evaluation', value: 500, date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000) },
    { stage: 'Purchase', value: 400, date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000) },
    // ... repeat for other days
    // Last 15 days
    { stage: 'Awareness', value: 850, date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) },
    { stage: 'Interest', value: 750, date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) },
    { stage: 'Consideration', value: 650, date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) },
    { stage: 'Intent', value: 550, date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) },
    { stage: 'Evaluation', value: 450, date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) },
    { stage: 'Purchase', value: 350, date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) },
    // ... repeat for other days
    // Last 30 days
    { stage: 'Awareness', value: 800, date: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000) },
    { stage: 'Interest', value: 700, date: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000) },
    { stage: 'Consideration', value: 600, date: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000) },
    { stage: 'Intent', value: 500, date: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000) },
    { stage: 'Evaluation', value: 400, date: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000) },
    { stage: 'Purchase', value: 300, date: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000) },
    // ... repeat for other days
  ];

  await FunnelData.insertMany(data);
  console.log('Sample data inserted successfully');

  db.close();
});
