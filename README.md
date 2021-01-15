# Joe Greathead's Resume

This simple repository is set up to build my text based resume using the following:

- TypeScript
- React
- Styled Components
- Webpack
- Node
- Yarn

Final output can be found linked on my [Linkedin profile](https://www.linkedin.com/in/joevgreathead/) under Contact Info.

## Set up

As with anything, start by cloning the repo, then create a data.ts file in the src/ directory. A data-sample.ts file is provided with dummy data as an example.

Then:

```bash
yarn install
yarn start
```

The server should start and be located behind localhost:8080/.

## Motivation

I was tired of using MS Word or Apple's Pages app to write up simple text-based resumes. Getting everything aligned correctly was a lot more work than it was generally worth. By setting up the base layout of my resume using web technologies, I have a lot more flexibility in what I can do with fewer limitations over my control.

My workflow is now reduced to:

- starting the server locally
- updating a data.ts file with the updated text (stored separately)
- open the page in a browser (typically Chrome)
- printing to PDF

## FAQ

### Why use (React/TypeScript/Node) just for your resume?

I work in code every day and switching to using a word processor feels restricting. These technologies are what I enjoy using to build products and tools, so it only makes sense to me to represent myself through them as well.

In particular, React's JSX model is an easy way to compartmentalize components - especially when using FunctionComponents in a simple use case such as this. TypeScript, as well, has become my preferred style of JavaScript over the last year.

### Why does it seem so plain? Couldn't you do more with these technologies?

Yes! The first goal of this repo was to prove out the following:

- A replication of my existing resume format (built in MS Word) could easily be created and maintained using React.
- Print styles and printing to PDF via a browser could be simply maintained and reproduced once a base format was established and just the input data was updated.

I've proven the two points above and will consider new/flashier formats for future iterations.

## License

This code is licensed under the MIT License.
