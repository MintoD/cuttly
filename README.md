# cuttly

**Unofficial Deno module for cutt.ly.

## Usage

### Promise way

```typescript
import CuttlyClient from "https://deno.land/x/cuttly@1.0.0/mod.ts";

// Shorten URL
const client = new CuttlyClient(<apiKey>);

client.shorten("https://example.com").then((url) => {
    console.log(url);
});

// Shorten URL with custom alias
const client = new CuttlyClient(<apiKey>);

client.custom("https://example.com", "examurl").then((url) => {
    console.log(url);
});
```

### Async/await way

```typescript
import CuttlyClient from "https://deno.land/x/cuttly@1.0.0/mod.ts";

// Shorten URL
const client = new CuttlyClient(<apiKey>);

(async() => {
    const res = await client.shorten("https://example.com");
    console.log(res);
})()

// Shorten URL with custom alias
const client = new CuttlyClient(<apiKey>);

(async() => {
    const res = await client.custom("https://example.com", "examurl");
    console.log(res);
})()
```

## License

Copyright (c) MintoD. All rights reserved.

Licensed under the MIT license.