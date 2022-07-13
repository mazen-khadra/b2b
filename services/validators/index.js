const { isEmail, isAlpha, isAlphanumeric } = require('validator');
const {
  ERR_INVALID_EMAIL,
  ERR_INVALID_FIRSTNAME,
  ERR_INVALID_LASTNAME,
  ERR_INVALID_PASSWORD,
  ERR_INVALID_USER_NAME
} = require('../../resources').errors.codes;

function isAlphaName(str) {
  if (!str)
    return false;

  if (!isAlpha(str + '', 'ar') &&
    !isAlpha(str + '', 'en-US'))
    return false;

  return true;
}

module.exports = {
  signup: function ({
    firstName, lastName, email, password,
    userName
  }) {

    if (!isAlphaName(firstName))
      return { error: { code: ERR_INVALID_FIRSTNAME } };

    if (!isAlphaName(lastName))
      return { error: { code: ERR_INVALID_LASTNAME } };

    if (!userName || !isAlphanumeric(userName))
      return { error: { code: ERR_INVALID_USER_NAME } };

    if (email && !isEmail(email))
      return { error: { code: ERR_INVALID_EMAIL } };

    if (!password)
      return { error: { code: ERR_INVALID_PASSWORD } };


    return { valid: true };
  },
}