const {PostAuthLogin} = require('../../../services').api.endpoints;
const { Auth, User } = require('../../../services');
const NotificationSvc = require('../../../services/notification');

module.exports = app => {

	app.post(PostAuthLogin,
		(req, res) => {
			try {

				Auth.type.getAuthenticateMiddleware(({ err, user, info }) => {
					try {

						if (err) throw err;

						if (!user) {
							res.status(401).json({
								error: { message: info.message, code: info.code }
							});
							return;
						}

						req.login(user, async function (err) {
							if (err) 
								throw err;
							res.status(200).json({ ...user, password: null });
							User.create().update({
								idUser: user.idUser,
								lastLoginAt: new Date().toISOString()
							});
	
							if(req.body.notificationToken)
								NotificationSvc.NotifyDevice.create().reset({
									userId: user.idUser, 
									tokens: [req.body.notificationToken]
								});
						});

					} catch (err) {
						res.processError(err);
					}

				})(req, res);

			} catch (err) {
				res.processError(err);
			}

		}
	);

}