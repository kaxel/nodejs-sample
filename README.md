# nodejs-sample
node sample site

buttons from here: http://livetools.uiparade.com/button-builder.html#
took a few cues on setting up the Express MVC from this video: https://www.youtube.com/watch?v=nleI7IbpGhc&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=32
favicon art from: https://www.favicon-generator.org

and the rest is Node.js, JQuery, Express, and an ejs template. I use the Node.js mysql module for database access.

start with:
```
git clone https://github.com/kaxel/nodejs-sample

cd nodejs-sample

npm install -g nodemon

mysql -u root (I assume your mysql root user needs no password);

CREATE DATABASE nodely;

source sql/startfile.sql;

exit;
```

and then a call to nodemon should get you going. Just open a browser and go to http://localhost:3000/

If you do have a password for mysql root user, then shove it into listController yourself, right at the top of the page.