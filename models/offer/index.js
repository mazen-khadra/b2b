
const Model = require('../model');

class Offer extends Model {
  static TABLE_NAME = 'offers';
  static PRIMARY_KEY = 'id_offer';

  async getAllFullInfo({
    limit, skip, filters, sorts
  }) {

    let countQuery =
      `SELECT
        Count(*) allCount
      FROM
        offers;`
      

    let dataQuery =
      `SELECT
        id_offer	idOffer,
				tender_id	tenderId,
        o.creat_by_user_id creatByUserId,
        o.quantity,
				price_USD	priceUSD,
				b_include_delivery	bIncludeDelivery,
				delivery_cost	deliveryCost,
				o.delivery_address	deliveryAddress,
				o.status	status,
        o.tax,
        o.city_id cityId,
				accepted_at	acceptedAt,
				excuted_at	excutedAt,
        o.creat_at creatAt,
        t.creat_by_user_id tenderCreatorByUserId,
        t.product_id productId,
        t.quantity tenderQuantity
      FROM
        offers o
        INNER JOIN tenders t ON tender_id = id_tender`;

    let queryStr = countQuery + dataQuery;

    let filteredQuery = this.applyFilters(dataQuery, filters);
    queryStr = filteredQuery.finalQuery || queryStr;
    queryStr += this.getOrderClause(sorts);
    queryStr += this.getLimitClause({ limit, skip });


    let dbRet = await this.directQuery(queryStr);

    return {
      allCount: dbRet[0][0].allCount,
      data: dbRet[1]
    };

  }

  async get ({
    tenderId, creatByUserId,
    tenderCreatorByUserId
  }) {

    let tenderCond = !tenderId ? 'TRUE' :
      `tender_id = ${this.escapeSql(tenderId)}`;
    let creatorCond = !creatByUserId ? 'TRUE' : 
      `o.creat_by_user_id = ${this.escapeSql(creatByUserId)}`;
    let tenderCreatorCond = !tenderCreatorByUserId ? 'TRUE' : 
      `t.creat_by_user_id = ${tenderCreatorByUserId}`;

    let queryStr =
      `SELECT
        id_offer	idOffer,
				tender_id	tenderId,
        fun_get_string(NULL, p.name_str_id) productName,
        fun_get_img(p.img_id) productImgUrl,
        fun_get_string(NULL, b.name_str_id) brandName,
        fun_get_string(NULL, c.name_str_id) categoryName,
        o.creat_by_user_id creatByUserId,
        o.quantity,
				price_USD	priceUSD,
				b_include_delivery	bIncludeDelivery,
				delivery_cost	deliveryCost,
				o.delivery_address	deliveryAddress,
				o.status	status,
        o.tax,
        o.city_id offerCityId,
				accepted_at	acceptedAt,
				excuted_at	excutedAt,
        o.creat_at creatAt,
        t.creat_by_user_id tenderCreatorByUserId,
        t.product_id productId,
        t.quantity tenderQuantity,
        u.score offerCreatorScore
      FROM
        offers o
        INNER JOIN tenders t ON tender_id = id_tender
        INNER JOIN products p ON id_product = product_id
        INNER JOIN brands b ON p.brand_id = id_brand
        INNER JOIN categories c ON c.id_category = b.category_id
        INNER JOIN users u ON u.id_user = o.creat_by_user_id
      WHERE 
        ${tenderCond} AND 
        ${tenderCreatorCond} AND 
        ${creatorCond}`;

    let dbRet = await this.directQuery(queryStr);

    return { data: dbRet };

  }

  async addNew({
    tenderId, creatByUserId, quantity, priceUSD, 
    bIncludeDelivery, deliveryCost, deliveryAddress,
    status, tax, cityId, acceptedAt, excutedAt
  }) {
    let dbRet = await this.directQuery (
      'CALL prc_add_offer(?, @new_record_id);',
      [tenderId, creatByUserId, quantity, priceUSD, bIncludeDelivery, 
        deliveryCost, deliveryAddress, status, tax, cityId, acceptedAt,
        excutedAt]
    );

    return { newId: dbRet[0][0].newRecordId };
  }

  async update({
    idOffer, tenderId, creatByUserId, quantity, priceUSD, 
    bIncludeDelivery, deliveryCost, deliveryAddress, 
    status, tax, cityId, acceptedAt, excutedAt
  }) {
    await this.directQuery (
      'CALL prc_update_offer(?);',
      [idOffer, tenderId, creatByUserId, quantity, priceUSD, 
        bIncludeDelivery, deliveryCost, deliveryAddress, 
        status, tax, cityId, acceptedAt, excutedAt]
    );
  }

  async delete({ idOffer }) {
    await this.directQuery (
      'CALL prc_delete_offer(?);',
      idOffer
    );
  }

}

module.exports = {
  create: () => new Offer
};
