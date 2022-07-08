
const Model = require('../../model');

class User_code extends Model {
  static TABLE_NAME = 'users_codes';
  static PRIMARY_KEY = 'id_code';

  async getAllFullInfo({
    limit, skip, filters, sorts
  }) {

    let countQuery =
      `SELECT
        Count(*) allCount
      FROM
        users_codes;`
      

    let dataQuery =
      `SELECT
        id_code	idCode,
				user_id	userId,
				code	code,
				type	type,
				is_active	isActive,
				expiry_date_time	expiryDateTime
      FROM
        users_codes`;

    let queryStr = countQuery + dataQuery;

    queryStr = this.applyFilters(dataQuery, filters) || queryStr;
    queryStr += this.getOrderClause(sorts);
    queryStr += this.getLimitClause({ limit, skip });


    let dbRet = await this.directQuery(queryStr);

    return {
      allCount: dbRet[0][0].allCount,
      data: dbRet[1]
    };

  }

  async addNew({
    userId, code, type, isActive, expiryDateTime
  }) {
    let dbRet = await this.directQuery (
      'CALL prc_add_user_code(?, @new_record_id);',
      [userId, code, type, isActive, expiryDateTime]
    );

    return { newId: dbRet[0][0].newRecordId };
  }

  async update({
    idCode, userId, code, type, isActive, expiryDateTime
  }) {
    await this.directQuery (
      'CALL prc_update_user_code(?);',
      [idCode, userId, code, type, isActive, expiryDateTime]
    );
  }

  async delete({ idCode }) {
    await this.directQuery (
      'CALL prc_delete_user_code(?);',
      idCode
    );
  }

}

module.exports = {
  create: () => new User_code
};
