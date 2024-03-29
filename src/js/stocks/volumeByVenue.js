/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _quoteSymbols, _raiseIfNotStr } from "../common";
import { Client } from "../client";

/**
 * This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market.
 * This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage.
 *
 * https://iexcloud.io/docs/api/#volume-by-venue
 *
 * @param {object} options
 * @param {string} options.symbol ticker to request
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const volumeByVenue = (
  { symbol } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/volume-by-venue`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.volumeByVenue = function (options, standardOptions) {
  return volumeByVenue(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
