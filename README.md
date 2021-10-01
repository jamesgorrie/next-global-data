If we define:

- `server` - the application running on the server / locally / not the browser
- `client` - the browser

The question we are trying to answer:

**How do I get data to the client that is fetched via HTTP without adding the overhead of latency and data cost of fetching via HTTP directly from the client?**

An answer - **let the server fetch the data, and share it with the client.**

If we agree with that, next question!

**Things to test**

- [ ] the server can set the value
- [ ] the server can update the value on an interval
- [ ] the client can read the initial value
- [ ] the client can read updated values transparently
- [ ] it works both in `dev` and `prod` mode

**places a value can be read**
- [ ] in [data fetching methods](https://nextjs.org/docs/basic-features/data-fetching)
- [ ] in components via `import`
- [ ] the value is available via client e.g. `useEffect`

**Different stores**

- memory
- env variables
- next config
- file system
