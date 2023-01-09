export const replaceWhiteSpaceWithDash = (str) => {
  return str.replace(/\s+/g, "-");
};

/**
 * @desc Checks for Empty string
 * @param {*} value // Accepts string, object
 */
export function isEmpty(value) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

export const getAPIResponseError = (e) => {
  if (e) {
    console.log("ERROR", e);
    if (e.response && e.response.data) {
      if (e.response.data.message) {
        return e.response.data.message;
      }
    }
  }
  return;
};
