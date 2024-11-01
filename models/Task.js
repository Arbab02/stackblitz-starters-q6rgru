import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  }
}, {
  timestamps: true
})

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema)
export default Task