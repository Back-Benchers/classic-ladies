import winston from "winston";
import table from "../table";

const Product = table.product;

const sendError = (res, message = "", statusCode = 500) => {
  winston.error(message);
  res.status(statusCode).send({
    message: message,
  });
};

const createOne = (req, res) => {
  // Validate request
  if (!req.body.title) {
    sendError(res, "Content can not be empty!", 400);
    return;
  }
  // Create a Product
  const product = {
    url: req.body.url,
    title: req.body.title,
    description: req.body.description,
    trending: req.body.trending ? req.body.trending : false,
    brand: req.body.brand,
    metadata: req.body.metadata,
    stockQuantity: req.body.stockQuantity,
    soldQuantity: req.body.soldQuantity,
    price: req.body.price,
    salePrice: req.body.salePrice,
    sizes: req.body.sizes,
    categories: req.body.categories,
    rating: req.body.rating,
  };

  // Save Product in the database
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      let message =
        err.message || "Some error occurred while creating the Product.";
      sendError(res, message);
    });
};

const findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        let message = `Cannot find Product with id=${id}.`;
        sendError(res, message, 404);
      }
    })
    .catch((err) => {
      let message = "Error retrieving Product with id=" + id;
      sendError(res, message);
    });
};
const findAll = (req, res) => {
  Product.findAll()
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        let message = `Cannot find Products `;
        sendError(res, message, 404);
      }
    })
    .catch((err) => {
      let message = "Error retrieving Products" + err;
      sendError(res, message);
    });
};

const updateOne = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully.",
        });
      } else {
       
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      let message = "Error updating Product with id=" + id;
      sendError(res, message);
    });
};

const deleteOne = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!",
        });
      } else {
        let message = `Cannot delete Product with id=${id}. Maybe Product was not found!`;
        sendError(res, message, 400);
      }
    })
    .catch((err) => {
      let message = "Could not delete Product with id=" + id;
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
