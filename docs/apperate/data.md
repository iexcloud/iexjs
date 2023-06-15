# Data

These JavaScript methods wrap Apperate [Data API](https://iexcloud.io/docs/apperate-apis/data) REST endpoints.

## Methods:

- [queryData()](#querydata)
- [write()](#write)

---

## queryData()

Query data from the given dataset. For time series data, you can time-window the data using parameters such as `to`, `from`, `range`, and more.

### Syntax

```javascript
apperate.queryData(args: Object)
```

### Parameters

This method takes an arguments object that specifies the following **Required** parameters and any of the following non-default parameters.

Parameter | Type | Description
--------- | ---- | -----------
`workspace` | String | **Required.** [Workspace](https://iexcloud.io/documentation/reference/glossary.html#workspace) name or `core` if you're querying an IEX Cloud Data dataset.
`id` | String | **Required.** ID of dataset to query.
`batchSeparator` | string | A character for separating the request's dataset IDs and keys; comma (`,`) is the default separator.<br>Important: Alpha-numeric characters are not supported as separators.
`calendar` | string | Boolean. Used in conjunction with `range` to return data in the future.
`dateField` | string | All time series data is stored by a single date field, and that field is used for any range or date parameters. You may want to query time series data by a different date in the result set. To change the date field used by range queries, pass the case sensitive field name with this parameter. For example, corporate buy back data may be stored by announce date, but also contains an end date which you’d rather query by. To query by end date you would use this: `dateField=endDate&range=last-week`
`filter` | string | Returns a subset of response attributes based on a comma-delimited list of attribute names. The names are case-sensitive and are listed in each data endpoint doc's **Response Attributes** section.<br>Example: `filter=symbol,volume,lastSalePrice` returns only these three specified attributes.
`first` | string | `first=n` returns the first records.
`format` | string | The response format. You can specify CSV format `csv` (content type `text/csv`) or go with the default JSON format `json` (content type `application/json`).<br><br>*Important:* If you want to use `csv` with a private dataset, make sure to specify content type `text/csv`. For example, you would include `-H Accept:text/csv` in cURL commands like this one: `curl -H Accept:text/csv -sk https://cloud.iexapis.com/v1/data/WORKSPACE/DATASET?token=token\&limit=3&format=csv`
`from` | string | Returns data on or after the given from date. Format `YYYY-MM-DD`.
`includeSystemRecordProperties` | string | Default is `false`. If set to `true`, each returned record contains an object named `_systemRecordProperties`.  It contains system properties `id`, `key`, `subkey`, `date`, and `updated`.
`interval` | string | `interval=n` returns every `n`th record in the result.
`last` | string | `last=n` returns the last `n` records.
`limit` | string | Defaults to `1` if no date index or `range` is specified. Limits the number of results returned.
`next` | string | Returns the next n number of records in the series.
`offset` | string | 
`on` | string | Returns data on the given date. Format `YYYY-MM-DD`.
`queryId` | string | The query ID is a string of one, two, or three alphanumeric characters. If specified, fetches records changed or added since this query was last run. If the query ID does not exist, the query is created. The query expires after 24 hours of inactivity.
`range` | string | Returns data for a given range. See the **Range Parameter** table below.
`schema` | boolean | Returns just the types of the result set. Simply pass in the `schema=true` and the endpoint returns an array of column names and data types from a resulting data record.<br>This is useful if you want to know the type of returned data. For example, if you are building a SQL table from endpoint results, you can verify column types. Available for IEX Cloud Data datasets only.
`sort` | string | Specify the order of results, either `ASC` or `DESC`. Historical queries, including queries that use last, will default to descending date order (e.g. first record returned is most recent record). Forward looking queries, including queries that use `first` or specify `calendar`, will default to ascending date order (e.g. first record returned is nearest record in the future or from the start).
`subattribute` | string | Allows you to query time series by fields in the result set.
`to` | string | Returns data on or before the given to date. Format `YYYY-MM-DD`.
`transform` | string | Egress transforms are undocumented for now. Please inquire if you are curious. <!-- TODO link to transforms catalog when it's available -->

*Supported `range` values:*

Range Parameter | Description
--------- | -----------
`today` | Returns data for today
`yesterday` | Returns data for yesterday
`ytd` | Returns data for the current year
`last-week` | Returns data for Sunday-Saturday last week
`last-month` | Returns data for the last month
`last-quarter` | Returns data for the last quarter
`d` | Use the short hand `d` to return a number of days. Example: `2d` returns 2 days. If `calendar=true`, data is returned from today forward.
`w` | Use the short hand `w` to return a number of weeks. Example: `2w` returns 2 weeks. If `calendar=true`, data is returned from today forward.
`m` | Use the short hand `m` to return a number of months. Example: `2m` returns 2 months. If `calendar=true`, data is returned from today forward.
`q` | Use the short hand `q` to return a number of quarters. Example: `2q` eturns 2 quarters. If `calendar=true`, data is returned from today forward.
`y` | Use the short hand `y` to return a number of years. Example: `2y` returns 2 years. If `calendar=true`, data is returned from today forward.
`tomorrow` | Calendar data for tomorrow. Requires `calendar=true`.
`this-week` | Calendar data for Sunday-Saturday this week. Requires `calendar=true`.
`this-month` | Calendar data for current month. Requires `calendar=true`.
`this-quarter` | Calendar data for current quarter. Requires `calendar=true`.
`next-week` | Calendar data for Sunday-Saturday next week. Requires `calendar=true`.
`next-month` | Calendar data for next month. Requires `calendar=true`.
`next-quarter` | Calendar data for next quarter. Requires `calendar=true`.
specific quarter | Use the short hand `Q[1-4]YYYY` to return a specific quarter for a given year. Example: `Q22020` returns from January 1, 2020 to March 31, 2020.
specific half | Use the short hand `H[1-2]YYYY` to return a specific half for a given year. Example: `H12020` returns from January 1, 2020 to June 30, 2020.
specific year | Use the short hand `YYYY` to return a specific half for a given year. Example: `2020` returns from January 1, 2020 to December 31, 2020.

### Returns

An array of data record objects.

### Examples

Example - Get Apple's Cash Flow

```javascript
client.apperate.queryData({key: "AAPL", workspace: "CORE", id: "CASH_FLOW"}).then((res) => {
    console.log(res);
});
```

Returns:

```javascript
[
  {
    capitalExpenditures: -2916000000,
    cashChange: 55872000000,
    cashFlow: 28560000000,
    cashFlowFinancing: -25724000000,
    changesInInventories: 7482000000,
    changesInReceivables: 35899000000,
    currency: 'USD',
    depreciation: 2898000000,
    dividendsPaid: null,
    exchangeRateEffect: null,
    filingType: '10-Q',
    fiscalDate: '2023-04-01',
    fiscalQuarter: 2,
    fiscalYear: 2023,
    investingActivityOther: null,
    investments: null,
    netBorrowings: 40083000000,
    netIncome: 24160000000,
    otherFinancingCashFlows: null,
    reportDate: '2023-05-05',
    symbol: 'AAPL',
    totalInvestingCashFlows: 2319000000,
    id: 'CASH_FLOW',
    key: 'AAPL',
    subkey: 'quarterly',
    date: 1680307200000,
    updated: 1686754897000
  }
]
```

| **Note:** The [iex.js JavaScript Library](https://iexcloud.io/documentation/developer-tools/iexjs-library.html#initialize-a-client) overview demonstrates initializing an iex.js `Client` object.

### Additional Resources

[Query Data with iex.js](https://iexcloud.io/documentation/search-data/querying-datasets-with-iexjs.html)

[Query Time Series Data](https://iexcloud.io/documentation/search-data/querying-datasets.html)

---

## write()

Write data records and optionally publish them as events.

### Syntax

```javascript
apperate.write(args: Object)
```

### Parameters

This method takes an arguments object that specifies the following **Required** parameters and any of the following non-default parameters.

Parameter | Type | Description
--------- | ---- | -----------
`workspace` | String | **Required.** [Workspace](https://iexcloud.io/documentation/reference/glossary.html#workspace) name.
`id` | String | **Required.** Destination dataset ID.
`data` | Array | **Required.** An array of data record objects. 
`createDatasetOnDemand` | boolean | Default is `true`. If set to `true` and the target dataset doesn't exist, create it.
`duplicateKeyHandling` | boolean | Default is `ignore`. Allowed values are `ignore` and `replace`. This parameter controls how new records with the same unique key are handled. If set to `ignore`, new records with the same unique keys are discarded. If set to `replace`, new records with the same unique key replace the old records in Apperate.
`event` | boolean | Default is `true`. If set to `true`, generate an event for the data.
`persist` | boolean | Default is `true`. If set to `true`, store the data in an Apperate dataset.
`updateState` | boolean | Default is `true`. If set to `true`, update Apperate's rule state.
`wait` | boolean | Default is `true`. If set to `true`, the response is not returned until the data can be queried.

### Returns

An object containing a `success` boolean and a `message` string.

### Examples

Example - Add a user record

```javascript
client.apperate.write({
    workspace: "YOUR_WORKSPACE", 
    id: "YOUR_DATASET_TO_CREATE", 
    createDatasetOnDemand: true, 
    data: [{"firstname": "Jasmine", "lastname": "Doe", "email": "jasmine.doe@foo.org", "org": "Foo LLC"}]})
        .then((res) => {
            console.log(res);
        });
```

Returns:

```javascript
{success: true, message: "wrote 1 messages"}
```

| **Note:** The [iex.js JavaScript Library](https://iexcloud.io/documentation/developer-tools/iexjs-library.html#initialize-a-client) overview demonstrates initializing an iex.js `Client` object.

### Additional Resources

[Write Data in Real Time with the apperate.write() JS Method](https://iexcloud.io/documentation/write-data/write-data-with-the-apperate-write-js-method.html)

[Write Data in Real Time with POST /record](https://iexcloud.io/documentation/write-data/write-data-in-real-time-with-post-record.html)