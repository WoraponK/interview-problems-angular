const express = require('express');
const uuid = require('uuid')
const redis = require('redis');
const cors = require('cors');
const bp = require('body-parser')

const app = express();
const client = redis.createClient();

// Connect to Redis
client.connect().then(() => console.log('Connected to Redis')).catch(err => console.error('Redis connection error:', err));

app.use(express.json());
app.use(cors());
app.use(bp.json());

app.get('/todos', async (req, res) => {
  try {
    const todos = await client.hVals('todos');
    const parsedTodos = todos.map(todo => JSON.parse(todo));
    res.json(parsedTodos);
  } catch (err) {
    console.error('Error fetching todos:', err);
    res.status(500).json({ error: 'Failed to retrieve todos' });
  }
});

app.post('/todos', async (req, res) => {
  try {
    const { task_title, task_complete = false } = req.body; // Use default value for task_complete

    if (!task_title) {
      res.status(400).send({ error: 'Invalid todo data: task_title is required' });
      return;
    }

    const todo_id = uuid.v1();

    await client.hSet('todos', task_title, JSON.stringify({
      id: todo_id,
      task_title,
      task_complete
    }));

    res.status(201).send({ message: 'Todo added successfully' });
  } catch (err) {
    console.error('Error adding todo:', err);
    res.status(500).json({ error: 'Failed to add todo' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
