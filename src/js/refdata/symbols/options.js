/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get } from "../../common";
import { Client } from "../../client";

/**
 * This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates.
 *
 * https://iexcloud.io/docs/api/#options-symbols
 *
 * @param {object} options
 * @param {string} options.underlyingSymbol underlying symbol
 * @param {string} options.expiration expiration date
 * @param {boolean} options.includeExpired Include expired contracts in result
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const optionsSymbols = (
  { underlyingSymbol, expiration, includeExpired } = {},
  { token = "", version = "", filter = "", format = "json" } = {},
) => {
  let url;
  if (underlyingSymbol) {
    url = `ref-data/options/symbols/${underlyingSymbol}`;

    if (expiration) url += `/${expiration}`;

    if (includeExpired) url += `?includeExpired=${includeExpired}`;
  } else {
    url = "ref-data/options/symbols";
  }
  return _get({
    url,
    token,
    version,
    filter,
    format,
  });
};

/**
 * This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates.
 *
 * https://iexcloud.io/docs/api/#options-symbols
 *
 * @param {object} options
 * @param {string} options.underlyingSymbol underlying symbol
 * @param {string} options.expiration expiration date
 * @param {boolean} options.includeExpired Include expired contracts in result
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
Client.prototype.optionsSymbols = function (options, standardOptions) {
  return optionsSymbols(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

const convertOptionsSymbolsToList = (underlyingSymbol, data) => {
  const ret = [];
  if (!underlyingSymbol) {
    Object.keys(data).forEach((symbol) => {
      data[symbol].forEach((date) => {
        ret.push(`${symbol}-${date}`);
      });
    });
  } else {
    data.forEach((record) => ret.push(record.symbol));
  }
  return ret;
};

/**
 * This call returns a list of options symbols
 *
 * https://iexcloud.io/docs/api/#options-symbols
 *
 * @param {object} options
 * @param {string} options.underlyingSymbol underlying symbol
 * @param {string} options.expiration expiration date
 * @param {boolean} options.includeExpired Include expired contracts in result
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const optionsSymbolsList = async (
  { underlyingSymbol, expiration, includeExpired } = {},
  { token, version } = {},
) =>
  convertOptionsSymbolsToList(
    underlyingSymbol,
    await optionsSymbols(
      { underlyingSymbol, expiration, includeExpired },
      { token, version, filter: "symbol" },
    ),
  );

/**
 * This call returns a list of options symbols
 *
 * https://iexcloud.io/docs/api/#options-symbols
 *
 * @param {object} options
 * @param {string} options.underlyingSymbol underlying symbol
 * @param {string} options.expiration expiration date
 * @param {boolean} options.includeExpired Include expired contracts in result
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
Client.prototype.optionsSymbolsList = async function ({
  underlyingSymbol,
  expiration,
  includeExpired,
} = {}) {
  return convertOptionsSymbolsToList(
    underlyingSymbol,
    await optionsSymbols(
      { underlyingSymbol, expiration, includeExpired },
      {
        token: this._token,
        version: this._version,
        filter: "symbol",
      },
    ),
  );
};
