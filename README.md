This is my first nodejs app. It will be a weather app. Feel free to fork and improve this app.

---
# Setup:
```javascript 
npm install
```
```json 
  "dependencies": {
    "body-parser": "^1.18.3",
    "bootstrap": "^4.1.3",
    "dotenv": "^6.1.0",
    "ejs": "^2.6.1",
    "express": "^4.16.4",
    "request": "^2.88.0"
  }
```

### Create .env file.
#### Add your API key from openweathermap.org.
```json
WEATHER_API_KEY="<API_KEY>
```

#### Test by entering a city name and submitting. A valid city name will output a value retrieved from openweathermap.org.
