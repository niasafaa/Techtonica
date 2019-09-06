const express = require('express');

const app = express();

PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
