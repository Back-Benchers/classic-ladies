import winston from "winston";
import table from "../table";

const Product = table.product;

const createOne = (req, res) => {
    // Validate request
    if (!req.body.title) {
        winston.error("content is empty")
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Product
    const product = {
        url: req.body.url,
        brand: req.body.brand,
        title: req.body.title,
        description: req.body.description,
        metadata: req.body.metadata,
        trending: req.body.trending,
        stockQuantity: req.body.stockQuantity,
        soldQuantity: req.body.soldQuantity,
        price: req.body.price,
        salePrice: req.body.salePrice,
        sizes: req.body.sizes,
        categories: req.body.categories,
        rating: req.body.rating
      };

    // Save Product in the database
    Product.create(product)
        .then(data => {
            res.send("Insert Successful");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Product."
            });
        });
};

const findOne = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                winston.error(`Cannot find Product with id=${id}.`);
                res.status(404).send({
                    message: `Cannot find Product with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Product with id=" + id
            });
        });
};

const updateOne = (req, res) => {
    const id = req.params.id;

    Product.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            winston.error("Error updating Product with id=" + id)
            res.status(500).send({
                message: "Error updating Product with id=" + id
            });
        });
};

const deleteOne = (req, res) => {
    const id = req.params.id;

    Product.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
                });
            }
        })
        .catch(err => {
            winston.error("Could not delete Product with id=" + id)
            res.status(500).send({
                message: "Could not delete Product with id=" + id
            });
        });
};

export default {
    createOne,
    findOne,
    updateOne,
    deleteOne
}