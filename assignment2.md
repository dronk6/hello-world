# What do you think each section does here? What commands can you run? 
## scripts
    These are commands that can be run by typing `npm run` + the command.
    You can run: `"analyze", "start", "lint", "format", "test", "test:watch", "storybook", "storybook:build"`

## devDependencies 
    These are dependencies that are used when in a local/non-production environment.  These dependencies are NOT imported in production.

## dependencies
    These are dependencies that are used in both Production and Dev environments.

# Index.html

## What does it do?  How does it work?
    Javascript in lines 14 -> 29 renders a hello-world tag with the title, description,and bonus attributes to the div with an id of `demo` 

## What's loading the JS?
    The script tags on lines 14-29

## How is HTML rendering via JS?
    The render function which is imported from `lit`

# Separation of Element Definition and Source
    If I remember, `src/HelloWorld.js` defines what a HelloWorld element is.  It allows for it to be packaged up in a module and shipped to other componets that may extend this element.  `./hello-world.js` informs open-wc that this specific project is going to have a custom HTML element called `<hello-world>`.

# What's so special about Lit?
    Everything!  It allows for custom HTML tags to be created in JS and this allows for them to be publish on NPMjs.com.  Meaning that anyone can pull down these custom elements and use them in their projects without having to code it themselves.  Since these elements are made in HTML/CSS, there are few dependencies and should work in almost any browser.