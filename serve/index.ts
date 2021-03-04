import express from "express";
import http from "http";
import https from "https";
import path from "path";
import fs from "fs";

const app = express();

const distPath = path.resolve(__dirname, "dist");
app.use(express.static(distPath));

const publicPath = path.resolve(__dirname, "public");
app.use("/public", express.static(publicPath));

const privateKeyLocation = process.env.PRIVATE_KEY ?? "/docker/etc/certificates/privkey.pem";
const certificateLocation = process.env.CERTIFICATE ?? "/docker/etc/certificates/cert.pem";

const port = process.env.PORT ?? 3000;

if (process.env.NODE_ENV === "production") {
	if (!fs.existsSync(privateKeyLocation) || !fs.existsSync(certificateLocation)) {
		throw Error("TLS certificate path can not be found.");
	}
	const privateKey = fs.readFileSync(privateKeyLocation, "utf8");
	const certificate = fs.readFileSync(certificateLocation, "utf8");

	https
		.createServer(
			{
				key: privateKey,
				cert: certificate
			},
			app
		)
		.listen({ port }, () => {
			console.log(`Listening securely on port ${port}`);
		});
} else {
	http.createServer(app).listen({ port }, () => {
		console.log(`Listening at http://localhost:${port}`);
	});
}
