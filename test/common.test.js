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
const { Client } = require("../src/js");

const SYMBOL = "BAC";

beforeAll(() => {
  global.fetch = fetch;
});

// retry twice and set timeout to 30s for long calls
jest.retryTimes(2);
jest.setTimeout(50000);

afterEach(async () => {
  await new Promise((r) => setTimeout(r, 500));
});

describe("Schema arg", () => {
  const client = new Client({ version: "sandbox" });

  test("json", async () => {
    const res = await client.quote({ symbol: SYMBOL }, { format: "json" });
    expect(typeof res).toBe("object");
  });

  test("csv", async () => {
    const res = await client.quote({ symbol: SYMBOL }, { format: "csv" });
    expect(typeof res).toBe("string");
  });

  test("schema", async () => {
    const res = await client.quote({ symbol: SYMBOL }, { format: "schema" });
    expect(typeof res).toBe("object");
    expect(res.symbol).toBe("string");
  });
});
