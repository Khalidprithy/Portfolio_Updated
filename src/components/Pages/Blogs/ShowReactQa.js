import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ShowReactQa = () => {

    return (
        <div className='p-2 w-full md:w-8/12 mx-auto rounded-lg border'>
            <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article class="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header class="mb-4 lg:mb-6 not-format">
                            <address class="flex items-center mb-6 not-italic">
                                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img class="mr-4 w-16 h-16 rounded-full" src="https://i.ibb.co/7WTpJ1K/profile.jpg" alt="Khalid" />
                                    <div>
                                        <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Khalid Bin Alam</a>
                                        <p class="text-base font-light text-gray-500 dark:text-gray-400">MERN Stack Developer</p>
                                        <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Jan. 19, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">React interview questions that you may encounter during a job interview</h1>
                        </header>
                        <div className='w-full md:w-11/12 mx-auto'>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">What is React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    React is a declarative, efficient, flexible open source front-end JavaScript library developed by Facebook in 2011. It follows the component-based approach for building reusable UI components, especially for single page application. It is used for developing interactive view layer of web and mobile apps. It was created by Jordan Walke, a software engineer at Facebook. It was initially deployed on Facebook's News Feed section in 2011 and later used in its products like WhatsApp & Instagram
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">1. Can you explain the virtual DOM in React?</h1>
                                <p className='text-gray-600 dark:text-gray-400'>
                                    The virtual DOM (Document Object Model) is a mechanism used by React to optimize the performance of updates to the user interface.
                                    <br />
                                    <br />
                                    When a component's state changes, React will first render the component and its children to a virtual DOM representation. Then, it will compare the virtual DOM representation with the previous representation and identify the minimal set of changes required to update the actual DOM. This process is known as "reconciliation".
                                    <br />
                                    <br />
                                    By only updating the parts of the actual DOM that have changed, React can significantly reduce the number of updates required and improve the overall performance of the application.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">2. What is the difference between state and props in React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    In React, props and state are both used for storing data that influences the output of a component, but they are used for different purposes and have some key differences.
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li>Props (short for "properties") are a way for components to receive data from their parent component. They are passed down from the parent component to the child component, and the child component can't change them. Props are read-only and are used to configure a component when it is created.</li>
                                    <li>State, on the other hand, is a way for a component to store and manage its own internal data. Unlike props, a component can change its own state. State is used to track and manage changes to a component's data that happen over time, such as user input or a network response.</li>
                                </ul>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    In summary, props are used to pass data down the component tree (from parent to child), while state is used to store data that the component manages and updates internally.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">3. Can you explain the component lifecycle methods in React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    In React, a component goes through several lifecycle stages, and each stage has its own set of lifecycle methods that are called at specific points. These methods give developers the ability to run specific code at specific times during a component's lifecycle. Here are some of the main lifecycle methods in React:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li><span className='font-medium'>componentDidMount():</span>  This method is called after a component has been rendered to the DOM. It is a good place to perform any setup that requires the DOM, such as fetching data or setting up event listeners.</li>

                                    <li><span className='font-medium'>componentDidUpdate(): </span>  This method is called after a component has been updated. It receives two arguments: prevProps and prevState, which are the previous values of the props and state before the update.</li>

                                    <li><span className='font-medium'>shouldComponentUpdate():</span> This method is called before a component is updated. It receives nextProps and nextState as arguments. By default, it always returns true and allows the update to happen. But, this method can be overridden to conditionally block updates.</li>

                                    <li><span className='font-medium'>componentWillUnmount():</span> This method is called before a component is removed from the DOM. It is a good place to perform any cleanup, such as canceling network requests or removing event listeners.</li>

                                    <li><span className='font-medium'>render(): </span> This method is called every time a component's state or props change. It is responsible for returning the JSX that represents the component's UI..</li>

                                </ul>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    It's worth noting that some of these methods are considered as "legacy" and it's recommended to use other alternatives like hooks instead to handle component lifecycle events.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">4. How do you handle forms in React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    Handling forms in React involves several steps:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li>Create a form element in your JSX with an onSubmit event handler. This event handler will be called when the form is submitted.</li>

                                    <li>Create input elements for each field in the form, such as text inputs, checkboxes, and radio buttons. These elements should have value and onChange props. The value prop should be set to the current value of the corresponding state property, and the onChange prop should be set to an event handler that updates the state property when the input value changes.</li>


                                    <li>Create a state object to store the current values of the form fields. This state object should have properties that correspond to each form field.</li>

                                    <li>In the onChange event handlers, call the setState() method to update the state object with the new values of the form fields..</li>

                                    <li>In the onSubmit event handler, use the current state values to do something with the form data, such as sending it to a server.</li>

                                    <li>Optionally, you can also use useState and useRef hooks to handle forms state and input refs respectively.</li>

                                </ul>
                            </div>

                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">5. What are the features of React?</h1>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">

                                    <li>
                                        <img className='w-52 lg:w-96 rounded-lg mx-auto' src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777566/0618-JSX-Waldek_Social__1_-abd8e8a0063ff635a67ac82ad716f497-2a87f70323e4a6a0d12f664ec62bef4c.png" alt="" />
                                        <p>
                                            <span className='font-medium'>JSX: </span> JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.
                                        </p>
                                    </li>

                                    <li>
                                        <img className='w-52 lg:w-96 rounded-lg mx-auto' src="https://www.edureka.co/blog/wp-content/uploads/2017/08/UI-Tree.png" alt="" />
                                        <p>
                                            <span className='font-medium'>Components: </span> Components are the building blocks of any React application, and a single app usually consists of multiple components. It splits the user interface into independent, reusable parts that can be processed separately.
                                        </p>
                                    </li>

                                    <li>
                                        <img className='w-52 lg:w-96 rounded-lg mx-auto' src="https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2020/07/02034639/compare.jpg" alt="" />
                                        <p>
                                            <span className='font-medium'>Virtual DOM: </span> React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, virtual DOM changes only that object in the real DOM, rather than updating all the objects.
                                        </p>
                                    </li>

                                    <li>
                                        <img className='w-52 lg:w-96 rounded-lg mx-auto' src="https://www.cuelogic.com/wp-content/uploads/2021/06/05-2.png" alt="" />
                                        <p>
                                            <span className='font-medium'>One-way data-binding: </span> React’s one-way data binding keeps everything modular and fast. A unidirectional data flow means that when designing a React app, you often nest child components within parent components.
                                        </p>
                                    </li>

                                    <li>
                                        <img className='w-52 lg:w-96 rounded-lg mx-auto' src="https://omninos.com/wp-content/uploads/2020/12/Top-ReactJS-Development-Tools-to-build-High-Performance-Applications.png" alt="" />
                                        <p>
                                            <span className='font-medium'>High performance: </span> React updates only those components that have changed, rather than updating all the components at once. This results in much faster web applications.
                                        </p>
                                    </li>

                                </ul>
                            </div>

                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">6. Can web browsers read JSX directly?</h1>
                                <img className='w-52 lg:w-96 rounded-lg mx-auto' src="https://www.edureka.co/blog/wp-content/uploads/2017/07/ReactJS_02.png" alt="" />
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li>Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object </li>

                                    <li>For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel</li>
                                </ul>
                            </div>

                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">7. Why is there a need for using keys in Lists?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    Keys are very important in lists for the following reasons:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li>A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists </li>

                                    <li>It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered</li>
                                </ul>
                            </div>

                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">8. What are forms in React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    React employs forms to enable users to interact with web applications.
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li>Using forms, users can interact with the application and enter the required information whenever needed. Form contain certain elements, such as text fields, buttons, checkboxes, radio buttons, etc</li>

                                    <li>Forms are used for many different tasks such as user authentication, searching, filtering, indexing, etc</li>
                                </ul>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">9. What are the most crucial advantages of using React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    Following is a list of the most crucial advantages of using React:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li><span className='font-medium'>React is easy to learn and use</span> React comes with good availability of documentation, tutorials, and training resources. It is easy for any developer to switch from JavaScript background to React and easily understand and start creating web apps using React. Anyone with little knowledge of JavaScript can start building web applications using React.</li>

                                    <li><span className='font-medium'>React follows the MVC architecture. </span>  React is the V (view part) in the MVC (Model-View-Controller) architecture model and is referred to as "one of the JavaScript frameworks." It is not fully featured but has many advantages of the open-source JavaScript User Interface (UI) library, which helps execute the task in a better manner.</li>

                                    <li><span className='font-medium'>React uses Virtual DOM to improve efficiency.</span> React uses virtual DOM to render the view. The virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves. That's why React provides great efficiency.</li>

                                    <li><span className='font-medium'>Creating dynamic web applications is easy.</span>In React, creating a dynamic web application is much easier. It requires less coding and gives more functionality. It uses JSX (JavaScript Extension), which is a particular syntax letting HTML quotes and HTML tag syntax to render particular subcomponents.</li>

                                    <li><span className='font-medium'>React is SEO-friendly. </span> This method is called every time a component's state or props change. It is responsible for returning the JSX that represents the component's UI..</li>

                                    <li><span className='font-medium'>React allows reusable components.</span> React web applications are made up of multiple components where each component has its logic and controls. These components provide a small, reusable piece of HTML code as an output that can be reused wherever you need them. The code reusability helps developers to make their apps easier to develop and maintain. It also makes the nesting of the components easy and allows developers to build complex applications of simple building blocks. The reuse of components also increases the pace of development.</li>

                                    <li><span className='font-medium'>React has a rich set of libraries.</span> React has a huge ecosystem of libraries and provides you the freedom to choose the tools, libraries, and architecture for developing the best application based on your requirement.</li>

                                    <li><span className='font-medium'>Scope for testing the codes</span>React web applications are easy to test. These applications provide a scope where the developer can test and debug their codes with the help of native tools.</li>

                                </ul>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">10. What are the biggest limitations of React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    Following is the list of the biggest limitations of React:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li>React is just a library. It is not a complete framework.</li>

                                    <li>It has a huge library which takes time to understand.</li>

                                    <li>It may be difficult for the new programmers to understand and code.</li>

                                    <li>React uses inline templating and JSX, which may be difficult and act as a barrier. It also makes the coding complex.</li>

                                </ul>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">11.  Why can't browsers read JSX?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    Browsers cannot read JSX directly because they can only understand JavaScript objects, and JSX is not a regular JavaScript object. Thus, we need to transform the JSX file into a JavaScript object using transpilers like Babel and then pass it to the browser.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">12. Why we use JSX?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>

                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li>It is faster than regular JavaScript because it performs optimization while translating the code to JavaScript.</li>

                                    <li>It is faster than regular JavaScript because it performs optimization while translating the code to JavaScript.</li>

                                    <li>It is type-safe, and most of the errors can be found at compilation time..</li>

                                    <li>It makes easier to create templates.</li>

                                </ul>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">13. What is Props?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    Props stand for "Properties" in React. They are read-only inputs to components. Props are an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from the parent to the child components throughout the application.
                                    <br />
                                    <br />
                                    It is similar to function arguments and passed to the component in the same way as arguments passed in a function.
                                    <br />
                                    <br />
                                    Props are immutable so we cannot modify the props from inside the component. Inside the components, we can add attributes called props. These attributes are available in the component as this.props and can be used to render dynamic data in our render method.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">14. What is a State in React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    The State is an updatable structure which holds the data and information about the component. It may be changed over the lifetime of the component in response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. It must be kept as simple as possible.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">15. How can you update the State of a component?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    We can update the State of a component using this.setState() method. This method does not always replace the State immediately. Instead, it only adds changes to the original State. It is a primary method which is used to update the user interface(UI) in response to event handlers and server responses.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">16. What is an event in React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    An event is an action which triggers as a result of the user action or system generated event like a mouse click, loading of a web page, pressing a key, window resizes, etc. In React, the event handling system is very similar to handling events in DOM elements. The React event handling system is known as Synthetic Event, which is a cross-browser wrapper of the browser's native event.
                                    <br />
                                    <br />
                                    Handling events with React have some syntactical differences, which are:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li>React events are named as camelCase instead of lowercase.</li>

                                    <li>With JSX, a function is passed as the event handler instead of a string.</li>

                                </ul>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">17. What is the significance of keys in React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    A key is a unique identifier. In React, it is used to identify which items have changed, updated, or deleted from the Lists. It is useful when we dynamically created components or when the users alter the lists. It also helps to determine which components in a collection needs to be re-rendered instead of re-rendering the entire set of components every time. It increases application performance.
                                </p>

                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">18. When do we prefer to use a class component over a function component?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    If a component needs state or lifecycle methods, we should use the class component; otherwise, use the function component. However, after React 16.8, with the addition of Hooks, you could use state, lifecycle methods, and other features that were only available in the class component right in your function component.
                                </p>

                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">19. What do you understand by refs in React?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    Refs is the shorthand used for references in React. It is an attribute which helps to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it. It is used when we want to change the value of a child component, without making the use of props.
                                </p>

                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">20. WWhat is the use of Refs?</h1>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                    The Ref in React is used in the following cases:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-400">
                                    <li>It is used to return a reference to the element.</li>

                                    <li>It is used when we need DOM measurements such as managing focus, text selection, or media playback.</li>
                                    <li>It is used in triggering imperative animations.</li>
                                    <li>It is used when integrating with third-party DOM libraries.</li>
                                    <li>It can also use as in callbacks.</li>

                                </ul>
                            </div>

                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default ShowReactQa;