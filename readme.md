# ueid

Unique Emoji Identifier

## Installation

```shell
npm i @0x0e814b/ueid
```

## Feature

Create uuidv4 with random bytes and wrapping with custom emojis.  
so inefficiently and unique.

currently, just an idea.

## Usage

```ts
import { ueidv4 } from '@0x0e184b/ueid';
const ueid = ueidv4(); // 🚃🌼🍏🚨🔗🌳🌷🔗🌇😚🔗🍋🎋🏡🍒🌄🍋🎃
```

```html
<script src="ueid.js"></script>
<script>
  console.log(ueid.ueidv4()) // 🏃🌻🎅🍮🍃🔗🚒🚱🔗🚻🚄🔗🚑🏒🚚🚞🍻🚧🌺
</script>

```

## Feature

Create UUIDv4 with random bytes and wrapping with custom emojis.  
it consume 3~4 times more byte depend which emoji appeared.  
so inefficiently and unique.

currently, just an idea.


## Todo

- [ ] - lint, tsconfig, publish(?)
- [ ] - refactoring
- [ ] - build setting

## reference

[unicode.org - emoji-data](http://www.unicode.org/Public/emoji/1.0/emoji-data.txt)  
[references](./references/)
