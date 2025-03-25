const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key';

app.use(cors());
app.use(bodyParser.json());

const users = [{ username: 'user1', password: bcrypt.hashSync('password123', 10) }];

// Login API
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// Dashboard API (Protected)
app.get('/api/dashboard', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the dashboard', user: req.user });
});

// Map View API (Sample Data)
app.get('/api/map', (req, res) => {
    res.json({ locations: [
        { id: 1, name: 'Location 1', lat: 37.7749, lon: -122.4194 },
        { id: 2, name: 'Location 2', lat: 40.7128, lon: -74.0060 }
    ] });
});

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







