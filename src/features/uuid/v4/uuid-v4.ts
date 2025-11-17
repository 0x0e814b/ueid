import { VARIANT_BITS_V4, VARIANT_MASK, VERSION_BITS_V4, VERSION_MASK } from "@constants/uuid-verisions.constant";
import generateRandomUint32 from "@utils/generate-random-uint-32";

export function uuidv4() {
  const randomUint32Array = Uint32Array.of(
    generateRandomUint32(),
    generateRandomUint32(),
    generateRandomUint32(),
    generateRandomUint32(),
  );
  const signatures = new Uint8Array(randomUint32Array.buffer);

  // clear bits for set version and variant
  signatures[6] &= VERSION_MASK;
  signatures[8] &= VARIANT_MASK;

  // set version and variant with version;
  signatures[6] |= VERSION_BITS_V4;
  signatures[8] |= VARIANT_BITS_V4

  return signatures;
}