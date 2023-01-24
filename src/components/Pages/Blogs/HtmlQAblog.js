import React from 'react';

const HtmlQAblog = () => {
    return (
        <div className='p-2 w-full md:w-8/12 mx-auto rounded-lg border'>
            <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 rounded-lg">
                <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article class="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header class="mb-4 lg:mb-6 not-format">
                            <address class="flex items-center mb-6 not-italic">
                                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img class="mr-4 w-16 h-16 rounded-full" src="https://i.ibb.co/7WTpJ1K/profile.jpg" alt="Khalid" />
                                    <div>
                                        <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Khalid Bin Alam</a>
                                        <p class="text-base font-light text-gray-500 dark:text-gray-300">MERN Stack Developer</p>
                                        <p class="text-base font-light text-gray-500 dark:text-gray-300"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Jan. 22, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-gray-100">HTML interview questions that you may encounter during a job interview</h1>
                        </header>
                        <div className='w-full md:w-11/12 mx-auto'>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">1. Can you explain the difference between responsive and adaptive design?</h1>
                                <p className='text-gray-600 dark:text-gray-300'>
                                    Responsive design is a method of designing websites so that they automatically adjust to the size of the user's screen.
                                    <br />
                                    Adaptive design, on the other hand, uses specific layouts for specific screen sizes.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">2. How do you optimize the performance of a website?</h1>
                                <p className='text-gray-600 dark:text-gray-300'>
                                    Some ways to optimize the performance of a website include minifying code, compressing images, using a content delivery network (CDN), and reducing the number of HTTP requests.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">3. Can you describe how you would set up a development environment on a new machine?</h1>
                                <p className='text-gray-600 dark:text-gray-300'>
                                    A development environment typically includes a text editor or integrated development environment (IDE), a web browser, and a local web server. I can set up the development environment by installing necessary softwares such as text editor(Visual studio code, Sublime etc), browser(chrome, Firefox etc) and web server(XAMPP, WAMP etc)
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">4. Can you explain how browser rendering works?</h1>
                                <p className='text-gray-600 dark:text-gray-300'>
                                    The browser rendering process involves several steps, including parsing the HTML and CSS, constructing the Document Object Model (DOM), and painting the pixels to the screen.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">5. How do you stay current with new technologies and industry developments?</h1>
                                <p className='text-gray-600 dark:text-gray-300'>
                                    I stay current with new technologies and industry developments by reading articles, blogs and tutorials online, attending conferences and meetups, participating in online communities, and experimenting with new technologies on my own.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">6. Can you give an example of a project you have worked on, and explain your role in it?</h1>
                                <p className='text-gray-600 dark:text-gray-300'>
                                    One example of a project I have worked on is a MERN stack project where I have used React as a frontend framework and tailwind css for styling. I have also used react router v6 for routing and implemented authentication, layout, and an admin panel. I have also projected routes for the application. My role in the project was to develop the frontend and work closely with the backend developer to ensure smooth integration. Some of the challenges I faced included implementing complex authentication flows and optimizing the performance of the application. Through this project, I have learned how to work with a variety of frontend technologies and how to approach challenges in a systematic way
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">7. Differentiate between ordered list and unordered list</h1>
                                <p className='text-gray-600 dark:text-gray-300'>
                                    An ordered list is a list of items in which the items are arranged in a specific order, usually using numbers or letters to indicate the order. An unordered list is a list of items in which the items are arranged in no particular order, usually using bullet points or other symbols to indicate that they are a list.
                                    <br />
                                    <br />
                                    In HTML, an ordered list is created using the 'ol' tag and each list item is enclosed in 'li' tags. The default numbering system is decimal.
                                    <br />
                                    <br />
                                    An unordered list is created using the 'ul' tag and each list item is enclosed in 'li' tags. The default bullet point is a disc.
                                    <br />
                                    <br />
                                    In summary, the main difference between ordered list and unordered list is that the former uses numbers or letters to indicate the order of the items, while the latter uses bullet points or other symbols to indicate that they are a list but without any particular order.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">8. What are Semantic tags in HTML?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    Semantic tags in HTML are tags that provide additional information about the meaning and structure of the content they enclose. These tags help search engines and other software to understand the content of a web page better. Some examples of semantic tags in HTML include:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-300">
                                    <li><span className='font-medium'>header</span> This tag represents the container for introductory content or a set of navigational links.</li>

                                    <li><span className='font-medium'>nav</span> This tag represents a section of a page that contains navigation links</li>

                                    <li><span className='font-medium'>article</span> This tag represents a self-contained composition in a document, such as a blog post, forum post, or news story.</li>

                                    <li><span className='font-medium'>section</span> This tag represents a thematic grouping of content, such as chapters, headings, or blocks of text.</li>

                                    <li><span className='font-medium'>aside </span> This tag represents a section of a page that contains content that is related to the main content but not essential to it.</li>

                                    <li><span className='font-medium'>footer </span> This tag represents the container for the footer of a document or a section.</li>

                                    <li><span className='font-medium'>figure </span>  This tag represents a unit of content, such as an image, video, table, or code snippet, that is referenced in the main content.</li>

                                    <li><span className='font-medium'>figcaption </span> This tag represents a caption for the figure</li>

                                    <li><span className='font-medium'>time </span> This tag represents a date and/or time</li>

                                    <li><span className='font-medium'>time </span> This tag represents a highlighted text.</li>

                                </ul>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    By using these semantic tags, developers can structure their HTML code in a way that makes it more meaningful and easier to understand for both humans and machines. This can lead to better accessibility, search engine optimization, and overall user experience.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">9. How semantic tags improve SEO performance?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    Semantic tags in HTML can improve SEO (Search Engine Optimization) in a few ways:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-300">
                                    <li><span className='font-medium'>Improved crawlability</span> Search engines use crawlers to scan and index web pages. Semantic tags can provide more context and meaning to the content, making it easier for crawlers to understand and index the page correctly.</li>

                                    <li><span className='font-medium'>Relevance</span> Search engines use the context and meaning of a web page to determine its relevance to a user's query. By using semantic tags, web developers can make sure that the content is properly organized and labeled, which can help search engines understand the relevance of the page.</li>

                                    <li><span className='font-medium'>Better accessibility</span> Semantic tags can also improve accessibility for users with disabilities, as well as for users who use assistive technologies such as screen readers. This can lead to higher engagement and improved user experience, which are factors that can improve search engine rankings.</li>

                                    <li><span className='font-medium'>Rich Snippets</span> Rich snippets are a way to provide summary of your page to search engines. This can lead to better visibility and more click-throughs in search results.</li>

                                    <li><span className='font-medium'>Better understanding of the content </span> Semantic tags can provide more information about the content of a web page, such as the main topic, the type of content, and the author. This can help search engines understand the content of the page and match it to relevant search queries.</li>

                                </ul>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    It's important to note that semantic tags are not a magic formula for SEO and it's only one of the many factors search engines consider when ranking a website. It's also important to have high-quality content, good user experience and a well-structured website and link building strategy in place to have a well-rounded SEO approach.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">10. How to create nested webpage in HTML?</h1>
                                <p className='text-gray-600 dark:text-gray-300'>
                                    If the user needs embedded content in the website used Nested web pages concepts. It's a page within a page. Use a nested Web page when you want to represent information from another page to your website.
                                    <br />
                                    <br />
                                    This means you can keep both pages information without having to change anything else on your Website. Create a nested (embed) page with the help of HTML. An inline iframe tag in your text editor.
                                    <br />
                                    <br />
                                    We are used an "iframe" tag into the "body" section of the document. Use the "src" attribute to specify the address of the second page, embedded page. We can also use CSS to style the iframe.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">11. Difference between frame and frameset. Which is better?</h1>
                                <p className='text-gray-600 dark:text-gray-300'>
                                    Both iframes and framesets are used to embed another HTML document within a web page, but there are some key differences between the two.
                                    <br />
                                    <br />
                                    An iframe (short for "inline frame") is an HTML element that allows you to embed another HTML document within the current page. An iframe is a single window, it doesn't have multiple frames like frameset. It uses the 'iframe' tag and it's attributes like src, width, height, etc to define and display the content.
                                    <br />
                                    <br />
                                    On the other hand, a frameset is used to create a page that contains multiple frames or sections, each of which can display a different HTML document. A frameset uses the 'frameset' and 'frame' tags to define the structure and content of the frames.
                                    <br />
                                    <br />
                                    In terms of accessibility and usability, iframes are considered to be a better option than framesets. Because iframes are self-contained and don't affect the layout and navigation of the parent page, they're less likely to cause accessibility problems. They also don't have the same issues with bookmarks, links, and keyboard navigation that framesets can have.
                                    <br />
                                    <br />
                                    In terms of SEO, iframes are considered to be neutral, they don't have a negative impact, but also don't have any specific advantages compared to framesets.
                                    <br />
                                    <br />
                                    In terms of browser support, iframes are supported by all modern browsers and are widely used. On the other hand, framesets are less used these days because of the issues related to accessibility and usability.
                                    <br />
                                    <br />
                                    In conclusion, iframes are generally considered to be a better option than framesets because they are more accessible and user-friendly, and they don't have the same issues with bookmarks, links, and keyboard navigation that framesets can have.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">12. Which HTML tags don’t have an end tag?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    In HTML, some tags don't require an end tag because they don't contain any content. These are called void or self-closing tags. Here are a few examples of HTML tags that don't have an end tag:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-300">
                                    <li><span className='font-medium'>img</span>  This tag is used to embed images in a web page. It requires a "src" attribute, which specifies the URL of the image file.</li>

                                    <li><span className='font-medium'>input</span> This tag is used to create form controls, such as text fields, checkboxes, and radio buttons.</li>

                                    <li><span className='font-medium'>br</span> This tag is used to create a line break.</li>

                                    <li><span className='font-medium'>hr</span> This tag is used to create a horizontal rule.</li>

                                    <li><span className='font-medium'>meta </span> This tag is used to provide meta information about the web page, such as keywords and description.</li>

                                    <li><span className='font-medium'>link </span> This tag is used to link to an external resource, such as a CSS stylesheet</li>

                                    <li><span className='font-medium'>base </span> This tag is used to specify the base URL for all relative URLs in a web page.</li>

                                    <li><span className='font-medium'>source </span> This tag is used inside 'picture' or 'audio' or 'video' tag to specify the source of the media.</li>

                                </ul>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    It's important to note that some of these tags are also able to have end tags like 'img' but it's not required, it's considered as a self-closing tag.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">13. When are comments used in HTML?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    Comments in HTML are used to provide notes or explanations about the code that are not displayed in the final webpage. They are a way to communicate with other developers or to document the code for future reference.
                                    Comments are typically used to:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-300">
                                    <li>Explain the purpose of specific code or sections of code.</li>

                                    <li>Disable certain parts of code that are not currently in use.</li>

                                    <li>Provide information about the author, the date the code was written, and any other relevant details.</li>

                                    <li>Provide instructions or notes for other developers who may work on the code in the future.</li>

                                </ul>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    It's important to note that comments are ignored by the browser, they don't affect how the web page is rendered and only used for developer's reference. It's also important to use comments in a way that makes the code easier to understand, and not to overuse them.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">14. What is the purpose of using alternative texts in images?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    The purpose of using alternative text (alt text) in images is to provide a text description of the image for users who are unable to see the image. Alt text is used to make images accessible to people with visual impairments who use screen readers to access web content. It also provides a text alternative for the image when the image fails to load or in case the user has chosen to disable images in their browser.
                                    <br />
                                    <br />
                                    It's also important to note that the alt text should be meaningful and relevant, it should provide context and information about the image. It should not be redundant or unnecessary, for example, if the image is used as a decorative element, the alt text should be left empty or set to alt="" to indicate that it's not providing any relevant information
                                    <br />
                                    <br />
                                    In summary, the purpose of using alternative texts in images is to make the web more accessible for users with visual impairments and to provide a text alternative for the image if the image fails to load. It also helps search engines to understand the images in the web page.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">15. How are active links different from normal links?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    Active links and normal links are both used to create hyperlinks in HTML, but they differ in how they are displayed and interact with the user.
                                    <br />
                                    <br />
                                    Normal links, also known as static links, are the default state of a hyperlink. They are usually underlined and displayed in a different color (usually blue) to indicate that they are clickable. When a user clicks on a normal link, the browser navigates to the linked page or resource.
                                    <br />
                                    <br />
                                    Active links, on the other hand, have a different style when they are being clicked on. They change their color or underline to indicate that they are active and being clicked on. They are used to provide visual feedback to the user that the link is being activated.
                                    <br />
                                    <br />
                                    Active links are created by using CSS and JavaScript. They can be created by adding an active class to the link when it's clicked, and then styling the active class in CSS
                                    <br />
                                    <br />
                                    It's important to note that active links are used for creating more interactive and user-friendly websites, but they are not strictly necessary for the website's functionality
                                    <br />
                                    <br />
                                    In summary, active links are hyperlinks that provide visual feedback to the user when they are clicked on. They are created by using CSS and JavaScript, whereas normal links are the default state of a hyperlink and are displayed with a different color and underline.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">16. What are the entities in HTML?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    Active links and normal links are both used to create hyperlinks in HTML, but they differ in how they are displayed and interact with the user.
                                    <br />
                                    <br />
                                    Normal links, also known as static links, are the default state of a hyperlink. They are usually underlined and displayed in a different color (usually blue) to indicate that they are clickable. When a user clicks on a normal link, the browser navigates to the linked page or resource.
                                    <br />
                                    <br />
                                    Active links, on the other hand, have a different style when they are being clicked on. They change their color or underline to indicate that they are active and being clicked on. They are used to provide visual feedback to the user that the link is being activated.
                                    <br />
                                    <br />
                                    Active links are created by using CSS and JavaScript. They can be created by adding an active class to the link when it's clicked, and then styling the active class in CSS
                                    <br />
                                    <br />
                                    It's important to note that active links are used for creating more interactive and user-friendly websites, but they are not strictly necessary for the website's functionality
                                    <br />
                                    <br />
                                    In summary, active links are hyperlinks that provide visual feedback to the user when they are clicked on. They are created by using CSS and JavaScript, whereas normal links are the default state of a hyperlink and are displayed with a different color and underline.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">17.
                                    Explain The Key Differences Between LocalStorage And SessionStorage Objects.?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    LocalStorage and SessionStorage are both JavaScript objects that are used to store key-value pairs of data on the client-side. Both LocalStorage and SessionStorage are similar in functionality, but there are some key differences between them.
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-300">
                                    <li><span className='font-medium'>Duration</span> The main difference between LocalStorage and SessionStorage is the duration for which the data is stored. LocalStorage stores the data permanently and is not deleted when the browser is closed, whereas SessionStorage stores the data only for the duration of the current browser session and is deleted when the browser is closed.</li>

                                    <li><span className='font-medium'>Size Limit</span>  LocalStorage has a larger storage limit compared to SessionStorage. Most modern browsers provide a minimum of 5MB of storage for LocalStorage and a minimum of 2MB of storage for SessionStorage.</li>

                                    <li><span className='font-medium'>Scope</span> LocalStorage data is accessible to all windows with the same origin, whereas SessionStorage data is only accessible to the window that created it and is specific to that particular browser window.</li>

                                    <li><span className='font-medium'>Security</span> LocalStorage and SessionStorage are both vulnerable to cross-site scripting (XSS) attacks, but LocalStorage is considered to be more vulnerable because it stores data permanently.</li>

                                </ul>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    In summary, LocalStorage and SessionStorage are both JavaScript objects that allow you to store key-value pairs of data on the client-side, but LocalStorage stores the data permanently and is not deleted when the browser is closed, whereas SessionStorage stores the data only for the duration of the current browser session and is deleted when the browser is closed. LocalStorage has a larger storage limit compared to SessionStorage, LocalStorage data is accessible to all windows with the same origin, whereas SessionStorage data is only accessible to the window that created it
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">18. What is difference between HTML and XHTML?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    HTML (Hypertext Markup Language) and XHTML (Extensible Hypertext Markup Language) are both used to create web pages, but there are some key differences between the two.
                                    <br />
                                    <br />
                                    HTML is the most widely used markup language for creating web pages. It is a markup language that defines the structure and layout of a web page, using tags to indicate headings, paragraphs, images, and other elements. HTML has evolved over time and has several versions, the latest version is HTML5.
                                    <br />
                                    <br />
                                    XHTML, on the other hand, is a stricter version of HTML. It is based on XML (Extensible Markup Language) and follows a stricter set of rules for how tags should be written and nested. In XHTML, all tags must be closed properly, all attributes must be in quotes, and all elements must be in lowercase. Also, XHTML requires all documents to be well-formed, which means that all elements must be properly nested and closed, and all attributes must have a value.
                                    <br />
                                    <br />
                                    One of the main differences between HTML and XHTML is that XHTML is more strict and requires a more consistent and well-formed code. XHTML is also more extensible and allows for the use of other markup languages such as MathML and SVG.
                                    <br />
                                    <br />
                                    Another difference is that XHTML is XML-based, it can be parsed and processed by XML processors, whereas HTML is not. This means that XHTML can be used in conjunction with other XML-based languages to create more complex documents.
                                    <br />
                                    <br />
                                    In summary, HTML is a markup language used to create web pages and has several versions, while XHTML is a stricter version of HTML, based on XML, follows a set of rules that are more consistent, well-formed and more extensible. XHTML documents are well-formed and can be parsed and processed by XML processors, whereas HTML is not.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">19. What is a style sheet?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    A style sheet is a document that contains instructions for how to present the layout, colors, fonts, and other visual elements of a website or application. Style sheets are typically written in a language called CSS (Cascading Style Sheets), which is used to describe the layout and presentation of documents written in markup languages such as HTML and XML. Style sheets can be linked to a web page or application by using a link element in the HTML or XML source code. They allow developers to separate the presentation of a website or application from its structure and content, making it easier to maintain and update the visual design.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">20. What is a marquee?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    A marquee is a type of HTML element that can be used to create a scrolling text or image on a web page. The text or image is displayed in a box called the "marquee" and scrolls horizontally or vertically across the web page. The behavior and appearance of the marquee can be controlled using various attributes such as the direction of scrolling, the speed of scrolling, and the behavior when the text or image reaches the end of the marquee. Marquees are generally considered to be an outdated feature of web design as they can be distracting to users and can affect the accessibility of the website. Alternative ways of displaying such information include using CSS animations or JavaScript.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">21.
                                    How many types of CSS can be included in HTML?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    There are three main types of CSS that can be included in HTML:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-300">
                                    <li><span className='font-medium'>Inline CSS</span> Inline CSS is used to apply CSS styles to a specific HTML element. It is written directly in the  &lt;style&gt; attribute of the HTML element. It is useful for applying one-off styles to specific elements, but it can quickly become difficult to manage if there are many elements with different styles.</li>

                                    <li><span className='font-medium'>Internal CSS</span> Internal CSS is used to define styles for multiple elements within a single HTML document. It is written within a 'style' tag in the head section of the HTML document. It is useful when you want to apply styles to multiple elements within a single HTML document but not across multiple documents.</li>

                                    <li><span className='font-medium'>External CSS</span> External CSS is used to define styles for multiple elements across multiple HTML documents. It is written in a separate .css file and then linked to the HTML document using the &lt;link&gt; tag in the head section. It is useful when you want to apply the same styles across multiple HTML documents and makes it easy to maintain and update the styles.</li>

                                </ul>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    It's important to note that all of these types of CSS have their own advantages and disadvantages, so the choice of which type to use will depend on the specific requirements of the project.
                                    <br />
                                    <br />
                                    In summary, there are three types of CSS that can be included in HTML: Inline CSS, Internal CSS, and External CSS. Each of them has its own advantages and disadvantages, and the choice of which type to use will depend on the specific requirements of the project.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">22.
                                    Which type of video formats are supported by HTML5?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    HTML 5 supports three types of video format:
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-300">
                                    <li><span className='font-medium'>mp4</span></li>
                                    <li><span className='font-medium'>webM</span></li>
                                    <li><span className='font-medium'>ogg</span></li>
                                </ul>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">23.
                                    Is audio tag supported in HTML 5?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    Yes. It is used to add sound or music files on the web page. There are three supported file formats for HTML 5 audio tag.
                                </p>
                                <ul class="list-disc ml-4 text-gray-600 dark:text-gray-300">
                                    <li><span className='font-medium'>mp3</span></li>
                                    <li><span className='font-medium'>WAV</span></li>
                                    <li><span className='font-medium'>Ogg</span></li>
                                </ul>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">24.
                                    What is the difference between progress and meter tag?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    The progress tag is used to represent the progress of the task only while the meter tag is used to measure data within a given range
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">25.
                                    What is the use of details and summary tag?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    The details tag is used to specify some additional details on the web page. It can be viewed or hidden on demand. The summary tag is used with details tag.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">25.
                                    If I do not put !DOCTYPE html will HTML 5 work?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    No, the browser will not be able to identify that it is an HTML document and HTML 5 tags do not function properly..
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">26.
                                    What is HTML?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    HTML is the short form of Hypertext Markup Language. HTML is used to design and display pages on the web. It makes the text content more attractive and dynamic. We can create tables, add images, videos, links in our text. We can also add animation to our page to make it more attractive. Every HTML page starts with  &lt;html&gt; tag and end with &lt;html/&gt; tag. It has two main parts head section and body section.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">27.
                                    What is the advantage of grouping several checkboxes together?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    The checkboxes don’t affect one another. But, grouping these checkboxes together help to organize them. Checkbox buttons can have their name and do not need to belong to a group. A single web page can have many different groups of checkboxes.
                                </p>
                            </div>
                            <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                                <h1 class="mb-4 text-xl font-bold leading-tight text-gray-700 lg:mb-6 lg:text-xl dark:text-white">27.
                                    What is Cell Spacing and Cell Padding?</h1>
                                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                    Cell Spacing is referred to as the space or gap between the two cells of the same table. Whereas, Cell Padding is referred to as the gap or space between the content of the cell and cell wall or cell border
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default HtmlQAblog;