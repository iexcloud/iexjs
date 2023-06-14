# Datasets

These JavaScript methods wrap Apperate [Datasets API](https://iexcloud.io/docs/apperate-apis/datasets) REST endpoints.

Table of Contents:

- [getDataset()](#getdataset)
- [listDatasets()](#listdatasets)

---

## getDataset()

Returns the details of the given workspace dataset.

### Syntax

```javascript
apperate.getDataset(args: Object)
```

### Parameters

For `args`, pass in an object that specifies the following parameters.

Parameter | Type | Description
--------- | ---- | -----------
`workspace` | String | **Required.** The name of the dataset's [workspace](https://iexcloud.io/documentation/reference/glossary.html#workspace).
`id` | String | **Required.** The dataset's ID.

### Returns

Returns the dataset object, including its schema.

### Examples

Example - Get MY_CUSTOMBIDS dataset:

```javascript
const my_dataset = client.apperate.getDataset({workspace: "MY_WORKSPACE", id: "MY_CUSTOMBIDS"});
```

Returns:

```javascript
{
  columnMapping: { date: 'date', key: 'symbol', subkey: 'volume' },
  datasetId: 'DATASET_OMCNZEAKN',
  date: 1686772172000,
  description: '',
  keys: 0,
  parentDatasetId: null,
  records: 1257,
  schema: {
    properties: {
      close: [Object],
      date: [Object],
      high: [Object],
      low: [Object],
      open: [Object],
      symbol: [Object],
      volume: [Object]
    },
    required: [ 'symbol', 'volume', 'date' ],
    type: 'object'
  },
  smartLinkAttributes: [ { attributeName: 'symbol', type: 'equity' } ],
  updated: 1686772176001
}
```

| **Note:** The [iex.js JavaScript Library](https://iexcloud.io/documentation/developer-tools/iexjs-library.html#initialize-a-client) overview demonstrates initializing an iex.js `Client` object.

### Additional Resources

[Get a Dataset](https://iexcloud.io/docs/apperate-apis/datasets/get-a-dataset)

[Create a Dataset with the API](https://iexcloud.io/documentation/managing-your-data/creating-a-dataset-with-the-api.html)

---

## listDatasets()

Returns the general information of all the given workspace's datasets.

### Syntax

```javascript
apperate.listDatasets(args: Object)
```

### Parameters

For `args`, pass in an object that specifies the `workspace` and any of the following optional parameters.

Parameter | Type | Description
--------- | ---- | -----------
`workspace` | string | **Required.** The name of the [workspace](https://iexcloud.io/documentation/reference/glossary.html#workspace).
`limit` | number | Limits the number of results returned.

### Returns

An array of general workspace dataset information.

### Examples

> Example - todo

```javascript
[
  {
    columnMapping: { date: 'date', key: 'symbol', subkey: 'volume' },
    datasetId: 'DATASET_OMCNZEAKN',
    date: 1686772172000,
    description: '',
    keys: 0,
    parentDatasetId: null,
    records: 1257,
    schema: { properties: [Object], required: [Array], type: 'object' },
    smartLinkAttributes: [ [Object] ],
    updated: 1686772176001
  },
  {
    columnMapping: { date: 'time', key: 'type', subkey: 'sequence' },
    datasetId: 'DATASET_YXWF17BNV',
    date: 1686769157000,
    description: '',
    keys: 0,
    parentDatasetId: null,
    records: 117,
    schema: { properties: [Object], required: [Array], type: 'object' },
    updated: 1686769180000
  }
]
```

| **Note:** The [iex.js JavaScript Library](https://iexcloud.io/documentation/developer-tools/iexjs-library.html#initialize-a-client) overview demonstrates initializing an iex.js `Client` object.

### Additional Resources

[List Datasets](https://iexcloud.io/docs/apperate-apis/datasets/list-datasets)

[Create a Dataset with the API](https://iexcloud.io/documentation/managing-your-data/creating-a-dataset-with-the-api.html)