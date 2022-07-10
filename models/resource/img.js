const Model = require('../model');

class Img extends Model {
   
  async addNew({url}) {
    let queryStr = 'SELECT fun_insert_img(?);';

    await Model.directQuery(
      queryStr, url
    );
         
  }

}

module.exports = {
  create: () => new Img
};