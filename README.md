# Translator Task

## Overview
This React app displays a few tidbits of very important information, such as certain animal species' natural biomes and color, and also certain food items' meal and description. This info is shown in cards on the page and your objective is to get the selector element working to translate these cards into other languages.

### Step 1
In `src/App.js`, hook up the `onChange` function on the `<select>` element to mutate a piece of state on the component. It should have a default state of selecting English. Please note that `App` is a React _function_ component. If you have seen or used _class_ components and the `setState` method, those will not work here! You can read up on the more modern [React Hooks API](https://reactjs.org/docs/hooks-state.html) if you are unfamiliar with this pattern.

### Step 2
You must write the function `createTranslate` without changing any other code in the file. (Moving things is fine, don't change method invocations or signatures).

The function can be found in `src/App.js`.

The [Ramda](http://ramdajs.com/) library is already imported to `App.js` and may make writing the function easier. [This reference](https://github.com/ramda/ramda/wiki/What-Function-Should-I-Use) for Ramda may also prove useful. All functions are accessible like so: `R.map`. It is perfectly okay if you want to try doing this step using another utility library such as Lodash or Underscore, or with plain javascript.

When the function is correctly implemented `yarn start` should run the app and you should see two rows of divs with text content. Selecting a language from the dropdown menu at the top should change the text content to that language.

### Step 3
Add type comments for all declarations. Please use something approximating [TypeScript](https://www.typescriptlang.org/) syntax or Haskell/Elm/etc. if that's more comfortable for you. The purpose of this exercise is just to demonstrate your ability to spell out parameter and return types, not that you know TypeScript specifics. Abbreviating a React component param or return value to `ReactComponent` is perfectly fine.

Ex:
```
// int, int -> bool
(x, y) => x > y;

// int, int -> (int -> string)
(x, y) => {
  return (z) => z + "!"
}
```

### *Bonus Step 4*
DISCLAIMER: You can complete and successfully pass this task without completing this step at all. This is just an opportunity for you to demonstrate knowledge of styling and CSS.
The design team was on vacation when we first styled this app. After reviewing, they would like the Card component  backgrounds to alternate between the `rebeccapurple` color and `lightgreen`, meaning the first card in the row should be purple, the second card would be green, etc. Update `src/App.styled.js` to achieve this. 

For reference, this file implements the [`styled-components`](https://styled-components.com/docs/basics#getting-started) library.

### Note
Please feel free to reach out via email and ask questions if anything isn't clear. Our intention is not for you to be unsure with directions or struggle with interpretation.
