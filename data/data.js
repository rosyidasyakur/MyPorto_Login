const express = require ('express');
const {Pool} = require ('pg');
const bcrypt = require ('bcrypt');
const path = require('path');
const dotenv = require('dotenv').config();
const app = express();

const pool = new Pool({
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    database : process.env.DB_NAME,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
});

//middleware
app.use (express.urlencoded({ extended : true }));
app.use (express.json());



//ini route nya
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname , '..', 'public', 'depan.html'));
});

app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname , '..', 'public', 'daftar.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname , '..', 'public', 'dashboard.html'));
});


//endpoint nya

app.post('/login', async (req, res) => {
    const {username, password} = req.body;

try {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (user.rows.length === 0) {
        return res.status(400).send('Username atau password salah!');
    }
    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
        return res.status(400).send('Username atau password salah!');
    }
    res.redirect('/dashboard');
} catch (error) {
    console.error('Error saat registrasi:', error);
    res.status(500).send('Terjadi kesalahan server.');
    
}    
});

    
app.post('/data_user', async (req, res) => {
    const {username, password} = req.body;

try {
    const userExist = await pool.query('SELECT * FROM users WHERE username =$1', [username]);
    if (userExist.rows.length > 0) {
        return res.status(400).send('Username sudah terdaftar!');
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const queryText = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
    const result = await pool.query(queryText, [username, hashedPassword]);
    res.redirect('/');
} catch (error) {
    console.error('Error saat registrasi:', error);
    res.status(500).send('Terjadi kesalahan server.');
}
});

app.listen(3000, () => {
    console.log('my server jalan di port 3000 coeg');
});
