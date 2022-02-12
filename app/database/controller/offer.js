import winston from "winston";
import table from "../table";

const Offer = table.offer;

const sendError = (res, message = "", statusCode = 500) => {
  winston.error(message);
  res.status(statusCode).send({
    message: message,
  });
};
const createOne = (req, res) => {
  // Validate request
  if (!req.body.title) {
    winston.error("content is empty");
    sendError(res, "Content can not be empty!", 400);
    return;
  }

  /* const offer = {
        title: req.body.title,
        description: req.body.description,
        trending: req.body.trending ? req.body.trending : false
    }; */
  const offer = {
    code: req.body.code,
    title: req.body.title,
    url: req.body.url,
    expiry: req.body.expiry,
    startDate: req.body.startDate,
    amount: req.body.amount,
    categories: req.body.categories,
  };

  Offer.create(offer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      let message =
        err.message || "Some error occurred while creating the Offer.";
      sendError(res, message);
    });
};

const findOne = (req, res) => {
  const id = req.params.id;

  Offer.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        let message = `Cannot find Offer with id=${id}.`;
        sendError(res, message, 404);
      }
    })
    .catch((err) => {
      let message = "Error retrieving Offer with id=" + id;
      sendError(res, message);
    });
};
const findAll = (req, res) => {
  Offer.findAll()
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        let message = `Cannot find Offers `;
        sendError(res, message, 404);
      }
    })
    .catch((err) => {
      let message = "Error retrieving Offers" + err;
      sendError(res, message);
    });
};

const updateOne = (req, res) => {
  const id = req.params.id;

  Offer.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Offer was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Offer with id=${id}. Maybe Offer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      let message = "Error updating Offer with id=" + id;
      sendError(res, message);
    });
};

const deleteOne = (req, res) => {
  const id = req.params.id;

  Offer.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Offer was deleted successfully!",
        });
      } else {
        let message = `Cannot delete Offer with id=${id}. Maybe Offer was not found!`;
        sendError(res, message, 400);
      }
    })
    .catch((err) => {
      let message = "Could not delete Offer with id=" + id;
      sendError(res, message);
    });
};

export default {
  createOne,
  findOne,
  updateOne,
  deleteOne,
  findAll,
};
