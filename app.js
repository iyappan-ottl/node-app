const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crud-example', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// const itemRoutes = require('./routes/Item.routes');
// app.use('/api', itemRoutes);
// const authRoutes = require('./routes/authRoutes');
// app.use('/api/auth', authRoutes);
const port = 3001;
app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));