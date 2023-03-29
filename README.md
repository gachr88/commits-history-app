# commits-history-app

This project consists of a ReactJS client and a NestJS server. The ReactJS client allows users to interact with the server and display the data received from it. The NestJS server serves as the backend for the client, allowing users to access the information of commits of this repository creating the backend as a service adapter of Github API.

## Installation

To install the project, please follow these steps:

1. Clone the repository to your local machine

`git clone https://github.com/gachr88/commits-history-app`

2. Install the required packages for the client and the server

```
cd commits-history-app/client
npm install
cd ../server
npm install
```

3. Create `.env` file in the root directory of both projects with following enviroment variables:

**Server**

```
SERVER_PORT=8000
#Token limited access
GITHUB_API_TOKEN=<token-send-by-email>
GITHUB_OWNER_NAME=<owner-current-repository-name>
GITHUB_REPO_NAME=<current-repository-name>
```

Note: Make sure to replace `<token-send-by-email>`, `<owner-current-repository-name>` and `current-repository-name>` with the appropriate values.

**Client**

```REACT_APP_GITHUB_API_URL=http://localhost:8000```

## Execution

To run the project, please follow these steps:

1. Start the server

```
cd server
npm run start:dev
```

2. Start the client

```
cd client
npm start
```

Open your web browser and navigate to http://localhost:3000 to view the client.

Note: If you encounter any issues with starting or running the project, please create a new issue in the project's GitHub repository.
