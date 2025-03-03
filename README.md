# Install express 
1. npm init -y
2. npm install cors dotenv

# Install TypeScript 
3. npm install typescript --save-dev
4. tsc --init // for tsconfig.json
5. Edit the tsconfig file for rootDir and outDir 
6. set up src folder. Add app.ts, server.ts and an app folder inside the src folder
7. set up the app.ts folder and export app 
8. npm install mongoose
9. Set up .env file with port, DATABASE_URL and NODE_ENV
10. Inside the src folder, inside the app folder create a config folder with a index.ts file for reaching the .env values. 
11. Fill the index.ts file
12. set up the server.ts file with mongoose setup and port
# To run the server 
13. npm i ts-node-dev --save-dev

14. add the two scripts in package.json file 
   i. "start:ts-node-dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",
   ii. "build": "tsc"

15. tsc -w so that each time I change the .ts files the .js files get updated.

16. npm run build & npm run start:ts-node-dev to start the server

# Eslint and Prettier setup
17. Follow the link: https://dev.to/shafayat/-express-typescript-eslint-prettiersetup-5fhg?fbclid=IwY2xjawG3-95leHRuA2FlbQIxMQABHcaCA3hRarSuvJo0VQkPa7--DMB9qHlrRQNpdFGcewcxzc16NjJu9Rw7Ug_aem_C_X0sfrem1xdlZy1yCMvbQ
    
