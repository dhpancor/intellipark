module.exports = function(req, db) {
    if (Object.keys(req.query).length === 0 && req.query.constructor === Object) {
        return {}
    }
    else {
        const query = {
            include: []
        };

        if ('withAll' in req.query)
            query.include.push({ all: true, nested: true });
        else {
            if ('withUser' in req.query)
                query.include.push(db.User);

            if ('withAccessLog' in req.query)
                query.include.push(db.AccessLog);

            if ('withVehicle' in req.query)
                query.include.push(db.Vehicle);

        }

        return query;
    }
};
