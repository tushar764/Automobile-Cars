// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcryptjs'); 
const initializePassport = require("./passport1");
const flash = require("express-flash");

const passport = require("passport");



// Connect to MongoDB
mongoose.connect('mongodb://localhost/contactejs', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define Mongoose schemas
const contactSchema = new mongoose.Schema({
  Name: String,
  Message: String,
  Age: String,
  Gender: String,
});

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);
const User = mongoose.model('User', loginSchema); 

// Set up Pug as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files(middle ware call back functions to http incoming requests)
app.use('/static', express.static('static'));


// index services

// function scrollToServices() {
//   document.getElementById('index-services').scrollIntoView({ behavior: 'smooth' });
// }

// Set up sessions
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key', // Use environment variable or fallback to default
  resave: false,
  saveUninitialized: false,
}));



// Passport initialization
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post('/', (req, res) => {
  const { name, message, age, gender } = req.body;

 

  const params = { message: 'Your form has been submitted successfully' };
  res.status(200).render('index', params);
});

app.get("/home", (req, res) => {
  res.render("home");
});


app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post('/contact', (req, res) => {
  const myData = new Contact(req.body);
  myData.save()
    .then(() => res.send("This is saved"))
    .catch(() => res.status(400).send("This is not saved"));
});







app.get("/services", (req, res) => {
  res.render("services");
});



app.post('/submit-form', (req, res) => {
  console.log(req.body);
  res.send('Form submitted successfully');
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", passport.authenticate("local", {

  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
}));


const users = [];
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(users);

    res.redirect("/login");
  } catch (e) {
    console.log(e);
    res.redirect("/register");
  }
});

app.get('/register', (req, res) => {
  res.render('register'); 
});

app.get('/browse', (req, res) => {
  res.render('browse'); 
});
app.get('/production', (req, res) => {
  res.render('production'); 
});
app.get('/services1', (req, res) => {
  res.render('services1'); 
});
// 
app.get('/services2', (req, res) => {
  res.render('services2');  
});
// 
app.get('/resources1', (req, res) => {
  res.render('resources1'); // 
});
app.get('/resources2', (req, res) => {
  res.render('resources2'); 
});
// 


app.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});
