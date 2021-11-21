import winston from "winston";
import table from "../table";

const Offer = table.offer;

const createOne = (req, res) => {
    // Validate request
    if (!req.body.title) {
        winston.error("content is empty")
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const offer = {
        title: req.body.title,
        description: req.body.description,
        trending: req.body.trending ? req.body.trending : false
    };

    Offer.create(offer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Offer."
            });
        });
};

const findOne = (req, res) => {
    const id = req.params.id;

    Offer.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                winston.error(`Cannot find Offer with id=${id}.`);
                res.status(404).send({
                    message: `Cannot find Offer with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Offer with id=" + id
            });
        });
};

const updateOne = (req, res) => {
    const id = req.params.id;

    Offer.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Offer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Offer with id=${id}. Maybe Offer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            winston.error("Error updating Offer with id=" + id)
            res.status(500).send({
                message: "Error updating Offer with id=" + id
            });
        });
};

const deleteOne = (req, res) => {
    const id = req.params.id;

    Offer.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Offer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Offer with id=${id}. Maybe Offer was not found!`
                });
            }
        })
        .catch(err => {
            winston.error("Could not delete Offer with id=" + id)
            res.status(500).send({
                message: "Could not delete Offer with id=" + id
            });
        });
};

export default {
    createOne,
    findOne,
    updateOne,
    deleteOne
}