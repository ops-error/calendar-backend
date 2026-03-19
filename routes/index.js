const router = require('express').Router();
const {
    createEvent,
    getEvent,
    getAllEvents,
    deleteEvent
} = require('../controllers/events.controller');

const {
    signin,
    signup
} = require('../controllers/users.controller');

const authMiddleware = require('../middlewares/auth.middleware');

router.get('/event/all', authMiddleware, getAllEvents);
router.post('/event/create', authMiddleware, createEvent);

router.post('/signin', signin);
router.post('/signup', signup);

router.get('/event/:eventId', authMiddleware, getEvent);
router.delete('/event/:eventId', authMiddleware, deleteEvent);

module.exports = router;