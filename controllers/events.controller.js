const Event = require('../models/event.model');

// создание ивентов
const createEvent = (req, res, next) => {
    const {
        title,
        description,
        startDate,
        startTime,
        endDate,
        endTime,
        isShift,
        ownerId
    } = req.body
    Event.create({
        title,
        description,
        startDate,
        startTime,
        endDate,
        endTime,
        isShift,
        ownerId
    })
    .then((event) => res.status(201).send(event))
    .catch(next);
}

// получение ивентов по айди
const getEvent = (req, res, next) => {
    Event.findById(req.params.eventId)
    .orFail(next)
    .then((event) => {
        res.status(200).send(event)
    })
    .catch(next)
}

// Удаление ивента
const deleteEvent = (req, res, next) => {
    Event.deleteOne({ _id: req.params.eventId })
    .orFail(next)
    .then(() => res.send({ message: 'Event remove' }))
    .catch(next)
}

// получение всех ивентов
const getAllEvents = (req, res, next) => {
    Event.find({})
    .then((events) => res.send(events))
    .catch(next);
}

module.exports = {
    createEvent,
    getEvent,
    getAllEvents,
    deleteEvent
}