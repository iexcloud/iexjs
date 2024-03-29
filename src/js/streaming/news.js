/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Client } from "../client";
import { _runSSE } from "./sse";

/**
 * Stream news
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {boolean} nosnapshot
 * @param {object} standardOptions
 * @param {string} standardOptions.token API Token
 * @param {string} standardOptions.version API Version
 */
export const newsSSE = (
  symbols,
  on_data,
  nosnapshot,
  { token, version } = {},
) => _runSSE("news-stream", symbols, on_data, nosnapshot, { token, version });

Client.prototype.newsSSE = function (symbols, on_data, nosnapshot) {
  return newsSSE(symbols, on_data, nosnapshot, {
    token: this._token,
    version: this._version,
  });
};
