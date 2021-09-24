# Harvard Prints

## Project setup

### Dependencies

Run `yarn` to install dependencies.

### Configuration

Project uses `dotenv` library to manage environment API key.
Before running the server you need to create `.env` config file in project root directory.

#### .env file format

> **IMPORTANT**  
> `.env` file is required and server will refuse to start without it.

Use below template pasting API Key relevant for your environment.

```
API_KEY=XXXXXXXXXXX_XXXXXX_XXXXX
```

### Starting the server

- Running `yarn server` will start the server on `localhost:9100`

### Starting the app

- Running `yarn dev` will start the app on port `localhost:9000`
