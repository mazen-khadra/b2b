module.exports = {
  GetAuthIsLoggedIn: '/api/auth/is_loggedin',
  GetAuthLogout: '/api/auth/logout',
  GetAdminFullUsers: '/api/admin/users/full',
  GetAdminFullCompany: '/api/admin/company/full',
  GetAdminFullSubscribePackages: '/api/admin/subscription/packages/full',
  GetAdminSubscribePackageFeatures: '/api/admin/subscription/package/:idPackage/features',
  GetAdminSubscribeFeaturesFull: '/api/admin/subscription/features/full',
  GetAdminSubscribePromotionsFull: '/api/admin/subscription/promotions/full',
  GetAdminUsersSubscribeFull: '/api/admin/subscription/users-subscriptions/full',
  GetAdminACRolesFull: '/api/admin/ac/roles/full',
  GetAdminACRolePermissions: '/api/admin/ac/role/:idRole/permissions/full',
  GetAdminACResourcesFull: '/api/admin/ac/resources/full',
  GetAdminACPermissionsFull: '/api/admin/ac/permissions/full',

  PostAuthLogin: '/api/auth/login',
  PostAuthSignup: '/api/auth/signup',
  PostAdminUser: '/api/admin/user',
  PostAdminUpdateUser: '/api/admin/user/update',
  PostAdminCompany: '/api/admin/company',
  PostAdminUpdateCompany: '/api/admin/company/update',
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

  DeleteAdminUser: '/api/admin/user',
  DeleteAdminCompany: '/api/admin/company',
  DeleteAdminSubscribePackage: '/api/admin/subscription/package',
  DeleteAdminSubscribePromotion: '/api/admin/subscription/promotion',
  DeleteAdminUserSubscribe: '/api/admin/subscription/user-subscription',
  DELETEAdminACRole: '/api/admin/ac/role'
}