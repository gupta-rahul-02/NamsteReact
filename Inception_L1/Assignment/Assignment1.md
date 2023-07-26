
# Namaste React


1. __What is Emmet ?__  

Ans :-  Emmet is plug in for many popular text editors which improves HTML and CSS workflow.


2. **Difference between library and framework?**
Ans :-  **Library** :- A library provides set of functions/objects/modules which your application code calls    
                       for specific functionality.
                       Libraries typically focus on a narrow scope , so their API's also tend to be smaller 
                       and require fewer dependencies.
                       Ex:- React, JQuery.
        **Framework** :- A framework has defined open or unimplemented functions or objects which the user 
                         writes to create a custom application. 
                         Framework itself is application so it has wider scope for developing application
                         so it has lot of dependencies.
                         Ex:- Angular, Spring.


3. **What is CDN? Why do we use it?**
Ans :-  **CDN** stands for Content Delivery Network it is network of interconnected ser-
        vers that speeds up webpage loading for data-heavy applications.


4. **Why is React known as React?**
Ans :- React is one of the libraries and it is used for frontend developement and speci-
       alizes in things that user interacts with when they are using the web application.
       It reacts with users thats why we called it React.


5. **What is crossorigin in script tag?**
Ans :-  It verifies that CDN we are using set the Access-Control-Allow-Origin: * in HTTP headers.
        This also enables bertter error handling experience in React 16 and later.


6. **What is diference between React and ReactDOM ?**
Ans :-  The React package holds source for component, state, props and all the code that is react.
        The react-dom packages as name explains it is the connnector between React and the DOM. 
        Methods like render() or findDOMNode() are part of React-DOM.


7. **What is difference between react.development.js and react.production.js files via CDN?**
Ans :-  **react.development.js** :- More development friendly, redable, will take more size.
        In development mode, we can enable and utilize React developer tools, devtools profiler,
        debugging environment attached with the source code.
        **react.production.js** :- Minified code that is not developer friendly as it focused on
        decreasing size of file, code efficiency.
        In production mode, compression and minification of Javascript and other resources happnes 
        to reduce the size of code. Performance  will be much faster than the development mode.


8 **What is async and defer?**
Ans :-  The **defer** attribute tells browser not to wait for the script. Instead the browwser will
        continue to process the HTML, build DOM. The script loads in the background and then run when
        DOM is fully built.
        **Scripts with defer never blocks the page.**
        **Script with defer always execute when the DOM is ready (but before DOMContentLoaded Event.).**
        **The defer attribute is only for external scripts**
        The defer attribute is ignored if the script tag has no **src**.  
        The **async** attribute is somelike **defer**. It also make ths script non-blocking. But it has 
        some differences :-
        The brower does not block on **async** script like **defer**.
        Other scripts dont wait for async scripts, and async scripts dont wait for them.
        **DOMContentLoaded** and **async** script dont wait for each other.
        In other words, **async** script load in background and run when ready. The DOM and other scripts
        dont wait for them and they dont wait for anything.
        **The async attribute is only for external scripts.**
        **The async attribute is ignored if the script has no src**


