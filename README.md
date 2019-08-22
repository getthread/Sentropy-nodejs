**This package was created by getthread.io, to ease the integration of the Sentropy Alpha into getthread.io's pipeline.**

# Classification Service Sentropy Alpha
This services directly interacts with the [Sentropy Alpha API](https://api.alpha.sentropy.io).

# Installation

## Prerequisites

- Node.js version 10 or higher
- A Sentropy Alpha API Key 

## Obtain an API Key

CONFIDENTIAL 😉.

## Setup Environment Variables

Place your Sentropy Alpha API key securely in an environment variable. Refrain from hardcoding your api key in your code to ensure that your key is protected.
```bash
echo "export SENTROPY_API_KEY='YOUR_API_KEY'" > sentropy.env
echo "sentropy.env" >> .gitignore
source ./sentropy.env
```

## Install Package

Install the package using [npm](https://npmjs.org/).

```sh
npm install --save @cosmic_thread/sentropy-nodejs
```

<a name="usage"></a>
# Usage

Here is an example of how to classify text in Typescript.

```js
import sentropy from "@cosmic_thread/sentropy-nodejs";
const SentropyClient = sentropy(process.env.SENTROPY_API_KEY);

SentropyClient
  .classify({
    "text": "Only a liberal would think that",
    "id": "4m8aw",
    "author": "throwaway_123",
    "segment": "breaking_news"
  })
  .then(classificationResult => console.log(classificationResult))
  .catch(err => console.error(err))
```

Here is an example of how to classify text in Plain Javacript.

```js
const sentropy = require("@cosmic_thread/sentropy-nodejs");
const SentropyClient = sentropy(process.env.SENTROPY_API_KEY);

SentropyClient
  .classify({
    "text": "Only a liberal would think that",
    "id": "4m8aw",
    "author": "throwaway_123",
    "segment": "breaking_news"
  })
  .then(classificationResult => console.log(classificationResult))
  .catch(err => console.error(err))
```