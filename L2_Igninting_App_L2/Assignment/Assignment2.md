# Namste React


# Assignment 2


1. __What is NPM ?__


Ans :-  NPM is package manager for the JS . It manages different packages used for the web application.


2. __- What is `Parcel/Webpack`? Why do we need it?__


Ans :-  Parcel and webpack are the bundlers used to minify,clean,and make the JS and TS code compact so it make  easier to send and receive request from server. It optimise our whole app and make it production ready automaticlly.


3. __What is '.parcel-cache'?__


Ans :-  __.parcel-cache__ is folder which stores information about the project when parcel buids the project.
Everything parcel does i.e transformation, cleaning ,compression etc to prject get stored as cache in this folder. This makes the parcel in development mode.


4. __What is npx ?__


Ans :-  NPX stands for Node Package execute. It is simply a NPM package runner. It allows user to execute any 
JS Package available on NPM registry without even installing it.


5. __What is difference between `dependencies` vs `devDependencies`__


Ans :-  A __dependency__ is a library or package that project requires to function properly. It is added to final bundle of project for production.
A __devDependency__ is a library or package that project require during development or testing. It is not added to final bundle of project for production.


6. __What is Tree Shaking?__


Ans :-  Tree shaking is term commonly used within JS context to describe removal of dead code. Tree shaking
relies on the import / export statements to detect wheather code modules are exported and imported to use between files.


7. __What is Hot Module Replacement?__


Ans :-  HMR improves development experience by updating modules in broweser at runtime without refrshing whole
page.


8. __List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.__


Ans :-  Caching, HTTPS, HMR, size optimization, tree shaking, 


9. __What is `.gitignore`? What should we add and not add into it?__


Ans :-  The . gitignore file tells Git which files to ignore when committing your project to the GitHub repository. The file and folder which can be regenerated on server should not added in gitignore file. The files 
or folder which cant be regenereted should be added.


10. __What is the difference between `package.json` and `package-lock.json__


Ans :-  __'package.json'__ :- It contains basic information about the project. It records important metadata
        about the project. It contains information such as name,description, script  and dependencies.
        __'package-lock.json'__ :- It describes the exact tree that was generated to allow subsequent installs to have the identical tree. It is automatically generated for those operations where npm modifies either node_modules tree or package.json. It contains the name, dependencies, and locked version of the project.     


11. __Why should I not modify `package-lock.json`?__


Ans :-  It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit package-lock. json to your code repository.


12. __What is `node_modules` ? Is it a good idea to push that on git?__


Ans :-  The node_modules folder contains all the saved JavaScript dependencies of a project. Since this folder often has a massive size, developers typically do not commit it inside the Git repository.


13. __- What is the `dist` folder?__


Ans :- The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


14. __What is `browserlists`__


Ans :-  One of the most popular frontend library dependencies, Browserslist defines and shares the list of target browsers between various frontend build tools.