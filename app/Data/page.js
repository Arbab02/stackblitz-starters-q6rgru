'use client'

import { useState, useEffect } from 'react'
import TaskForm from '@/components/TaskForm'

export default function Data() {
  const [tasks, setTasks] = useState([])
  const [editing, setEditing] = useState(null)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('/api/tasks')
    const data = await res.json()
    setTasks(data)
  }

  const createTask = async (taskData) => {
    await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
    fetchTasks()
  }

  const updateTask = async (id, taskData) => {
    await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
    setEditing(null)
    fetchTasks()
  }

  const deleteTask = async (id) => {
    await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    })
    fetchTasks()
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Task Manager</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editing ? 'Edit Task' : 'Create New Task'}
        </h2>
        <TaskForm
          onSubmit={editing ? 
            (data) => updateTask(editing._id, data) : 
            createTask
          }
          initialData={editing}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        {tasks.map((task) => (
          <div
            key={task._id}
            className="border p-4 rounded shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
                <span className="inline-block px-2 py-1 text-sm rounded bg-gray-100 mt-2">
                  {task.status}
                </span>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => setEditing(task)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
