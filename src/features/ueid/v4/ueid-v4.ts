import { getEmojiCodePoint } from "../../emoji/get-emoji-codepoint";
import { uuidv4 } from "../../uuid/v4/uuid-v4"

export const ueidv4 = (): string => {
  const uuid = uuidv4();
  let ueid = '';
  for (let i = 0; i<uuid.length; i++) {
    const emojiCodePoint = getEmojiCodePoint(uuid[i]);
    const emoji = String.fromCodePoint(emojiCodePoint);
    ueid += emoji;
    if(i >= 3 && i <= 9 && !(i % 2))  {
      ueid += String.fromCodePoint(0x1f517);
    }
  }
  return ueid;
}
