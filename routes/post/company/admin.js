const {
	PostAdminCompany,
	PostAdminUpdateCompany
} = require('../../../services').api.endpoints;
const CompanySvc = require('../../../services').Company;

module.exports = app => {

	app.post(PostAdminCompany,
		async (req, res) => {
			try {
				const { nameEn, companyTypeId, address, licenseNumber, establishAt,
					licenseImgUrl, cityId, area, street, buildingNumber,
					addressLongitude, addressLatitude, moreAddressInfo, 
					licenseExpirAt } = req.body;

				await CompanySvc.create().addNew({
					nameEn, companyTypeId, address, licenseNumber, establishAt,
    			licenseImgUrl, cityId, area, street, buildingNumber,
    			addressLongitude, addressLatitude, moreAddressInfo, 
    			licenseExpirAt
				});

				res.status(200).end();

			} catch (err) {
				res.processError(err);
			}
		}
	);

	app.post(PostAdminUpdateCompany,
		async (req, res) => {
			try {
				const { idCompany, nameEn, companyTypeId, address, licenseNumber,
					establishAt, licenseImgUrl, cityId, area, street, buildingNumber,
					addressLongitude, addressLatitude, moreAddressInfo, 
					licenseExpirAt } = req.body;

				await CompanySvc.create().update({
					idCompany, nameEn, companyTypeId, address, licenseNumber, establishAt,
    			licenseImgUrl, cityId, area, street, buildingNumber,
    			addressLongitude, addressLatitude, moreAddressInfo, 
    			licenseExpirAt
				});

				res.status(200).end();

			} catch (err) {
				res.processError(err);
			}
		}
	);
};