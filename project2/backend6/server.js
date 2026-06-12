require('dotenv').config();
const connectDB = require('./db/db');
const app = require('./src/app')

connectDB()

app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})