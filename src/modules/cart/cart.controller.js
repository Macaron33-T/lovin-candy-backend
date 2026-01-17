import { Cart } from "./cart.model.js";

export const updateCart = async (req, res, next) => {
  const { id } = req.params;
  
  const body = req.body;

  try {
    const update = await Cart.findOneAndUpdate(id, body);

    if (!update) {
      const error = new Error("Item not found...");

      return next(error);
    }

    return res.status(200).json({
      success: true,
      data: update,
    })
  } catch (error) {
    error.status = 500;
    next(error);
  }
}