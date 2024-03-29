import { LIMIT } from '@constants/global.constant';

export const HEX_MAP: string[] = Array.from({ length: LIMIT }, (_, index) => {
  const hex = index.toString(16);
  return index < 16 ? '0'+hex : hex
});