// support after node.js 17.4.0
const UNSUPPORTED_CRYPTO = typeof crypto !== 'undefined' && typeof crypto.getRandomValues !== 'undefined'
const MAX_UINT_32 = Math.pow(2, 32);

function getRandomWithMath(): number {
  return Math.trunc(Math.random() * MAX_UINT_32);
}

function getCryptoRandom(): number {
  const uintBuffer = new Uint32Array(1);
  crypto.getRandomValues(uintBuffer);
  return uintBuffer[0];
}

export default UNSUPPORTED_CRYPTO ? getRandomWithMath : getCryptoRandom;