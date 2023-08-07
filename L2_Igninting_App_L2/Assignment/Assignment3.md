# Namste React


# Assignment 3


1. __What is JSX?__


Ans :-  JSX is a JavaScript extension that allows creation of DOM trees using an XML like syntax. Being a syntactic sugar, JSX is generally transpiled into nested JavaScript function calls structurally similar to the original JSX


2. __Superpowers of JSX__


Ans :-  Using JSX we can write logic and markup of component in single jsx file. It is easy to maintain and debug.


3. __Role of type attribute in script tag? What options can I use there?__


Ans :-  The HTML script type Attribute is used to specify the MIME type of script and identify the content of the Tag.
We can use module , babel, typescript  options.


4. ## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
