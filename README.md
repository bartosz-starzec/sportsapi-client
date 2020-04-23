# sportsapi-client

## Nginx setup

Put this code inside main configuration for other statscore projects (API, SPA, SCO)
```
location /sportsapi-client {
    alias /home/bartek/Projects/vue-projects/sportsapi-client/dist;
    try_files $uri /index.html =404;
}
```
## Project setup
After clonning project run:
```
$ yarn install
$ yarn build
```
### Compiles and minifies for production
After each change in code you have to run:
```
yarn build
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
