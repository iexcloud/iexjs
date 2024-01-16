# <img src="https://raw.githubusercontent.com/iexcloud/iexjs/main/docs/img/icon.png" width="300">

> **Important:** IEX Cloud is no longer maintaining iex.js.

*iex.js* (iexjs) is a JavaScript client of easy-to-use methods that wrap requests to [IEX Cloud endpoints](https://iexcloud.io/docs/) and [IEX Cloud legacy endpoints](https://iexcloud.io/docs/api/), so you can tap into financial data.

[![Build Status](https://github.com/iexcloud/iexjs/workflows/Build%20Status/badge.svg?branch=main)](https://github.com/iexcloud/iexjs/actions?query=workflow%3A%22Build+Status%22)
[![License](https://img.shields.io/github/license/iexcloud/iexjs.svg)](https://github.com/iexcloud/iexjs/)
[![npm](https://img.shields.io/npm/v/iexjs)](https://www.npmjs.com/package/iexjs)

## Referral

Please subscribe to IEX Cloud using [this referral code](https://iexcloud.io/s/6332a3c3 ).

## Install

Use [npm](https://www.npmjs.com) to install iexjs.

```bash
npm i @apperate/iexjs
```

> iexjs can also run in the browser via native *fetch* and *eventsource*, or from node via [cross-fetch](https://www.npmjs.com/package/cross-fetch) and [eventsource](https://github.com/EventSource/eventsource).

## Apperate Examples

The iexjs `Client` object stores your [API token](https://iexcloud.io/documentation/administration/access-and-security.html) (API key) and IEX Cloud API version (e.g., `v1`) for convenience.

**Tip:** The iexjs client automatically picks up tokens from the environment variable `IEX_TOKEN`.

Here are some examples.

**Get a stock quote:**

```javascript
const {Client} = require("@apperate/iexjs")
const client = new Client({api_token: "TOKEN", version: "VERSION"});
client.apperate.queryData({key: "AAPL", workspace: "CORE", id: "QUOTE"}).then((res) => {
    console.log(res);
});
```

**Get cash flow details:**

```javascript
const {Client} = require("@apperate/iexjs")
const client = new Client({api_token: "TOKEN", version: "VERSION"});
client.apperate.queryData({key: "AAPL", workspace: "CORE", id: "CASH_FLOW"}).then((res) => {
    console.log(res);
});
```

The `apperate` methods wrap calls to [Apperate APIs](https://iexcloud.io/docs/apperate-apis/), including the [Data API](https://iexcloud.io/docs/apperate-apis/data/), [Datasets API](https://iexcloud.io/docs/apperate-apis/datasets/), and more. The `queryData` method retrieves data from the dataset specified by the `id` parameter. You can retrieve data from any dataset you have access to, including `CORE` datasets.

> [Querying Datasets with iexjs](https://iexcloud.io/documentation/interacting-with-your-data/querying-data/querying-datasets-with-iexjs.html) provides details on searching datasets.

> The [Apperate iexjs documentation](./docs/apperate/apperate-iexjs.md) describes methods that use the client's `Apperate` class to operate on [Apperate](https://iexcloud.io/documentation/getting-started/what-is-iex-cloud-apperate.html) resources including data, datasets, metadata, and more.

## IEX Cloud Legacy Examples

`iexjs` provides wrappers for static data and SSE streaming data. The library supports the IEX Cloud legacy API through two interfaces. The first is a simple function call, passing in the API version and token as arguments

```javascript
const {chart} = require("iexjs");
chart({symbol: "AAPL", range: "1m"}, {token, version}).then((res) => {
    console.log(res);
});
```

Since the token rarely changes, we have a `Client` object for convenience:

```javascript
const {Client} = require("iexjs");
const client = new Client({api_token: "YOUR_TOKEN_HERE", version: "v1"});
client.chart({symbol: "AAPL", range: "1m"}).then((res) => {
    console.log(res);
});
```

The client will automatically pick up the API key from the environment variable `IEX_TOKEN`, or it can be passed as an argument. 

> [CATALOG.md](./CATALOG.md) lists the methods for the IEX Cloud Legacy API.

## License

This software is licensed under the Apache 2.0 license. See the
[LICENSE](LICENSE) and [AUTHORS](AUTHORS) files for details.
