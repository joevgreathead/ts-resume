# Joe Greathead's Resume

This simple repository is set up to build my text based resume using the following:

- [TypeScript](https://www.typescriptlang.org)
- [JSX](https://reactjs.org/docs/introducing-jsx.html) (via [Preact](https://preactjs.com))
- [Styled Components](https://styled-components.com)
- [Webpack](https://webpack.js.org)
- [Yarn](https://yarnpkg.com)

The hosted version of my resume can be found at: [resume.joevg.dev](https://resume.joevg.dev)

A printed PDF version of the same can be found on [Dropbox](https://www.dropbox.com/s/gxfidqakjqboep7/JoeGreathead_Resume.pdf?dl=0).

You can also find me on [Linkedin](https://www.linkedin.com/in/joevgreathead/) or on my blog at [joevg.dev](https://joevg.dev).

## Set up

As with anything, start by cloning the repo, then create a data.ts file in the src/ directory. A `data-sample.ts` file is provided with dummy data as an example. Just change the file name from `data-sample.ts` to `data.ts` in order to use it.

Then:

```bash
yarn install
yarn start
```

The server should start and be located behind localhost:8080/.

## Deployment

Bundle and assets can be prepared by:

```bash
yarn build
```

Pre-rendering the HTML page can then be done by:

```bash
yarn post
```

## Motivation

I was tired of using MS Word or Apple's Pages app to write up simple text-based resumes. Getting everything aligned correctly was a lot more work than it was generally worth. By setting up the base layout of my resume using web technologies, I have a lot more flexibility in what I can do with fewer limitations over my control.

My workflow is now reduced to:

- starting the server locally
- updating a data.ts file with the updated text (stored separately)
- open the page in a browser (typically Chrome)
- printing to PDF

## FAQ

### Why use (JSX/TypeScript) just for your resume?

I work in code every day and switching to using a word processor feels restricting. These technologies are what I enjoy using to build products and tools, so it only makes sense to me to represent myself through them as well.

In particular, React's JSX model is an easy way to compartmentalize components - especially when using FunctionComponents in a simple use case such as this. TypeScript, as well, has become my preferred style of JavaScript over the last year.

### Why use Preact over React?

React, for a small and simple site, can create a larger JS bundle than is necessary. I use Preact as a light weight alternative which serves the same functionality and developer experience as I am used to with React. For exmaple, the JS bundle is bloated to around 1MB (about 375KB compressed) using standard React in comparison to about 275KB (about 160KB compressed) with Preact.

### Why does it seem so plain? Couldn't you do more with these technologies?

Yes! The first goals of this repo was to prove out the following:

- A replication of my existing resume format (built in MS Word) could easily be created and maintained using React.
- Print styles and printing to PDF via a browser could be simply maintained and reproduced once a base format was established and just the input data was updated.

I've proven the two points above and will consider new/flashier formats for future iterations. For now, this acts as a small, easy to update place to try out new things and maintain a public presence for myself.

## License

This code is licensed under the MIT License.
