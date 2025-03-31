const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const recipesRouter = require('./routes/recipes_router');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Recipe API Server' });
});


app.use('/recipe', recipesRouter);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});


app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 