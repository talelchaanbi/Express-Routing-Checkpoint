const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Working hours middleware (Monday-Friday, 9AM-5PM)
const workingHoursMiddleware = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // Sunday = 0
  const hour = now.getHours();

  const isWeekday = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWeekday && isWorkingHour) {
    return next();
  }

  return res.status(503).render('off-hours', {
    pageTitle: 'Come Back Soon',
    message: 'Our website is available from 9 AM to 5 PM, Monday to Friday.',
  });
};

app.use(workingHoursMiddleware);

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Welcome to Our Company',
    page: 'home',
  });
});

app.get('/services', (req, res) => {
  res.render('services', {
    pageTitle: 'Our Services',
    page: 'services',
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: 'Contact Us',
    page: 'contact',
  });
});

// Fallback route
app.use((req, res) => {
  res.status(404).render('not-found', {
    pageTitle: 'Page Not Found',
    page: null,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
