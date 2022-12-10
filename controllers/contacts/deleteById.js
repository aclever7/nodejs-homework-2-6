const contacts = require("../../models/contacts");
const HttpError = require("../../helpers");

const deleteById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteById;
