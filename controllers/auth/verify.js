const { User } = require("../../models/user");

const { HttpError } = require("../../helpers");

const verify = async (req, res) => {
  const { verififcationCode } = req.params;
  const user = await User.findOne({ verififcationCode });
  if (!user) {
    throw HttpError(404);
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verififcationCode: "",
  });

  res.json({
    message: "Email verify success",
  });
};

module.exports = verify;
