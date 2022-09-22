/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */

import { IEXJSException } from "./exception";
import { _URL_PREFIX_CLOUD } from "./urls";

/**
 *
 * @param {object} options
 */
const _getIEXCloudApperate = (options) =>
  _pppIEXCloudApperateBase({
    base_url: _URL_PREFIX_CLOUD,
    method: "GET",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _pppIEXCloudApperateBase = async (options) => {
  const {
    base_url,
    method,
    url,
    data,
    version = "V1",
    format = "json",
    contentType,
  } = options;

  const endpoint = new URL(`${base_url(version)}${url}`);

  if (Array.isArray(options.queryParams))
    for (const name of options.queryParams)
      if (name in options)
        endpoint.searchParams.append(name, options[name]);

  return fetch(endpoint, {
    method,
    body: data,
    headers: {
      "Content-Type": contentType,
    },
  }).then(async (res) => {
    if (res.ok) {
      if (format === "json") {
        return res.json();
      }
      return res.text();
    }
    throw IEXJSException(`Response ${res.status} - ${await res.text()}`);
  });
};

/**
 *
 * @param {object} options
 */
const _postIEXCloudApperate = (options) =>
  _pppIEXCloudApperateBase({
    base_url: _URL_PREFIX_CLOUD,
    method: "POST",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _putIEXCloudApperate = (options) =>
  _pppIEXCloudApperateBase({
    base_url: _URL_PREFIX_CLOUD,
    method: "PUT",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _patchIEXCloudApperate = (options) =>
  _pppIEXCloudApperateBase({
    base_url: _URL_PREFIX_CLOUD,
    method: "PATCH",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _deleteIEXCloudApperateBase = async (options) => {
  const {
    base_url = _URL_PREFIX_CLOUD,
    url,
    token = "",
    version = "V1",
    format = "json",
    contentType,
  } = options;

  const endpoint = new URL(`${base_url(version)}${url}`);
  endpoint.searchParams.append("token", token);

  return fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": contentType,
    },
  }).then(async (res) => {
    if (res.ok) {
      if (format === "json") {
        return res.json();
      }
      return res.text();
    }
    throw IEXJSException(`Response ${res.status} - ${await res.text()}`);
  });
};

/**
 * for backwards compat, accepting token and version but ignoring
 * @param {object} options
 */
export const _apperateGet = async (options) => _getIEXCloudApperate(options);

/**
 *
 * @param {object} options
 */
export const _apperatePost = async (options) => _postIEXCloudApperate(options);

/**
 *
 * @param {object} options
 */
export const _apperatePut = async (options) => _putIEXCloudApperate(options);

/**
 *
 * @param {object} options
 */
export const _apperatePatch = async (options) =>
  _patchIEXCloudApperate(options);
/**
 *
 * @param {object} options
 */
export const _apperateDelete = (options) =>
  _deleteIEXCloudApperateBase(options);
