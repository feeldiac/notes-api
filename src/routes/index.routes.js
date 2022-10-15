import { Router } from 'express'
import Task from '../models/Task'
const router = Router()

router.get('/', async (req, res) => {
    const tasks = await Task.find().lean()
    res.render('index', { tasks })
})

router.post('/tasks/add', async (req, res) => {
    try {
        const task = Task(req.body);
        await task.save()
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findById(id).lean()
        console.log(id);
        res.render('edit', { task })
    } catch (error) {
        console.log(error);
    }
})

//Use POST as PUT
router.post('/edit/:id', async (req, res) => {
    const { id } = req.params
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect('/') //Use redirect to display changes
})

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params
    await Task.findByIdAndDelete(id)
    res.redirect('/')
})

router.get('/toggle_done/:id', async (req, res) => {
    const { id } = req.params
    const task = await Task.findById(id)
    task.done = !task.done
    await task.save()
    res.redirect('/')
})
export default router;
