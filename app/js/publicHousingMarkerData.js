/**
 * extracts desired data from public housing JSON data
 * replaces original keys with more JS-friendly keys
 * @method publicHousingMarkerData
 * @param {Array.<Object>} data - public housing JSON data
 * @param {Object} estateKeys - found in publicHousingDataKeyMap.js
 * @return {Array.<Object>} - marker information
 */

export default function publicHousingMarkerData(data, estateKeys) {
  if (!Array.isArray(data) || typeof estateKeys !== 'object') return [];

  return data.map(estate => {
    let estateInfo = {};

    for (let key in estate) {
      let value = estate[key];  // current value of key iteration
      let newKey = estateKeys[key]; // JS-friendly key

      if (newKey) {
        if (typeof value !== 'object') {
          estateInfo[newKey] = value;
        } else {
          estateInfo[newKey] = value['en']; // if value is an object, choose English language option
        }
      }
    }

    return estateInfo;
  });
}