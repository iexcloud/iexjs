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

//   export const listJobs = ({ provider, type = "ingest" }, standardOptions) => {
//     if (!provider) throw new IEXJSException("Must provide `provider`");
//     const url = `jobs/${provider}/${type}`;
//     return _get({ url, ...standardOptions });
//   };
  
//   Client.platform.prototype.listJobs = function (options, standardOptions) {
//     return listJobs(options, {
//       token: this._token,
//       version: this._version,
//       ...standardOptions,
//     });
//   };
  
//   export const listDatasets = ({ provider = "CORE", id = "" }, standardOptions) =>
//     _get({ url: _queryUrl({ provider, id }), ...standardOptions });
  
//   Client.platform.prototype.listDatasets = function (options, standardOptions) {
//     return listDatasets(options, {
//       token: this._token,
//       version: this._version,
//       ...standardOptions,
//     });
//   };
  
//   export const createDataset = ({ provider, schema }, standardOptions) => {
//     if (!provider) throw new IEXJSException("Must provide `provider`");
//     if (!schema) throw new IEXJSException("Must provide `schema`");
//     const url = _queryUrl({ provider, limit: null, basePath: "datasets" });
  
//     return _platformPost({
//       url,
//       data: schema,
//       token_in_params: true,
//       ...standardOptions,
//     });
//   };
  
//   Client.platform.prototype.createDataset = function (options, standardOptions) {
//     return createDataset(options, {
//       token: this._token,
//       version: this._version,
//       ...standardOptions,
//     });
//   };
  
//   // currently using post to add data
//   export const loadData = ({ provider, id, data }, standardOptions) => {
//     if (!provider) throw new IEXJSException("Must provide `provider`");
//     if (!id) throw new IEXJSException("Must provide `id`");
//     if (!data) throw new IEXJSException("Must provide `data`");
//     const url = _queryUrl({ provider, id, limit: null, basePath: "datasets" });
  
//     return _platformPost({
//       url,
//       data,
//       token_in_params: true,
//       ...standardOptions,
//     });
//   };
  
//   Client.platform.prototype.loadData = function (options, standardOptions) {
//     return loadData(options, {
//       token: this._token,
//       version: this._version,
//       ...standardOptions,
//     });
//   };
  
//   // TODO: data body update
//   export const modifyDataset = ({ provider, schema }, standardOptions) => {
//     if (!provider) throw new IEXJSException("Must provide `provider`");
//     if (!schema) throw new IEXJSException("Must provide `schema`");
//     const url = _queryUrl({ provider, limit: null, basePath: "datasets" });
  
//     return _platformPatch({
//       url,
//       data: schema,
//       token_in_params: true,
//       ...standardOptions,
//     });
//   };
  
//   Client.platform.prototype.modifyDataset = function (options, standardOptions) {
//     return modifyDataset(options, {
//       token: this._token,
//       version: this._version,
//       ...standardOptions,
//     });
//   };
  
//   export const modifyData = (options, standardOptions = {}) => {
//     const { data } = options;
  
//     return _platformPut({
//       url: _queryUrl({ provider, id, limit: null, basePath: "datasets" }),
//       data,
//       token_in_params: true,
//       ...standardOptions,
//     });
//   };
  
//   Client.platform.prototype.modifyData = function (options, standardOptions) {
//     return modifyData(options, {
//       token: this._token,
//       version: this._version,
//       ...standardOptions,
//     });
//   };
  
//   export const deleteData = (options, standardOptions = {}) => {
//     const { provider, id, key } = options
//     if (!provider) throw new IEXJSException("Must provide `provider`");
//     if (!id) throw new IEXJSException("Must provide `id`");
//     if (!key) throw new IEXJSException("Must provide `id`");
//     return _platformDelete({
//       url: _queryUrl({ provider, id, key, limit: null, basePath: "datasets" }),
//       ...standardOptions,
//     });
//   }
  
//   Client.platform.prototype.deleteData = function (options, standardOptions) {
//     return deleteData(options, {
//       token: this._token,
//       version: this._version,
//       ...standardOptions,
//     });
//   };
  
//   export const deleteDataset = ({ provider, id }, standardOptions) => {
//     if (!provider) throw new IEXJSException("Must provide `provider`");
//     if (!id) throw new IEXJSException("Must provide `id`");
//     return _platformDelete({
//       url: _queryUrl({ provider, id, limit: null, basePath: "datasets" }),
//       ...standardOptions,
//     });
//   };
  
//   Client.platform.prototype.deleteDataset = function (options, standardOptions) {
//     return deleteDataset(options, {
//       token: this._token,
//       version: this._version,
//       ...standardOptions,
//     });
//   };
  
