import execa from "execa";
import fs from "fs";

console.log(`Building a docker image...`);

const copyFiles = (srcDir: string, destDir: string) => {
	if (!fs.existsSync(destDir)) {
		fs.mkdirSync(destDir);
	}
	fs.readdirSync(srcDir).forEach((fileName) => {
		fs.copyFileSync(`${srcDir}/${fileName}`, `${destDir}/${fileName}`);
	});
};

(async () => {
	const version = process.env.VERSION ?? "1.2.2";
	console.log(`Building image with version ${version}`);

	// clean dist
	await execa("rimraf", ["serve/dist/*"]);
	await execa("rimraf", ["serve/Dockerfile"]);

	// build distributable
	await execa("yarn", ["--cwd", "client", "build"]);

	// move dist content to staging location
	copyFiles("client/dist", "serve/dist");
	copyFiles("client/public", "serve/public");

	// write dockerfile
	fs.writeFileSync(
		"./serve/Dockerfile",
		`
FROM node:current-alpine3.10

# Set the app directory
WORKDIR /app

# Copy over the necessary files for app
COPY package.json /app
COPY tsconfig.json /app
COPY index.ts /app
COPY dist/ /app/dist
COPY public/ /app/public

# Label port 3000 as the access point
EXPOSE 3000

# Install dependencies
RUN npm install

# Set environment variables
ENV NODE_ENV=production

# Run the app
CMD npm start
	`
	);

	// run docker image build
	await execa("docker", ["build", "-t", `joevgreathead/dev.joevg:${version}`, "serve"]);
})();
