const db = require("../models/");
const User = db.User;
const Response = require("./utils/jsonResponse");

module.exports = {
    findAll: async function (req, res, next) {
        let data = null;
        try {
            data = await User.findAll();
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    },
    findOne: async function (req, res, next) {
        let data = null;
        try {
            data = await User.findByPk(req.params.id);
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    },
    create: async function (req, res, next) {
        let data = null;
        try {
            data = await User.create(req.body);
        } catch (e) {
            console.log(e)
        }
        res.json(new Response(Boolean(data), data));
    },
    update: async function (req, res, next) {
        let data = null;
        try {
            data = await User.update(req.params, {
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
            data = await User.destroy({
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
