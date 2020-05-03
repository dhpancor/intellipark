const db = require("../models/");
const Vehicle = db.Vehicle;
const Response = require("./utils/jsonResponse");
const eagerLoading = require("./utils/eagerLoading");

module.exports = {
    findAll: async function (req, res, next) {
        let data = null;
        try {
            data = await Vehicle.findAll(eagerLoading(req, db));
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    },
    findOne: async function (req, res, next) {
        let data = null;
        try {
            data = await Vehicle.findByPk(req.params.id, eagerLoading(req, db));
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    },
    create: async function (req, res, next) {
        let data = null;
        try {
            data = await Vehicle.create(req.body);
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    },
    update: async function (req, res, next) {
        let data = null;
        try {
            data = await Vehicle.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    },
    delete: async function (req, res, next) {
        let data = null;
        try {
            data = await Vehicle.destroy({
                where: {
                    id: req.params.id
                }
            });
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    }
};
