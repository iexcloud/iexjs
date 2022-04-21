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
    workspace = "",
    type = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `jobs/${workspace}/${type}`;
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
  const { workspace = "", type = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  const url = `jobs/${workspace}/${type}`;
  return _platformGet({
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
  const { workspace = "", type = "" } = args;
  const qpNames = ["token", "limit", "from", "to", "last", "first", "sort"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  const url = `jobs/${workspace}/${type}/query`;
  return _platformGet({
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
  const { workspace = "", type = "", id = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `jobs/${workspace}/${type}/${id}`;
  return _platformGet({
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
  const { workspace = "", type = "", id = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `jobs/${workspace}/${type}/${id}/invalid-records-log`;
  return _platformGet({
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

export const cancelIngestionJob = (args, standardOptions) => {
  const { workspace = "", id = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `jobs/${workspace}/ingest/${id}/cancel`;
  return _platformGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.cancelIngestionJob = function (
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
  const { workspace = "" } = args;
  const qpNames = ["token", "arnrole"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  const url = `aws-onboarding/${workspace}/configure-aws-s3`;
  return _platformGet({
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
  return _platformGet({ url, ...standardOptions });
};

Client.platform.prototype.getSwagger = function (options, standardOptions) {
  return getSwagger(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const listDatasets = (args, standardOptions) => {
  const { workspace = "" } = args;
  const qpNames = ["token", "limit"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  const url = `datasets/${workspace}`;
  return _platformGet({
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
  const { workspace = "", id = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `datasets/${workspace}/${id}`;
  return _platformGet({
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
  const { workspace = "", data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `datasets/${workspace}`;
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
    workspace = "",
    id = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `datasets/${workspace}/${id}`;
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
    workspace = "",
    id = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `datasets/${workspace}/${id}`;
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
  const { workspace = "", id = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `datasets/${workspace}/${id}`;
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
    workspace = "",
    id = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token", "overwrite", "maximumValidationErrors"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `data/${workspace}/${id}`;
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
  const { workspace = "", id = "", key = "", subkey = "", date = "" } = args;
  const qpNames = ["token", "from", "to"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!key) throw new IEXJSException("Must provide 'key'");
  const url = `data/${workspace}/${id}/${key}/${subkey}?/${date}?`;
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
  const { workspace = "", objectId = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!objectId) throw new IEXJSException("Must provide 'objectId'");
  const url = `sample-data-source/${workspace}/${objectId}`;
  return _platformGet({
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
  const { workspace = "", data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `data-sources/${workspace}`;
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
  const { workspace = "", objectId = "" } = args;
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
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  const url = `data-sources/${workspace}/${objectId}?`;
  return _platformGet({
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
    workspace = "",
    objectId = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `data-sources/${workspace}/${objectId}?`;
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
  const { workspace = "", objectId = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  const url = `data-sources/${workspace}/${objectId}?`;
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
  const { workspace = "", data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `ingestion-schedules/${workspace}`;
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
  const { workspace = "", objectId = "" } = args;
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
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  const url = `ingestion-schedules/${workspace}/${objectId}?`;
  return _platformGet({
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
    workspace = "",
    objectId = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `ingestion-schedules/${workspace}/${objectId}?`;
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
  const { workspace = "", objectId = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  const url = `ingestion-schedules/${workspace}/${objectId}?`;
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

export const createCredential = (args, standardOptions) => {
  const { workspace = "", data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `credentials/${workspace}`;
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

Client.platform.prototype.createCredential = function (
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
  const { workspace = "", objectId = "" } = args;
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
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  const url = `credentials/${workspace}/${objectId}?`;
  return _platformGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.getCredential = function (options, standardOptions) {
  return getCredential(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const updateCredential = (args, standardOptions) => {
  const {
    workspace = "",
    objectId = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `credentials/${workspace}/${objectId}?`;
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

Client.platform.prototype.updateCredential = function (
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
  const { workspace = "", objectId = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  const url = `credentials/${workspace}/${objectId}?`;
  return _platformDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.deleteCredential = function (
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
  const { workspace = "", data, contentType = "application/json" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `ingestion-history/${workspace}`;
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

Client.platform.prototype.createIngestionHistory = function (
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
  const { workspace = "", objectId = "" } = args;
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
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  const url = `ingestion-history/${workspace}/${objectId}?`;
  return _platformGet({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.getIngestionHistory = function (
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
  const {
    workspace = "",
    objectId = "",
    data,
    contentType = "application/json",
  } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `ingestion-history/${workspace}/${objectId}?`;
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

Client.platform.prototype.updateIngestionHistory = function (
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
  const { workspace = "", objectId = "" } = args;
  const qpNames = ["token"];
  if (!workspace) throw new IEXJSException("Must provide 'workspace'");
  const url = `ingestion-history/${workspace}/${objectId}?`;
  return _platformDelete({
    url,
    queryParams: qpNames,
    ...Object.fromEntries(
      qpNames.filter((el) => el in args).map((el) => [el, args[el]])
    ),
    ...standardOptions,
  });
};

Client.platform.prototype.deleteIngestionHistory = function (
  options,
  standardOptions
) {
  return deleteIngestionHistory(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
