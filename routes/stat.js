import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

router.get('/user', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT userCount FROM stat LIMIT 1');
    if (rows.length > 0) {
      res.json({ userCount: rows[0].userCount });
    } else {
      res.status(404).json({ error: 'User count not found' });
    }
  } catch (error) {
    console.error('Error fetching user count:', error);
    res.status(500).json({ error: 'Failed to fetch user count' });
  }
});

router.post('/user', async (req, res) => {
  try {
    await pool.query('UPDATE stat SET userCount = userCount + 1');
    const [rows] = await pool.query('SELECT userCount FROM stat LIMIT 1');
    res.json({ userCount: rows[0].userCount });
  } catch (error) {
    console.error('Error incrementing user count:', error);
    res.status(500).json({ error: 'Failed to increment user count' });
  }
});

export default router;
