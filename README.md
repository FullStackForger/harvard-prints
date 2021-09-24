# Harvard Prints

## Project setup 

### Dependencies 

Run `yarn` to install dependencies.

### Configuration 

Project uses `dotenv` library to manage environment API key.
Before running the server you need to create (or place) `.env` config file in project main folder.

#### .env file format
> __IMPORTANT__  
> `.env` file is required and server will refuse to start without it.

Use below template pasting API Key relevant for your environment.
```
API_KEY=XXXXXXXXXXX_XXXXXX_XXXXX
``` 

### Starting the server 
- Running `yarn server` will start the server on port `9100`

### Starting the app 
- Running `yarn dev` will start the app on port `9000`

