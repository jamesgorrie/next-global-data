If we define:

- `server` - the application running on the server / locally / not the browser
- `client` - the browser

The question we are trying to answer:

**How do I get data to the client that is available via HTTP without adding the overhead of latency and data cost of fetching via HTTP directly from the client?**

An answer - **let the server app fetch the data, and share it with the client app.**

If we agree with that, next question!

**Where is accessible to both the server application and the client?**

Some answers:

- env vars? Can’t find a way
- memory vars? Can’t find a shared memory scope
- publicRuntimeConfig in next.config? not async, can set the promises at a server level, but we still then set the overhead on the client
- setConfig publicRuntimeConfig? This works and makes the data available on the server, but not the client. [But, 🤷](https://github.com/vercel/next.js/issues/17354#issuecomment-699695343)
- files? available via server.fs.write and client.module.import)

Winners?

- files