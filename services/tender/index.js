const TenderModel = require('../../models').Tender;

class Tender {
  tenderModel = TenderModel.create();

  async getAllFullInfo({ limit, skip, filters, sorts }) {
    return await this.tenderModel.getAllFullInfo({
      limit, skip, filters, sorts
    });
  }

  async addNew({
    creatByUserId, name, productId, quantity,
    from, to, deliverBefore, cityId, area, 
    street, buildingNumber, addressLongitude, 
    addressLatitude, moreAddressInfo, status, 
    closedAt
  }) {
    await this.tenderModel.addNew({
      creatByUserId, name, productId, quantity,
      from, to, deliverBefore, cityId, area, 
      street, buildingNumber, addressLongitude, 
      addressLatitude, moreAddressInfo, status,
      closedAt
    });
  }

  async update({
    idTender, creatByUserId, name, productId, quantity,
    from, to, deliverBefore, cityId, area, 
    street, buildingNumber, addressLongitude, 
    addressLatitude, moreAddressInfo, status, 
    closedAt
  }) {
    await this.tenderModel.update({
      idTender, creatByUserId, name, productId, quantity,
      from, to, deliverBefore, cityId, area, 
      street, buildingNumber, addressLongitude, 
      addressLatitude, moreAddressInfo, status, 
      closedAt
    });
  }

  async delete({ idTender }) {
    await this.tenderModel.delete({ idTender });
  }

}


module.exports = {
  create: () => new Tender
};