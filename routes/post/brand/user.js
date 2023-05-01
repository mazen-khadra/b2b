const {
	PostUserBrand
} = require('../../../services').api.endpoints;
const BrandSvc = require('../../../services').Brand;

module.exports = app => {

	app.post(PostUserBrand,
		async (req, res) => {
			try {
				const { nameEn, descriptionEn, categoryId } = req.body;

				let data = await BrandSvc.create().addNew ({
					nameEn, descriptionEn, categoryId,
					addedByUserId: req.user.idUser
				});

				res.status(200).json(data);

			} catch (err) {
				res.processError(err);
			}
		}
	);
};