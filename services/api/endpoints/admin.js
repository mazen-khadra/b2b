module.exports = {
  GetAdminCities: '/api/admin/cities',
  GetAdminCountries: '/api/admin/countries',
  GetAdminFullUsers: '/api/admin/users/full',
  GetAdminFullCompany: '/api/admin/company/full',
  GetAdminFullCompanyType: '/api/admin/company-type/full',
  GetAdminFullSubscribePackages: '/api/admin/subscription/packages/full',
  GetAdminSubscribePackageFeatures: '/api/admin/subscription/package/:idPackage/features',
  GetAdminSubscribeFeaturesFull: '/api/admin/subscription/features/full',
  GetAdminSubscribePromotionsFull: '/api/admin/subscription/promotions/full',
  GetAdminUsersSubscribeFull: '/api/admin/subscription/users-subscriptions/full',
  GetAdminACRolesFull: '/api/admin/ac/roles/full',
  GetAdminACRolePermissions: '/api/admin/ac/role/:idRole/permissions/full',
  GetAdminACResourcesFull: '/api/admin/ac/resources/full',
  GetAdminACPermissionsFull: '/api/admin/ac/permissions/full',
  GetAdminIssuesReportsFull: '/api/admin/issues-reports/full',
  GetAdminFaqsFull: '/api/admin/faqs/full',
  GetAdminAboutusFull: '/api/admin/aboutus/full',
  GetAdminCategoriesFull: '/api/admin/categories/full',
  GetAdminBrandsFull: '/api/admin/brands/full',
  GetAdminProductsFull: '/api/admin/products/full',
  GetAdminContactInfoFull: '/api/admin/contact-info/full',
  GetAdminPrivacyPolicyFull: '/api/admin/privacy-policy/full',
  GetAdminTermsFull: '/api/admin/terms/full',
  GetAdminUsersCaresFull: '/api/admin/users/cares/full',
  GetAdminTendersFull: '/api/admin/tenders/full',
  GetAdminOffersFull: '/api/admin/offers/full',
  GetAdminPaymentsFull: '/api/admin/payments/full',
  GetAdminStatsFull: '/api/admin/stats/full',
  GetAdminAdsFull: '/api/admin/ads/full',
  GetAdminReportUsersUsage: '/api/admin/report/users-usage',
  GetAdminReportCategoriesUsage: '/api/admin/report/categories-usage',
  GetAdminReportBrandsUsage: '/api/admin/report/brands-usage',
  GetAdminReportCompanyTypesUsage: '/api/admin/report/company-types-usage',
  GetAdminSettings: '/api/admin/settings',

  PostAdminUser: '/api/admin/user',
  PostAdminCity: '/api/admin/city',
  PostAdminCityUpdate: '/api/admin/city/update',
  PostAdminCountry: '/api/admin/country',
  PostAdminCountryUpdate: '/api/admin/country/update',
  PostAdminGenResetPasswordCode: '/api/admin/code/reset-password/generate',
  PostAdminUpdateUser: '/api/admin/user/update',
  PostAdminAcceptUsers: '/api/admin/users/accept',
  PostAdminCompany: '/api/admin/company',
  PostAdminUpdateCompany: '/api/admin/company/update',
  PostAdminCompanyType: '/api/admin/company-type',
  PostAdminUpdateCompanyType: '/api/admin/company-type/update',
  PostAdminSubscribePackage: '/api/admin/subscription/package',
  PostAdminSubscribePackageUpdate: '/api/admin/subscription/package/update',
  PostAdminSubscribePackageFeaturesReset: '/api/admin/subscription/package/features/reset',
  PostAdminSubscribeFeatureUpdate: '/api/admin/subscription/feature/update',
  PostAdminSubscribePromotion: '/api/admin/subscription/promotion',
  PostAdminSubscribePromotionUpdate: '/api/admin/subscription/promotion/update',
  PostAdminUserSubscribe: '/api/admin/subscription/user-subscription',
  PostAdminUserSubscribeUpdate: '/api/admin/subscription/user-subscription/update',
  POSTAdminACRole: '/api/admin/ac/role',
  POSTAdminACRoleUpdate: '/api/admin/ac/role/update',
  PostResetACResetRolePermissions: '/api/admin/ac/role/permissions/reset',
  PostAdminIssueReportUpdate: '/api/admin/issue-report/update',
  PostAdminFaq: '/api/admin/faq',
  PostAdminFaqUpdate: '/api/admin/faq/update',
  PostAdminAboutusUpdate: '/api/admin/aboutus/update',
  PostAdminCategory: '/api/admin/category',
  PostAdminCategoryUpdate: '/api/admin/category/update',
  PostAdminBrand: '/api/admin/brand',
  PostAdminBrandUpdate: '/api/admin/brand/update',
  PostAdminProduct: '/api/admin/product',
  PostAdminProductUpdate: '/api/admin/product/update',
  PostAdminContctInfoUpdate: '/api/admin/contact-info/update',
  PostAdminPrivacyPolicyUpdate: '/api/admin/privacy-policy/update',
  PostAdminTermsUpdate: '/api/admin/term/update',
  PostAdminUploadDoc: '/api/admin/doc/upload',
  PostAdminUploadImg: '/api/admin/img/upload',
  PostAdminTender: '/api/admin/tender',
  PostAdminTenderUpdate: '/api/admin/tender/update',
  PostAdminOffer: '/api/admin/offer',
  PostAdminOfferUpdate: '/api/admin/offer/update',
  PostAdminAd: '/api/admin/ad',
  PostAdminUpdateAd: '/api/admin/ad/update',
  PostAdminSettingUpdate: '/api/admin/setting/update',

  DeleteAdminUser: '/api/admin/user',
  DeleteAdminCity: '/api/admin/city',
  DeleteAdminCountry: '/api/admin/country',
  DeleteAdminCompany: '/api/admin/company',
  DeleteAdminCompanyType: '/api/admin/company-type',
  DeleteAdminSubscribePackage: '/api/admin/subscription/package',
  DeleteAdminSubscribePromotion: '/api/admin/subscription/promotion',
  DeleteAdminUserSubscribe: '/api/admin/subscription/user-subscription',
  DeleteAdminACRole: '/api/admin/ac/role',
  DeleteAdminIssueReport: '/api/admin/issue-report',
  DeleteAdminFaq: '/api/admin/faq',
  DeleteAdminAboutus: '/api/admin/aboutus',
  DeleteAdminCategory: '/api/admin/category',
  DeleteAdminBrand: '/api/admin/brand',
  DeleteAdminProduct: '/api/admin/product',
  DeleteAdminTender: '/api/admin/tender',
  DeleteAdminOffer: '/api/admin/offer',
  DeleteAdminAd: '/api/admin/ad'
}