# Simple text editor(Vanilla js)

[Would you like to test it?](https://angel-del-dev.github.io/Simple-text-editor/)

## How does it work?

We will first need to clone the repository

```bash
git clone https://github.com/Angel-del-dev/Simple-text-editor.git
```

After the clone is completed, a folder should apear.  
  
You can use the entire project as you wish. The text editor is already built in the `index.html` and has some basic styles linked up.  
  
`./scripts/create.js` has already a function to extract the data inside of the text editor, but it's never called. If you wish to deploy it directly and link it up to a database, you must create a function call to using either a form submit or a button click and add some additional code:   

```js
function getContent() {}
```

## You already have a project and you just want to include it

In that case you can clone the repo(As shown before), copy the file `create.js` inside the `scripts` folder, paste it to your project and link up the script file to your html.  

There's only one requirement, and is that the editor is created by default in a div, so if you don't plan to change the basic code you must create it or else an error will be displayed:

```html
<div id="editor"></div>
```

The code will render inside the div.
 
