const express = require('express');

const exphbs = require('express-handlebars');
const blogs = require('./blog');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Logger Middleware
const logger = (req, res, next) => {
  console.log('Hello');
  next();
};

// Initialize logger
app.use(logger);

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route to homepage
app.get('/', (req, res) =>
  res.render('index', {
    title: 'The Nia Blog',
    blogs
  })
);

// JSON output at endpoint /api/blogs

app.get('/api/blogs', (req, res) => res.json(blogs));

app.post('/api/blogs', (req, res) => {
  const newBlogPost = {
    blogTitle: req.body.blogTitle,
    blogPost: req.body.blogPost
  };
  if (!newBlogPost.blogTitle || !newBlogPost.blogPost) {
    return res.status(400).json({ msg: 'Please include a blog title and post.' });
  }
  blogs.push(newBlogPost);
  res.redirect('/');
});

// app.use('/api/blogs');

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('path.joing(__dirname', 'public');
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
