const crypto = require("crypto");

exports.checkForValidString = (inputData) => {
  return inputData ? typeof inputData === 'string' && inputData.trim().length > 0 : false
}
exports.createHashForData = (inputData) => {
  return this.checkForValidString(inputData) ? crypto.createHash("sha3-512").update(inputData).digest("hex") : null;
}
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    candidate = event.partitionKey ? event.partitionKey : this.createHashForData(JSON.stringify(event))
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  candidate = typeof candidate !== "string" ? JSON.stringify(candidate) : candidate
  candidate = candidate.length > MAX_PARTITION_KEY_LENGTH ? this.createHashForData(candidate) : candidate

  return candidate;
};