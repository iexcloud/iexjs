/* eslint-disable no-unused-vars */
/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-undef */

const fetch = require("cross-fetch");
const { Client, overrideUrl } = require("../src/js");

beforeAll(() => {
  global.fetch = fetch;
});

// set timeout to 30s for long calls
jest.retryTimes(2);
jest.setTimeout(50000);

afterEach(async () => {
  await new Promise((r) => setTimeout(r, 500));
});

describe("Dataset schemas", () => {
  test("all schemas", async () => {
    const client = new Client({ api_token: TOKEN });
    const res = await client.platform.data({});
    expect(res).toBeDefined();
  });

  test("workspace schemas", async () => {
    const client = new Client({ api_token: TOKEN });
    const res = await client.platform.data({ workspace: WORKSPACE_1 });
    expect(res).toBeDefined();
  });

  test("workspace dataset", async () => {
    const client = new Client({ api_token: TOKEN });
    const res = await client.platform.data({
      workspace: WORKSPACE_1,
      id: DATASET_1,
    });
    expect(res).toBeDefined();
  });
});
