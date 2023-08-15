# Namste React


# Assignment 4


1. __Is JSX mandatory for React?__


Ans :-  JSX is not requirement for react. Each js element is just a syntactic sugar for calling react.


2. __Is ES6 mandatory for React?__


Ans :-  No , we may use create-react-clsss module instead.


3. __How can I write comments in JSX?__


Ans :-  /**/ used inside the curly braces for writing comments in JSX.


4. __What is `<React.Fragment></React.Fragment>` and <></> ?__


Ans :-  <> is the shorthand for the `<React.Fragment></React.Fragment>` the only difference is shorthand does not
        support the key attribute.


5. __What is Virtual DOM?__


Ans :-  DOM stands for Document Object Model,  it is structured representation of the HTML elements that are
        present in webpage.
        React uses Virtual DOM where an ideal or virtual representation of UI is kept in memory and synced with 
        real DOM by library such as ReactDOM through process called reconcillation.
        Virtual DOM is also called lightweigth copy of actual DOM.


6. __What is Reconciliation in React?__


Ans :-  Reconciliation is the process by which react updates the UI to reflect changes in component state.
        Reconcilation uses diffing algorithm which determines how to update the UI or actual DOM in a 
        most efficient way possible.


7. __What is React Fiber?__


Ans :-  React Fiber is a new reconciler that was introduced in React 16.0. A reconciler is a component
        responsible for updating the virtual DOM and applying changes to the actual DOM. React Fiber is a complete rewrite of React's previous reconciler and is aimed at improving the performance of React applications, especially in areas such as animation and layout.


8. __Why we need keys in React? When do we need keys in React?__


Ans :-  If we dont use the key React throws the warning : Each child in an array or iterator should have a
        unique ‘key’.
        Keys helps the react to identify whichh item have been changed(added , removed or reordered). To give  unique  identity to every element in array key is used.


9. __Can we use index as keys in React?__


Ans :-  React recommends that we should not use indexes as keys since it could impact performance negatively
        and could lead to some unstable component behaviour.
        Reordering a list or adding and removing items from list can cause issues with component state, when
        index used as key.
        If key is index reordering an item changes it. Hence component state can get mixed up and may use old 
        key for different component instance.


10. __What is props in React?__


Ans :-  Props are the information that you pass to JSX tag. React components use props to communicate with each
        other. Every parent component can pass info to child using props. Props are like arguement in JS function
        and attriibute in HTML tag.


11. __What is a Config Driven UI ?__


Ans :-  In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined
        in configuration file or database, which can be easily modified without requiring changes to the codebase.
