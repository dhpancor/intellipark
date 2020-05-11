const db = require("../models/");
const AccessLog = db.AccessLog;
const Response = require("./utils/jsonResponse");
const eagerLoading = require("./utils/eagerLoading");

module.exports = {
    findAll: async function (req, res, next) {
        let data = null;
        try {
            data = await AccessLog.findAll(eagerLoading(req, db));
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    },
    findOne: async function (req, res, next) {
        let data = null;
        try {
            data = await AccessLog.findByPk(req.params.id, eagerLoading(req, db));
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    },
    create: async function (req, res, next) {
        let data = null;
        try {
            data = await AccessLog.create(req.body);
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    },
};
