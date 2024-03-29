/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Client } from "../../client";
import { timeSeries } from "../../timeseries";

/**
 * internal
 * @param {object} options
 * @param {string} options.id
 * @param {string} options.symbol
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 * @returns
 */
const _base = (
  { id, symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  timeSeries(
    {
      id,
      key: symbol,
      ...timeseriesArgs,
    },
    { token, version, filter, format },
  );

/**
 * The Director & Officer Changes data set covers all SEC registrants who have disclosed a director or officer change in Item 5.02 of an 8-K or 8-K/A since August 2004. As of January 1, 2018, the dataset also includes director or officer change disclosures in 6-K & 6-K/A filings.
 * https://iexcloud.io/docs/api/#audit-analytics-director-and-officer-changes
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const directorAndOfficerChangesAuditAnalytics = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base(
    { id: "PREMIUM_AUDIT_ANALYTICS_DIRECTOR_OFFICER_CHANGES", symbol },
    timeseriesArgs,
    { token, version, filter, format },
  );

Client.premium.prototype.directorAndOfficerChanges = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return directorAndOfficerChangesAuditAnalytics(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * AQRM is an interactive tool designed to quickly identify and understand qualitative and contextual metrics of governance and reporting quality. Red flags and events highlighted in the risk matrix can be used for screening, idea generation, portfolio monitoring, and risk management for every SEC registrant.
 * https://iexcloud.io/docs/api/#audit-analytics-accounting-quality-and-risk-matrix
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const accountingQualityAndRiskMatrixAuditAnalytics = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base(
    { id: "PREMIUM_AUDIT_ANALYTICS_ACCOUNTING_QUALITY_RISK_MATRIX", symbol },
    timeseriesArgs,
    { token, version, filter, format },
  );

Client.premium.prototype.accountingQualityAndRiskMatrix = function (
  symbol,
  timeseriesArgs,
  { filter, format } = {},
) {
  return accountingQualityAndRiskMatrixAuditAnalytics(symbol, timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
