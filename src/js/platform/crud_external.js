/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import {
  _platformGet,
  _dateRange,
  _quoteSymbols,
  _strOrDate,
  _platformPatch,
  _platformPut,
  _platformPost,
  _platformDelete,
  IEXJSException,
  _get,
} from "../common";
import { _queryUrl } from "./index";
import { Client } from "../client";

export const createDataJob = (args, standardOptions) => {
  const {
    provider = "",
    type = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `jobs/${provider}/${type}`;
  return _platformPost({
    url,
    data,
    contentType,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.createDataJob = function (options, standardOptions) {
  return createDataJob(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const listDataJobs = (args, standardOptions) => {
  const { provider = "", type = "" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  const url = `jobs/${provider}/${type}`;
  return _get({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.listDataJobs = function (options, standardOptions) {
  return listDataJobs(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const queryDataJobs = (args, standardOptions) => {
  const { provider = "", type = "" } = args;
  const qpNames = ["token", "limit", "from", "to", "last", "first", "sort"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  const url = `jobs/${provider}/${type}/query`;
  return _get({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.queryDataJobs = function (options, standardOptions) {
  return queryDataJobs(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getDataJob = (args, standardOptions) => {
  const { provider = "", type = "", id = "" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `jobs/${provider}/${type}/${id}`;
  return _get({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.getDataJob = function (options, standardOptions) {
  return getDataJob(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getInvalidRecordsLog = (args, standardOptions) => {
  const { provider = "", type = "", id = "" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `jobs/${provider}/${type}/${id}/invalid-records-log`;
  return _get({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.getInvalidRecordsLog = function (
  options,
  standardOptions
) {
  return getInvalidRecordsLog(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const configureS3ingegration = (args, standardOptions) => {
  const { provider = "" } = args;
  const qpNames = ["token", "arnrole"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  const url = `aws-onboarding/${provider}/configure-aws-s3`;
  return _get({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.configureS3ingegration = function (
  options,
  standardOptions
) {
  return configureS3ingegration(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getSwagger = (args, standardOptions) => {
  const {} = args;
  const url = `platform/swagger-json`;
  return _get({ url, ...standardOptions });
};

Client.platform.prototype.getSwagger = function (options, standardOptions) {
  return getSwagger(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const listDatasets = (args, standardOptions) => {
  const { provider = "" } = args;
  const qpNames = ["token", "limit"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  const url = `datasets/${provider}`;
  return _get({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.listDatasets = function (options, standardOptions) {
  return listDatasets(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getDataset = (args, standardOptions) => {
  const { provider = "", id = "" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `datasets/${provider}/${id}`;
  return _get({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.getDataset = function (options, standardOptions) {
  return getDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const registerDataset = (args, standardOptions) => {
  const { provider = "", data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `datasets/${provider}`;
  return _platformPost({
    url,
    data,
    contentType,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.registerDataset = function (
  options,
  standardOptions
) {
  return registerDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const updateDataset = (args, standardOptions) => {
  const {
    provider = "",
    id = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `datasets/${provider}/${id}`;
  return _platformPost({
    url,
    data,
    contentType,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.updateDataset = function (options, standardOptions) {
  return updateDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const patchDataset = (args, standardOptions) => {
  const {
    provider = "",
    id = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `datasets/${provider}/${id}`;
  return _platformPatch({
    url,
    data,
    contentType,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.patchDataset = function (options, standardOptions) {
  return patchDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteDataset = (args, standardOptions) => {
  const { provider = "", id = "" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `datasets/${provider}/${id}`;
  return _platformDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.deleteDataset = function (options, standardOptions) {
  return deleteDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const loadData = (args, standardOptions) => {
  const {
    provider = "",
    id = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token", "overwrite", "maximumValidationErrors"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `data/${provider}/${id}`;
  return _platformPost({
    url,
    data,
    contentType,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.loadData = function (options, standardOptions) {
  return loadData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteData = (args, standardOptions) => {
  const { provider = "", id = "", key = "", subkey = "", date = "" } = args;
  const qpNames = ["token", "from", "to"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!key) throw new IEXJSException("Must provide 'key'");
  const url = `data/${provider}/${id}/${key}/${subkey}?/${date}?`;
  return _platformDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.deleteData = function (options, standardOptions) {
  return deleteData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const sampleDataSource = (args, standardOptions) => {
  const { provider = "", objectId = "" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!objectId) throw new IEXJSException("Must provide 'objectId'");
  const url = `sample-data-source/${provider}/${objectId}`;
  return _get({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.sampleDataSource = function (
  options,
  standardOptions
) {
  return sampleDataSource(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const createDataSource = (args, standardOptions) => {
  const { provider = "", data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `data-sources/${provider}`;
  return _platformPost({
    url,
    data,
    contentType,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.createDataSource = function (
  options,
  standardOptions
) {
  return createDataSource(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getDataSource = (args, standardOptions) => {
  const { provider = "", objectId = "" } = args;
  const qpNames = [
    "token",
    "calendar",
    "forward",
    "future",
    "range",
    "from",
    "to",
    "on",
    "interval",
    "last",
    "next",
    "first",
    "limit",
    "offset",
    "subattribute",
    "sort",
    "updated",
    "dateField",
    "schema",
    "transform",
  ];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  const url = `data-sources/${provider}/${objectId}?`;
  return _get({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.getDataSource = function (options, standardOptions) {
  return getDataSource(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const updateDataSource = (args, standardOptions) => {
  const {
    provider = "",
    objectId = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `data-sources/${provider}/${objectId}?`;
  return _platformPut({
    url,
    data,
    contentType,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.updateDataSource = function (
  options,
  standardOptions
) {
  return updateDataSource(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteDataSource = (args, standardOptions) => {
  const { provider = "", objectId = "" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  const url = `data-sources/${provider}/${objectId}?`;
  return _platformDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.deleteDataSource = function (
  options,
  standardOptions
) {
  return deleteDataSource(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const createIngestionSchedule = (args, standardOptions) => {
  const { provider = "", data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `ingestion-schedules/${provider}`;
  return _platformPost({
    url,
    data,
    contentType,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.createIngestionSchedule = function (
  options,
  standardOptions
) {
  return createIngestionSchedule(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getIngestionSchedule = (args, standardOptions) => {
  const { provider = "", objectId = "" } = args;
  const qpNames = [
    "token",
    "calendar",
    "forward",
    "future",
    "range",
    "from",
    "to",
    "on",
    "interval",
    "last",
    "next",
    "first",
    "limit",
    "offset",
    "subattribute",
    "sort",
    "updated",
    "dateField",
    "schema",
    "transform",
  ];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  const url = `ingestion-schedules/${provider}/${objectId}?`;
  return _get({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.getIngestionSchedule = function (
  options,
  standardOptions
) {
  return getIngestionSchedule(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const updateIngestionSchedule = (args, standardOptions) => {
  const {
    provider = "",
    objectId = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `ingestion-schedules/${provider}/${objectId}?`;
  return _platformPut({
    url,
    data,
    contentType,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.updateIngestionSchedule = function (
  options,
  standardOptions
) {
  return updateIngestionSchedule(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteIngestionSchedule = (args, standardOptions) => {
  const { provider = "", objectId = "" } = args;
  const qpNames = ["token"];
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  const url = `ingestion-schedules/${provider}/${objectId}?`;
  return _platformDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.deleteIngestionSchedule = function (
  options,
  standardOptions
) {
  return deleteIngestionSchedule(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
