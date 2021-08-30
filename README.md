# Tourism Directory in ReactJS - Script

We are going to create a simple tourism directory app using ReactJS based off these designs: [home page](./Design/Home.png), [offering page](./Design/Offering.png).

## Getting set up

We will use `create-react-app` to get started.

```sh
npx create-react-app tourism-directory-app
```

We now have a very basic React app. Let's start it up and take a look.

```sh
cd tourism-directory-app
npm start
```

You can view the app here [http://localhost:3000/](http://localhost:3000/)

We are going to use [Storyboard](https://storybook.js.org/) to help us build our website. Storyboard is a tool which helps us to build our website one component at a time. When we are designing our website we tend to think about pages wholistically but when we are building our website we need to learn to think of our website as a bunch of independent components. I like Storyboard because it helps put us into this component based frame of mind.

```sh
npx sb init
npm run storyboard
```

Storyboard creates some example components to help you get started. You can play with the examples here [http://localhost:6006/?path=/story/example-introduction--page](http://localhost:6006/?path=/story/example-introduction--page)

When you are done you can delete those example stories.

```sh
rm -rf ./src/stories/*
```

Now lets start building our app. Let's go ahead and replace the contents of App.js with the following:

```js
import './App.css';

function App() {
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
```

Let's create a couple of folders to keep our code organised.

```sh
mkdir src/components
mkdir src/pages
```

And remove the unnecessary asset files and add our own assets.

```sh
rm src/logo.svg public/logo192.png public/logo512.png
cp ../Assets/* public/
```

## Building the offering tile

Right, let's build our first component.

![Offering tile](./Design/Offering%20Tile.png)

We create a file for our React component and a boilerplate file to display the component as a story.

```sh
touch ./src/components/OfferingTile.js # touch creates an empty file
touch ./src/stories/OfferingTile.js
```

