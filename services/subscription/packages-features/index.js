const SubscribeModel = require('../../../models').Subscription;

class PackageFeature {
  packageFeatureModel = SubscribeModel.PackagesFeatures.create();

  async getAllFullInfo({ 
    limit, skip, filters, sorts,
    subscriptionPackageId 
  }) {
    return await this.packageFeatureModel.getAllFullInfo({
      limit, skip, filters, sorts,
      subscriptionPackageId
    });
  }

  async resetSubscriptionPackgeFeatures({
    subscriptionPackageId, features
  }) {
    await this.packageFeatureModel.resetSubscriptionPackgeFeatures({
      subscriptionPackageId, features
    });
  }

}


module.exports = {
  create: () => new PackageFeature
};