import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("tasks_db")
    const tasks = await db.collection("tasks").find({}).toArray()
    return NextResponse.json(tasks)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise
    const db = client.db("tasks_db")
    const { title, description, status } = await request.json()
    
    const task = await db.collection("tasks").insertOne({
      title,
      description,
      status,
      createdAt: new Date()
    })
    
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}