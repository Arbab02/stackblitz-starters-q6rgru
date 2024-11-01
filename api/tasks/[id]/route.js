import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function PUT(request, { params }) {
  try {
    const client = await clientPromise
    const db = client.db("tasks_db")
    const { title, description, status } = await request.json()
    
    const task = await db.collection("tasks").updateOne(
      { _id: new ObjectId(params.id) },
      { $set: { title, description, status, updatedAt: new Date() } }
    )
    
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const client = await clientPromise
    const db = client.db("tasks_db")
    
    await db.collection("tasks").deleteOne({ _id: new ObjectId(params.id) })
    
    return NextResponse.json({ message: 'Task deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}