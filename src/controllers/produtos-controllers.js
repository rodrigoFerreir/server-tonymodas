'use strict';

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.get = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id,
        itens: req.body
    });
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send(req.body);
};