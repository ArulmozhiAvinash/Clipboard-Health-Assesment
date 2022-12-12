const { deterministicPartitionKey, createHashForData, checkForValidString } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal 'hello' when given hello to be as particpant key", () => {
    let event = { partitionKey: 'hello' }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("hello");
  });

  it("Returns the expected hashkey when given hello as input", () => {
    let event = 'hello'
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("ea80224d30664a6d5d6ed2460016177b429fdce58b820ecf490d470718e28886291085ef696f338781821c81cdeff08577a0acec0ff1906e05505d17a1d129a0");
  });

  it("Returns the expected hashkey when given a diffent event", () => {
    let event = { key: "Avinash" }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("d7eea7573229c0e9bed2276592965dc12ed5b02c5414b7f4524e3fcb95c88148bc6be2c5f66a7b06723d553b7ee13480e46fefa8f2b847bc741278d178c57724");
  });

  it("Returns  the type string when submitting particpant key as a number ", () => {
    let event = { partitionKey: 56 }
    const trivialKey = deterministicPartitionKey(event);
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey).toBe("56");
  });
});



describe("validateCheckForValidStringWithDifferentInputs", () => {
  it("Returns the false when given empty spaces", () => {
    const result = checkForValidString(' ');
    expect(result).toBe(false);
  });
  it("Returns the false when given empty input", () => {
    const result = checkForValidString('');
    expect(result).toBe(false);
  });
  it("Returns the false when given null", () => {
    const result = checkForValidString(null);
    expect(result).toBe(false);
  });
  it("Returns the true when given valid string", () => {
    const result = checkForValidString('Hello Test');
    expect(result).toBe(true);
  });
});

describe("validateCreateHashForData", () => {
  it("Returns the expected string when given 'HEllo' as input", () => {
    const result = createHashForData('HEllo');
    expect(result).toBe('f3b7a6b416161fd5351f6d25b6200471430ec543ebf5f7b26cc2a9f272044d0ae33d81bcc0990024781bc532d7edef6f1dadecee05d2f8ad8cf24d093cd0720c');
  });
  it("Returns the null when given no input", () => {
    const result = createHashForData();
    expect(result).toBe(null);
  });

  it("Returns the null when given empty string", () => {
    const result = createHashForData('');
    expect(result).toBe(null);
  });

  it("Returns the null when given empty spaces", () => {
    const result = createHashForData('  ');
    expect(result).toBe(null);
  });

  it("Returns the null when given numbers", () => {
    const result = createHashForData(12);
    expect(result).toBe(null);
  });
});

