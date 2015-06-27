## How to use:

- Firstly, install all dependencies:

 ```
 bower install
 npm install
 ```

- Secondly, run the site locally by typing:

```
http-server ./
```

- To visit the site in your browser visit:

  localhost:8080/index.html

- To run feature tests run the following command:
  ```
  protractor test/e2e/conf.js
  ```
- To have the unit tests auto run in the background:
  ```
  karma start test/karma.conf.js
  ```