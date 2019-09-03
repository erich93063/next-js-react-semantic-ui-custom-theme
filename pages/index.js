import { Button } from "semantic-ui-react";
import React from 'react'
import Head from 'next/head'

const Home = () => (
	<div>
		<Head>
			<title>Home</title>
		</Head>
		<Button primary>Primary</Button>
		<Button secondary>Secondary</Button>
	</div>
)

export default Home
