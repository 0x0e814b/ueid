import { ANIMAL } from "./animal";
import { ENTERTAINMENT } from "./entertainment";
import { FACE } from "./face";
import { FOODS } from "./foods";
import { ITEMS } from "./items";
import { NATURE } from "./nature";
import { SIGNS } from "./signs";
import { STRUCTURES } from "./structures";
import { TRANSPORTS } from "./transports";
import { VEGIS } from "./vegis";
import { WEATHERS } from "./weathers";


interface EMOJI_INFO  {
  start:number;
  end: number;
  include?: number[];
  exclude?: number[];
}

export const EMOJI_RANGES: EMOJI_INFO[] = [
  WEATHERS,
  NATURE,
  VEGIS,
  FOODS,
  ITEMS,
  ENTERTAINMENT,
  STRUCTURES,
  ANIMAL,
  FACE,
  TRANSPORTS,
  SIGNS
];

export const EMOJI_LEN = EMOJI_RANGES.length;