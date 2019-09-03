import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class extends Document {

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
					<link
						href="/static/semantic/dist/semantic.min.css"
						rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* Empty script tag as chrome bug fix, see https://stackoverflow.com/a/42969608/943337 */}
					<script> </script>
				</body>
			</html>
		);
	}
}
