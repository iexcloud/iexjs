/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import {
  _apperateGet,
  _dateRange,
  _quoteSymbols,
  _strOrDate,
  _apperatePatch,
  _apperatePut,
  _apperatePost,
  _apperateDelete,
  IEXJSException,
  _get,
} from "../common";
import { _queryUrl } from "./index";
import { Client } from "../client";

export const createDataJob = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "jobs";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "type", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePost({
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

Client.apperate.prototype.createDataJob = function (options, standardOptions) {
  return createDataJob(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const queryDataJobs = (args, standardOptions) => {
  const qpNames = ["token", "limit", "from", "to", "last", "first", "sort"];
  let url = "jobs";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "type", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.queryDataJobs = function (options, standardOptions) {
  return queryDataJobs(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getDataJob = (args, standardOptions) => {
  const qpNames = ["token"];
  let url = "jobs";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "type", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.getDataJob = function (options, standardOptions) {
  return getDataJob(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const fetchLogs = (args, standardOptions) => {
  const qpNames = ["period", "token"];
  let url = "logs";
  for (const { name, required } of [{ name: "workspace", required: true }]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.fetchLogs = function (options, standardOptions) {
  return fetchLogs(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getInvalidRecordsLog = (args, standardOptions) => {
  const qpNames = ["token"];
  let url = "jobs";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "type", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.getInvalidRecordsLog = function (
  options,
  standardOptions
) {
  return getInvalidRecordsLog(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const cancelIngestionJob = (args, standardOptions) => {
  const qpNames = ["token"];
  let url = "jobs";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.cancelIngestionJob = function (
  options,
  standardOptions
) {
  return cancelIngestionJob(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const configureS3ingegration = (args, standardOptions) => {
  const qpNames = ["token", "arnrole"];
  let url = "aws-onboarding";
  for (const { name, required } of [{ name: "workspace", required: true }]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.configureS3ingegration = function (
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
  let url = "openapi-doc";
  return _apperateGet({ url, ...standardOptions });
};

Client.apperate.prototype.getSwagger = function (options, standardOptions) {
  return getSwagger(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const listDatasets = (args, standardOptions) => {
  const qpNames = ["token", "limit"];
  let url = "datasets";
  for (const { name, required } of [{ name: "workspace", required: true }]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.listDatasets = function (options, standardOptions) {
  return listDatasets(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getDataset = (args, standardOptions) => {
  const qpNames = ["token"];
  let url = "datasets";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.getDataset = function (options, standardOptions) {
  return getDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const registerDataset = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "datasets";
  for (const { name, required } of [{ name: "workspace", required: true }]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePost({
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

Client.apperate.prototype.registerDataset = function (
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
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "datasets";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePost({
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

Client.apperate.prototype.updateDataset = function (options, standardOptions) {
  return updateDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const patchDataset = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "datasets";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePatch({
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

Client.apperate.prototype.patchDataset = function (options, standardOptions) {
  return patchDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const renameDataset = (args, standardOptions) => {
  const qpNames = ["token"];
  let url = "datasets";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
    { name: "newDatasetId", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePut({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.renameDataset = function (options, standardOptions) {
  return renameDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteDataset = (args, standardOptions) => {
  const qpNames = ["token"];
  let url = "datasets";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.deleteDataset = function (options, standardOptions) {
  return deleteDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const loadData = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = [
    "token",
    "duplicateKeyHandling",
    "overwrite",
    "maximumValidationErrors",
    "wait",
  ];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "data";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePost({
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

Client.apperate.prototype.loadData = function (options, standardOptions) {
  return loadData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const postInternal = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = [
    "token",
    "duplicateKeyHandling",
    "createDatasetOnDemand",
    "wait",
  ];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "write";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePost({
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

Client.apperate.prototype.postInternal = function (options, standardOptions) {
  return postInternal(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteData = (args, standardOptions) => {
  const qpNames = ["token", "from", "to"];
  let url = "data";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
    { name: "key", required: true },
    { name: "subkey", required: false },
    { name: "date", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.deleteData = function (options, standardOptions) {
  return deleteData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const queryDatasets = (args, standardOptions) => {
  const qpNames = ["token"];
  let url = "data";
  for (const { name, required } of [{ name: "workspace", required: false }]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.queryDatasets = function (options, standardOptions) {
  return queryDatasets(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const queryData = (args, standardOptions) => {
  const qpNames = [
    "cache",
    "cacheTTL",
    "token",
    "callback",
    "format",
    "schema",
    "filter",
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
    "transform",
    "batchSeparator",
    "includeInternalRecordProperties",
    "queryId",
  ];
  let url = "data";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
    { name: "key", required: false },
    { name: "subkey", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.queryData = function (options, standardOptions) {
  return queryData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const sampleDataSource = (args, standardOptions) => {
  const qpNames = ["token", "credentialId"];
  let url = "sample-data-source";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.sampleDataSource = function (
  options,
  standardOptions
) {
  return sampleDataSource(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const queryMeta = (args, standardOptions) => {
  const qpNames = ["token", "schema", "force", "limit", "offset"];
  let url = "meta";
  for (const { name, required } of [
    { name: "workspace", required: false },
    { name: "id", required: false },
    { name: "key", required: false },
    { name: "subkey", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.queryMeta = function (options, standardOptions) {
  return queryMeta(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const generateSchemaFromDefinedDataSource = (args, standardOptions) => {
  const qpNames = ["token", "credentialId"];
  let url = "generate-schema";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: true },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.generateSchemaFromDefinedDataSource = function (
  options,
  standardOptions
) {
  return generateSchemaFromDefinedDataSource(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const generateSchemaFromRemoteDataSource = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "generate-schema";
  for (const { name, required } of [{ name: "workspace", required: true }]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePost({
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

Client.apperate.prototype.generateSchemaFromRemoteDataSource = function (
  options,
  standardOptions
) {
  return generateSchemaFromRemoteDataSource(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const createDataSource = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "data-sources";
  for (const { name, required } of [{ name: "workspace", required: true }]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePost({
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

Client.apperate.prototype.createDataSource = function (
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
  let url = "data-sources";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.getDataSource = function (options, standardOptions) {
  return getDataSource(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const updateDataSource = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "data-sources";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePut({
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

Client.apperate.prototype.updateDataSource = function (
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
  const qpNames = ["token"];
  let url = "data-sources";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.deleteDataSource = function (
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
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "ingestion-schedules";
  for (const { name, required } of [{ name: "workspace", required: true }]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePost({
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

Client.apperate.prototype.createIngestionSchedule = function (
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
  let url = "ingestion-schedules";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.getIngestionSchedule = function (
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
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "ingestion-schedules";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePut({
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

Client.apperate.prototype.updateIngestionSchedule = function (
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
  const qpNames = ["token"];
  let url = "ingestion-schedules";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.deleteIngestionSchedule = function (
  options,
  standardOptions
) {
  return deleteIngestionSchedule(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const createCredential = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "credentials";
  for (const { name, required } of [{ name: "workspace", required: true }]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePost({
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

Client.apperate.prototype.createCredential = function (
  options,
  standardOptions
) {
  return createCredential(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getCredential = (args, standardOptions) => {
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
  let url = "credentials";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.getCredential = function (options, standardOptions) {
  return getCredential(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const updateCredential = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "credentials";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePut({
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

Client.apperate.prototype.updateCredential = function (
  options,
  standardOptions
) {
  return updateCredential(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteCredential = (args, standardOptions) => {
  const qpNames = ["token"];
  let url = "credentials";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.deleteCredential = function (
  options,
  standardOptions
) {
  return deleteCredential(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const createIngestionHistory = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "ingestion-history";
  for (const { name, required } of [{ name: "workspace", required: true }]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePost({
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

Client.apperate.prototype.createIngestionHistory = function (
  options,
  standardOptions
) {
  return createIngestionHistory(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getIngestionHistory = (args, standardOptions) => {
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
  let url = "ingestion-history";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.getIngestionHistory = function (
  options,
  standardOptions
) {
  return getIngestionHistory(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const updateIngestionHistory = (args, standardOptions) => {
  const { data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!data) throw new IEXJSException("Must provide 'data'");
  let url = "ingestion-history";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperatePut({
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

Client.apperate.prototype.updateIngestionHistory = function (
  options,
  standardOptions
) {
  return updateIngestionHistory(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteIngestionHistory = (args, standardOptions) => {
  const qpNames = ["token"];
  let url = "ingestion-history";
  for (const { name, required } of [
    { name: "workspace", required: true },
    { name: "id", required: false },
  ]) {
    if (name in args) url += "/" + args[name];
    else if (required) throw IEXJSException(`Must provide '${name}'`);
    else break;
  }
  return _apperateDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.apperate.prototype.deleteIngestionHistory = function (
  options,
  standardOptions
) {
  return deleteIngestionHistory(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
