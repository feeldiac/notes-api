import Task from "../models/Task"

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean()
    res.render('index', { tasks })
}

export const createTask = async (req, res) => {
    try {
        const task = Task(req.body);
        await task.save()
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

export const renderEdit = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findById(id).lean()
        console.log(id);
        res.render('edit', { task })
    } catch (error) {
        console.log(error);
    }
}

export const editTask = async (req, res) => {
    const { id } = req.params
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect('/') //Use redirect to display changes
}

export const deleteTask = async (req, res) => {
    const { id } = req.params
    await Task.findByIdAndDelete(id)
    res.redirect('/')
}

export const toggleTask = async (req, res) => {
    const { id } = req.params
    const task = await Task.findById(id)
    task.done = !task.done
    await task.save()
    res.redirect('/')
}