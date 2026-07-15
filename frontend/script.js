const API_URL = 'http://backend:5000/api/tasks';

async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        const list = document.getElementById('taskList');
        list.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            list.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

async function addTask() {
    const input = document.getElementById('taskInput');
    if (!input.value.trim()) return;

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: input.value })
        });
        input.value = '';
        fetchTasks();
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

fetchTasks();