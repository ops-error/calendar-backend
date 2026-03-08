const router = require('express').Router();
const {
    createEvent,
    getEvent,
    getAllEvents,
    deleteEvent
} = require('../controllers/events.controller');

router.get('/event/all', getAllEvents);
router.post('/event/create', createEvent);

router.get('/event/:eventId', getEvent);
router.delete('/event/:eventId', deleteEvent);

module.exports = router;