//   export const createDataJob = ({ provider, type, body = {} }, standardOptions) => {
//     if (!provider) throw new IEXJSException("Must provide `provider`");
//     if (!type) throw new IEXJSException("Must specify data job type");
//     const url = `jobs/${provider}/${type}`;
//     return _platformPost({
//       url,
//       data: body,
//       token_in_params: true,
//       ...standardOptions,
//     });
//   };
  
//   Client.platform.prototype.createDataJob = function (options, standardOptions) {
//     return createDataJob(options, {
//       token: this._token,
//       version: this.version,
//       ...standardOptions,
//     });
//   }
export const jobs_fb7bd58be697403d8745c98f15249f23 = ({ provider, type, data, contentType = "application/json", }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `jobs/${provider}/${type}`;
  return _platformPost({
    url,
    data,
    contentType,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.jobs_fb7bd58be697403d8745c98f15249f23 = function (options, standardOptions) {
  return jobs_fb7bd58be697403d8745c98f15249f23(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const jobs_1ff7a6dd532b42719fa56a5965c9c501 = ({ provider, type, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  const url = `jobs/${provider}/${type}`;
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.jobs_1ff7a6dd532b42719fa56a5965c9c501 = function (options, standardOptions) {
  return jobs_1ff7a6dd532b42719fa56a5965c9c501(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const jobs_2d987c1577154b25a54a220e2e3b35f9 = ({ provider, type, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  const url = `jobs/${provider}/${type}/query`;
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.jobs_2d987c1577154b25a54a220e2e3b35f9 = function (options, standardOptions) {
  return jobs_2d987c1577154b25a54a220e2e3b35f9(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const jobs_624718ca7e544b5c9c4628f9b4edc7c0 = ({ provider, type, id, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `jobs/${provider}/${type}/${id}`;
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.jobs_624718ca7e544b5c9c4628f9b4edc7c0 = function (options, standardOptions) {
  return jobs_624718ca7e544b5c9c4628f9b4edc7c0(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const jobs_cdcc9368ccfc4cf9b32aae36d1b0375f = ({ provider, type, id, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `jobs/${provider}/${type}/${id}/invalid-records-log`;
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.jobs_cdcc9368ccfc4cf9b32aae36d1b0375f = function (options, standardOptions) {
  return jobs_cdcc9368ccfc4cf9b32aae36d1b0375f(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const jobs_06c8471f911a44c3808de9e417fc5348 = ({ provider, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  const url = `aws-onboarding/${provider}/configure-aws-s3`;
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.jobs_06c8471f911a44c3808de9e417fc5348 = function (options, standardOptions) {
  return jobs_06c8471f911a44c3808de9e417fc5348(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const listDatasets = ({ provider, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  const url = _queryUrl({ provider, basePath: "datasets" });
  return _get({
    url,
    token_in_params: true,
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

export const getDataset = ({ provider, id, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = _queryUrl({ provider, id, basePath: "datasets" });
  return _get({
    url,
    token_in_params: true,
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

export const registerDataset = ({ provider, schema, contentType = "application/json", }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!schema) throw new IEXJSException("Must provide 'schema'");
  const url = _queryUrl({ provider, basePath: "datasets" });
  return _platformPost({
    url,
    data: schema,
    contentType,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.registerDataset = function (options, standardOptions) {
  return registerDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const loadData = ({ provider, id, data, contentType, overwrite = false, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  if (!contentType) throw new IEXJSException("Must provide 'contentType'");
  const url = _queryUrl({ provider, id, basePath: "datasets" });
  if (overwrite) {
    return _platformPut({
      url,
      data,
      contentType,
      token_in_params: true,
      ...standardOptions,
    });
  } else {
    return _platformPost({
      url,
      data,
      contentType,
      token_in_params: true,
      ...standardOptions,
    });
  };
};

Client.platform.prototype.loadData = function (options, standardOptions) {
  return loadData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const modifyDataset = ({ provider, id, data, contentType = "application/json", }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = _queryUrl({ provider, id, basePath: "datasets" });
  return _platformPatch({
    url,
    data,
    contentType,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.modifyDataset = function (options, standardOptions) {
  return modifyDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteDataset = ({ provider, id, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = _queryUrl({ provider, id, basePath: "datasets" });
  return _platformDelete({
    url,
    token_in_params: true,
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

export const deleteData = ({ provider, id, key, subkey = "", date = "", }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!key) throw new IEXJSException("Must provide 'key'");
  const url = _queryUrl({ provider, id, key, subkey, date, basePath: "datasets" });
  return _platformDelete({
    url,
    token_in_params: true,
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

