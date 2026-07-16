const API_URL = '/api/tasks'; // Nginx reverse proxy endpoint

async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        const list = document.getElementById('taskList');
        list.innerHTML = '';
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            
            // Task text element
            const textSpan = document.createElement('span');
            textSpan.textContent = task.title;
            textSpan.style.cursor = 'pointer';
            textSpan.style.flexGrow = '1';
            // Click text to toggle complete
            textSpan.onclick = () => toggleTask(task._id);
            
            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = (e) => {
                e.stopPropagation(); // Stops text click from firing
                deleteTask(task._id);
            };
            
            li.appendChild(textSpan);
            li.appendChild(deleteBtn);
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

async function toggleTask(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: 'PUT' });
        fetchTasks();
    } catch (error) {
        console.error('Error toggling task:', error);
    }
}

async function deleteTask(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        fetchTasks();
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

// Initial Load
fetchTasks();