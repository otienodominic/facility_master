# master facility list

Repository of the master facility list implementation. Being a quick demonstration of setting up a web application to 
consume the [DHIS2 API](https://play.dhis2.org/2.35.1/api/resources)
 
A minimal example of using a Node backend (server for API, proxy, & routing) with a [React frontend](https://github.com/facebookincubator/create-react-app).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment

The complete deployment can be found at: [Deployment](https://cra-node.herokuapp.com/): 

## Local Development

Because this app is made of two npm projects, there are two places to run `npm` commands:

1. **Node API server** at the root `./`
1. **React UI** in `react-ui/` directory.

### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```


### Run the React UI

The React app is configured to proxy backend requests to the local Node server. 

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React UI

```bash
# Always change directory, first
cd react-ui/

npm install package-name --save
```
