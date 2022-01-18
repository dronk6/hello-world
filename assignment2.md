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