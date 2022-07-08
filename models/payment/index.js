
const Model = require('../model');

class Payment extends Model {
  static TABLE_NAME = 'payments';
  static PRIMARY_KEY = 'id_payment';

  async getAllFullInfo({
    limit, skip, filters, sorts
  }) {

    let countQuery =
      `SELECT
        Count(*) allCount
      FROM
        payments;`
      

    let dataQuery =
      `SELECT
        id_payment idPayment,
				user_id	userId,
				type,
				amount_usd amountUsd,
				comment,
				status
      FROM
        payments`;

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
    userId, type, amountUsd, comment, status
  }) {
    let dbRet = await this.directQuery (
      'CALL prc_add_payment(?, @new_record_id);',
      [userId, type, amountUsd, comment, status]
    );

    return { newId: dbRet[0][0].newRecordId };
  }

  async update({
    idPayment, userId, type, amountUsd, comment, status
  }) {
    await this.directQuery (
      'CALL prc_update_payment(?);',
      [idPayment, userId, type, amountUsd, comment, status]
    );
  }

  async delete({ idPayment }) {
    await this.directQuery (
      'CALL prc_delete_payment(?);',
      idPayment
    );
  }

}

module.exports = {
  create: () => new Payment
};
