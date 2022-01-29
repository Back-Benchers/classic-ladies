import winston from "winston";
import table from "../table";

const Category = table.category;

const createOne = (req, res) => {
  // Validate request
  if (!req.body.name) {
    winston.error("content is empty");
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const category = {
    name: req.body.name,
    description: req.body.description,
    url: req.body.url,
  };

  Category.create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category.",
      });
    });
};

const findOne = (req, res) => {
  const id = req.params.id;

  Category.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        winston.error(`Cannot find Category with id=${id}.`);
        res.status(404).send({
          message: `Cannot find Category with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Category with id=" + id,
      });
    });
};
const findAll = (req, res) => {
    Category.findAll()
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          let message = `Cannot find Category `;
          sendError(res, message, 404);
        }
      })
      .catch((err) => {
        let message = "Error retrieving Category" + err;
        sendError(res, message);
      });
  };
const updateOne = (req, res) => {
  const id = req.params.id;

  Category.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      winston.error("Error updating Category with id=" + id);
      res.status(500).send({
        message: "Error updating Category with id=" + id,
      });
    });
};

const deleteOne = (req, res) => {
  const id = req.params.id;

  Category.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`,
        });
      }
    })
    .catch((err) => {
      winston.error("Could not delete Category with id=" + id);
      res.status(500).send({
        message: "Could not delete Category with id=" + id,
      });
    });
};

export default {
  createOne,
  findOne,
  updateOne,
  deleteOne,
};
