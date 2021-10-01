---
title: Tailwind JIT 
description: How to set up Tailwind-JIT Windows
datePosted: "2021-09-24"
layout: layouts/note
---
To set up basic plain tailwind project with Just In Time compiler, create new folder and CD to it with you'r command prompt. Then initialize package.json with:
```bash
npm init -y
```
Next install as dev Dependencies all requried packages with command:
```bash
npm install -D tailwindcss autoprefixer postcss-cli vite
```
In root create 3 files index.html with basic skeleton, empty styles.css and tailwind.css with it's 3 directives inside:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Now create postcss and tailwind config files with:
```bash
npx tailwindcss init -p
```
In newly created tailwind.config.js, active JIT mode and specify files to purge:
``` js
module.exports = {
    mode: 'jit',
    purge: {
      content: ['./index.html'],
```
Lastly in package.json file add script to continously purge you'r CSS file from unused classes and script to run our dev server:
```json
 "scripts": {
     "start": "npx tailwindcss -i tailwind.css -o styles.css --watch",
     "dev": "vite"
 },
 ```
 Run scripts with:
 ```bash
npm run start
npm run dev
 ```
And that's it!  Just link you'r style.css containing all purged classes to you'r index.html and you ready to go.