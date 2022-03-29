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
const _getIEXCloudPlatform = (options) =>
  _pppIEXCloudPlatformBase({
    base_url: _URL_PREFIX_CLOUD,
    method: "GET",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _pppIEXCloudPlatformBase = async (options) => {
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
const _postIEXCloudPlatform = (options) =>
  _pppIEXCloudPlatformBase({
    base_url: _URL_PREFIX_CLOUD,
    method: "POST",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _putIEXCloudPlatform = (options) =>
  _pppIEXCloudPlatformBase({
    base_url: _URL_PREFIX_CLOUD,
    method: "PUT",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _patchIEXCloudPlatform = (options) =>
  _pppIEXCloudPlatformBase({
    base_url: _URL_PREFIX_CLOUD,
    method: "PATCH",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _deleteIEXCloudPlatformBase = async (options) => {
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
export const _platformGet = async (options) => _getIEXCloudPlatform(options);

/**
 *
 * @param {object} options
 */
export const _platformPost = async (options) => _postIEXCloudPlatform(options);

/**
 *
 * @param {object} options
 */
export const _platformPut = async (options) => _putIEXCloudPlatform(options);

/**
 *
 * @param {object} options
 */
export const _platformPatch = async (options) =>
  _patchIEXCloudPlatform(options);
/**
 *
 * @param {object} options
 */
export const _platformDelete = (options) =>
  _deleteIEXCloudPlatformBase(options);
