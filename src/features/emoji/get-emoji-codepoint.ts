import { EMOJI_RANGES, EMOJI_LEN } from "./constants";

export function getEmojiCodePoint(byte: number) {
  const emojiInfo = EMOJI_RANGES[byte % EMOJI_LEN];
  const emojiDiff = byte % (emojiInfo.end - emojiInfo.start);
  return parseInt(`0x1f${(emojiInfo.start + emojiDiff).toString(16)}`, 16);
}