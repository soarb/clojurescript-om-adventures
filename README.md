## clojurescript-om-adventures
---
First play with Clojurescript and Om ([Basic Tutorial](https://github.com/omcljs/om/wiki/Basic-Tutorial))

## Overview
---
Following along, trying to document as much as I can about Clojurescript

## Setup
---
1) Install [Leiningen](http://leiningen.org/)

2) Install rlwrap [Ubuntu](http://packages.ubuntu.com/precise/rlwrap) - believe
me you'll need it for cursor key sanity!
---
To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## Stuff to play with
---
* Switch namespace to application namespace
=> `(in-ls 'om-tut.core)`

* Lets deref app-state atom (prints it out in REPL)
=> `@app-state`

* Add an additional contact
=> `(swap! app-state update-in [:contacts] conj {:first "Benji" :last "Soar"})`

* Update the firstname of our second contact in our vector
=> `(swap! app-state update-in [:contacts 1] assoc :first (str "Alice " "In Wonderland"))`

__With your browser connected to the REPL the updates should be immediate! MAGIC!__

###### Protip!
---
`(swap! app-state update-in [:contacts 1] assoc :first (str "Alice " "In Wonderland"))`

If we deconstruct this, we're invoking the swap! function which will _apply_ the
`update-in` function to the current atom state `app-state`. 

The `update-in` function allows us to change the value in a map at a specific
key path. It takes a sequence of keys `[:contacts 1]` (the path within the map 
to the value we want to update) and a function `assoc` that will take the old 
value plus any arguments supplied to it `:first (str "Alice " "In Wonderland")`