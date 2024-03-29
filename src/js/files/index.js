/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _strOrDate } from "../common";
import { Client } from "../client";

/**
 * The Files API allows users to download bulk data files, PDFs, etc.
 * https://iexcloud.io/docs/api/#files
 *
 * @param {object} options
 * @param {string} options.id file id
 * @param {string} options.symbol symbol to fetch
 * @param {string} options.date date to fetch for
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const files = ({ id, symbol, date } = {}, { token, version } = {}) => {
  if (id) {
    if (symbol && date) {
      return _get({
        url: `files/download/${id}?symbol=${symbol}&date=${_strOrDate(date)}`,
        token,
        version,
      });
    }
    return _get({ url: `files/info/${id}`, token, version });
  }
  return _get({ url: "files", token, version });
};

/**
 * The Files API allows users to download bulk data files, PDFs, etc.
 * https://iexcloud.io/docs/api/#files
 *
 * @param {object} options
 * @param {string} options.id file id
 * @param {string} options.symbol symbol to fetch
 * @param {string} options.date date to fetch for
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const download = async (
  { id, symbol, date } = {},
  { token, version } = {},
) => {
  const data = await files({ id, symbol, date }, { token, version });
  const datauri = `data:application/pdf,${encodeURI(data)}`;
  const a = document.createElement("a");
  a.href = datauri;
  a.download = `${id}-${symbol}-${date}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

Client.prototype.files = function (options) {
  return files(options, { token: this._token, version: this._version });
};

Client.prototype.download = function (options) {
  return download(options, { token: this._token, version: this._version });
};
