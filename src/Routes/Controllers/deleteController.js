const model = require("../../Models/Profesores");
const parseId = require("../../utils/parseId");

const deleteController = (id) => {
  let info = model.deleteOne({ _id: parseId(id) });
  return info;
  //TESTING PULLREQUEST
};

module.exports = deleteController;
