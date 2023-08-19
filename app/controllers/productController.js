import product from '../models/product.js';

const allProduct = async (req, res) => {
  try {
    let data = await product.find();
    res.status(200).json({
      data: data,
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: null,
      success: false,
      message: 'Internal Server Error Occurred.',
    });
  }
};

const createProduct = async (req, res) => {
  try {
    let data = await product.create(req.body);
    if (data) {
      res.status(201).json({
        data: data,
        message: 'Product created successfully.',
        success: true,
      });
    } else {
      res.status(409).json({
        data: null,
        message: 'Product could not be created.',
        success: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: null,
      success: false,
      message: 'Internal Server Error Occurred.',
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    let product = await product.findOneAndDelete({ _id: req.params.id });

    if (product) {
      res.status(202).json({
        success: true,
        message: 'Product deleted successfully',
      });
    } else {
      res.status(409).json({
        success: false,
        message: "Couldn't delete Product.",
      });
    }
  } catch (err) {
    console.log('ERROR:', err);
    res.status(500).json({
      data: null,
      success: false,
      message: 'Internal Server Error Occurred.',
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    let data = await product.findOne({ _id: req.body._id });
    if (!data)
      res.status(409).json({
        message: 'Product not found.',
        success: false,
      });
    let update = await product.updateOne(
      { _id: req.body._id },
      { $set: req.body }
    );
    if (update) {
      res.status(201).json({
        data: data,
        message: 'Product updated successfully.',
        success: true,
      });
    } else {
      res.status(409).json({
        message: 'Product could not be updated.',
        success: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: null,
      success: false,
      message: 'Internal Server Error Occurred.',
    });
  }
};

const viewProduct = async (req, res) => {
  try {
    let data = await product.findOne({ _id: req.params.id });
    if (!data)
      res.status(409).json({
        message: 'Product not found.',
        success: false,
      });

    res.status(200).json({
      data: data,
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: null,
      success: false,
      message: 'Internal Server Error Occurred.',
    });
  }
};

export { allProduct, createProduct, deleteProduct, updateProduct, viewProduct };
