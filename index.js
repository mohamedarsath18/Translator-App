const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB ("trans-web" replace your database name)
mongoose.connect('mongodb://localhost:27017/trans-web', { useNewUrlParser: true, useUnifiedTopology: true });

// Import the mongoose model
const collection = require('./login-signup/src/config');

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up static files for login-signup and translator-web
app.use('/login-signup', express.static(path.join(__dirname, 'login-signup')));
app.set('views', path.join(__dirname, 'login-signup', 'views'));
app.use('/translator-web', express.static(path.join(__dirname, 'translator-web')));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Login page
app.get('/', (req, res) => {
    res.render('login');
});

// Signup page
app.get('/signup', (req, res) => {
    res.render('signup');
});

// Login User
app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            return res.send('Username not found');
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
            res.redirect('/translator-web');
        } else {
            res.send('Wrong password');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.send('Wrong details');
    }
});

// Signup User
app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };

    try {
        const existingUser = await collection.findOne({ name: data.name });
        if (existingUser) {
            return res.send('User already exists. Please choose a different username.');
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;

        const newUser = await collection.create(data);
        console.log('New user created:', newUser);

        // Redirect to the login page after successful signup
        res.redirect('/');

    } catch (error) {
        console.error('Error during signup:', error);
        res.send('An error occurred during signup.');
    }
});



// Translator-web functionality
app.get('/translator-web', (req, res) => {
    // In this section, you can add logic specific to translator-web

    // For example, you can render a page using EJS
    res.render('translator-web');

    // Or, if you want to send data to the translator-web page
    // Replace the following with your actual data retrieval logic
    const translationData = {
        text: 'Hello, world!',
        translatedText: 'Hola, mundo!',
    };

    res.render('translator-web', { data: translationData });
    res.sendFile(path.join(__dirname, 'translator-web', 'index.html'));
});

// Set the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
