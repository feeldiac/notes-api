import { Router } from 'express'
import { renderTasks, createTask, renderEdit, editTask, deleteTask, toggleTask } from '../controllers/tasks.controller'
const router = Router()

router.get('/', renderTasks)

router.post('/tasks/add', createTask)

router.get('/tasks/edit', renderEdit)

//Use POST as PUT
router.post('/tasks/:id/edit', editTask)

router.get('/tasks/:id/delete', deleteTask)

router.get('/tasks/:id/toggle_done', toggleTask)

export default router;
