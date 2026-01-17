import { User } from "./users.model.js"

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return next(error);
  }
};

export const createUser = async (req, res, next) => {
  const { username, email, password, first_name, last_name, address, role } = req.body;

  try {
    const doc = await User.create({ username, email, password, first_name, last_name, address, role });

    return res.status(201).json({
      success: true,
      data: doc,
    });
  } catch (error) {
    return next(error);
  }
};

export const delAddress = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: {address: ""} },
      { new: true }
    )

    if (!updateUser) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: "Address deleted successfully",
      data: updateUser
    })
  } catch (error) {
    next(error);
  }
}