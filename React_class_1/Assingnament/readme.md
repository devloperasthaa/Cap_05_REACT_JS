<!-- 1.	What is React?
React was born out of a need to make it easier for developers to build complex and interactive UIs. One of React's main goals is to minimize direct interactions with the actual DOM.
2.	Who made React?
Jordan Walke
3.	What is Babel?
Babel is a powerful and widely-used JavaScript compiler that has become an essential tool for developers. It allows developers to write modern JavaScript code and transpile it into a version that can run in all environments, including modern browsers and older ones. 
4.	How does Babel convert html code in React into valid code?
Babel is a key tool that can translate JSX syntax, which is used to create HTML-like code in React components, into valid JavaScript code that can be executed in preferred browsers.
By converting the JSX code into JavaScript functions that return the same HTML-like structures.
The functionality then enables the usage of JSX in React apps and ensures compatibility with outdated browsers that might not support the most recent JavaScript syntax.

5.	What is ReactDOM used for? Write an example?
ReactDOM is a package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing the various methods to manipulate DOM. 
6.	What are the packages that you need to import for react to work with?
The React Testing Library is a lightweight solution for testing React components. The library provides light utility functions on top of react-dom and react-dom/test-utils.
7.	How do you add react to a web application?
Step 1: Set up a modular JavaScript environment 
Step 2: Render React components anywhere on the page 

8.	What is React.createElement?

React.createElement() is a method in the React library that creates and returns a new React element. It takes three arguments: the type of the element, its properties, and its children. The type argument can be either a string (for HTML elements) or a React component. The properties argument is an object that contains the element’s properties, such as className, style, and onClick. The children argument is an array of React elements or strings that represent the element’s children.
Here’s an example of how to use React.createElement() to create a simple <h1> element:
const element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
This creates a new <h1> element with the class name “greeting” and the text “Hello, world!” as its child.
For more information on React.createElement(), please refer to the official React documentation.

9.	What are the three properties that createElement accept?
React.createElement() takes three arguments. They are:
type: the type of the HTML element (h1,p,button).
props: properties of the object({style:{size:10px}} or Eventhandlers, classNames,etc).
children: anything that need to be displayed on the screen
10.	What is the meaning of render and root?
"Render" and "root" are two distinct terms with different meanings in various contexts:

1. Render:
   - In computer graphics and computer-aided design (CAD), "render" refers to the process of generating a visual representation (typically a 2D image or a 3D model) from a digital 3D scene. Rendering involves calculating the lighting, shading, textures, and other visual elements to create a final image that can be displayed on a screen or printed.
   - In web development and user interface design, "render" is often used to describe the process of displaying content on a web page or user interface. This can involve rendering HTML elements, text, images, or other components on a web browser or application window.

2. Root:
   - In the context of computer file systems, the "root" refers to the top-level directory or folder in a hierarchical file structure. In Unix-based systems like Linux and macOS, the root directory is denoted by a forward slash (/), and it contains all other directories and files in the file system.
   - In mathematics, the "root" of an equation or function refers to a value that, when substituted into the equation or function, makes it equal to zero. For example, in the equation x^2 - 4 = 0, the roots are x = 2 and x = -2 because they satisfy the equation when substituted in.
   - In plant biology, the "root" is the part of a plant that typically grows underground and is responsible for anchoring the plant, absorbing water and nutrients from the soil, and storing food reserves.
   - In linguistics and word analysis, the "root" of a word is the core part that carries the word's primary meaning. Affixes (prefixes and suffixes) may be added to the root to create different forms of the word.

The meanings of "render" and "root" can vary depending on the specific field or context in which they are used. -->
