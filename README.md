<div align="center">
<br />
    <h1>Plume URL.js</h1>
    <br />
    <p>
        <a href="https://voctal.dev/discord"><img src="https://img.shields.io/discord/1336303640725553213?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
        <a href="https://www.npmjs.com/package/@voctal/plume-url"><img src="https://img.shields.io/npm/v/@voctal/plume-url.svg?maxAge=3600" alt="npm version" /></a>
        <a href="https://www.npmjs.com/package/@voctal/plume-url"><img src="https://img.shields.io/npm/dt/@voctal/plume-url.svg?maxAge=3600" alt="npm downloads" /></a>
        <a href="https://github.com/voctal/plume-url.js/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/voctal/plume-url.js?logo=github&logoColor=ffffff" /></a>
    </p>
</div>

# About

`@voctal/plume-url` is a module that allows you to easily use Plume URL. See the [module docs](https://docs.voctal.dev/docs/packages/plume-url/stable), and the [API docs](https://url.voctal.dev/docs) to understand how to use it.

# Installation

```sh
npm install @voctal/plume-url
```

# Links

- [Plume URL](https://url.voctal.dev)
- [Plume URL documentation](https://url.voctal.dev/docs)
- [Module documentation](https://docs.voctal.dev/docs/packages/plume-url/stable)
- [Discord server](https://voctal.dev/discord)
- [GitHub](https://github.com/voctal/plume-url.js)
- [npm](https://npmjs.com/package/@voctal/plume-url)
- [Voctal](https://voctal.dev)

# Examples

If you are developing a Discord bot using `discord.js`, here is how to use Plume URL:

```js
const { Client } = require("discord.js");
const { PlumeURL } = require("@voctal/plume-url");

// Your discord.js client
const client = new Client({
    /* ... */
});

// Attach PlumeURL to your client
client.plumeURL = new PlumeURL({ apiKey: "YOUR-API-KEY" });
```

You can now use Plume URL anywhere in your bot. <br/>For example, in a slash command:

```js
const userId = "619838036846575617";

// Create a new URL
const data = await client.plumeURL.createURL({
    url: "https://google.com",
    customId: userId, // The custom ID allows your users to retrieve their URLs later
});
console.log(data);

// Search for the URLs you created
// You can filter by custom ID if needed
const urls = await client.plumeURL.search({ limit: 5, customId: userId });
console.log(urls);
```

# Documentation

Plume URL provides two main resources for documentation:

- **API Reference:**  
   [Plume URL Documentation](https://url.voctal.dev/docs)  
   This documentation covers all available endpoints, types, and detailed comments for the API.

- **Module Reference:**  
   [Module Documentation](https://docs.voctal.dev/docs/packages/plume-url/stable)  
   This documentation explains how to use the `@voctal/plume-url` npm package, with all available methods and types.

For most use cases, you'll want to refer to the [`PlumeURL` class page](https://docs.voctal.dev/docs/packages/plume-url/stable/PlumeURL:Class), which lists all available methods for interacting with the API through this module.

# Help

If you don't understand something in the documentation, are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [Discord Server](https://voctal.dev/discord).
