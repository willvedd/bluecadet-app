Bluecadet React Demo
====================

##Initialization

1. `git clone`
2. `npm install`
3. `gulp`
4. Open ./dist/index.html in your browser

##Step 1 - Setup
`git checkout step-1`

Just make sure everything is set up properly. You should see "The Official Bluecadet App".

##Step 2 - Components
`git checkout step-2`

Creating a React component. Let's start with a BCapp component. Be sure to create two methods: getInitialState() and render(). Add the component into the ReactDOM.render() call.

##Step 3 - State
`git checkout step-3`

Creating a "highlight" state. Define the state in getInitialState and create a method that sets the state when the button is clicked. Also create another method to check if the state is highlighted or not and toggle a class and text accordingly.


##Step 4 - Nested Components w/ Props
`git checkout step-4`

Create a Cadet component. Set a defeault prop but create a few and pass props. Add the Cadet components inside the BCapp render call (make sure to pass the prop if you want it to render).

##Step 5 - Local State
`git checkout step-5`

Looking at local state and passing more props through the Cadet component. We'll see why you should be wary of local state and how it creates multiple sources of truth.


##Step 6 - One source of truth
`git checkout step-6`

Removing the multiple sources of truth. Brough it all into the top level component state. Introduce the .map method and iterate over arrays in JSX (similar to ng-repeat).

##Step 7
`git checkout step-7`

Check your console. You should see an error about "keys". This is an opportunity to learn about the React reconciliation system. Isn't it cool?


##Step 8a
`git checkout step-8a`

Simple deviation. Sending callbacks that modify parent state to child components via props. Imagine if your app grew, it would become very bloated very quick no?


##Step 8
`git checkout step-8`

More complicated deviation. Sending callbacks that modify parent state to child components via props. Imagine if your app grew, it would become very bloated very quick no?

##Step 9
`git checkout step-9`

Continuation of step 8.