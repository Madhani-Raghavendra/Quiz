import { Questions } from "../models/quesSchema.js"
import questions, { answers } from "../database/data.js"
import Results from "../models/reaultSchema.js"

export async function getQuestion(req, res) {
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (err) {
        res.json({err})
    }
}

export async function insertQuestion(req, res) {
    try {
        Questions.insertMany({ questions: questions, answers: answers })
    } catch (err) {
        res.json({err})
    }
}

export async function dropQuestion(req, res) {
    try {
        Questions.deleteMany()
        res.json({ msg: 'deleted' })
    } catch (err) {
        res.json({err})
    }
}

export async function getResult(req, res) {
    try {
        const r = await Results.find()
        res.json(r)
    } catch (err) {
        res.json({err})
    }
}

export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body
        if (!username && !result)
            throw new Error('Data not provided....!')
        Results.create({ username, result, attempts, points, achived })
        res.json({ msg: 'Result saved Successfully....!' })
    } catch (err) {
        res.json({err})
    }
}

export async function dropResult(req, res) {
    try {
        Results.deleteMany()

    } catch (err) {
        res.json({err})
    }
}

