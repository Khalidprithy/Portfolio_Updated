import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const BackendProjects = () => {
    return (

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-full md:w-11/12 lg:w-10/12 mx-auto'>
            <div className="relative text-white bg-neutral text-center rounded-lg p-2">
                <p className='absolute top-2 left-2 text-xl font-semibold'>Backend</p>
                <div className="flex flex-col justify-between mt-10">
                    <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-red-400">NodeJS server with GraphQL/Postgres</h4>
                    <h5 className='text-green-600 font-medium'>GraphQL-Postgres-NodeJS-Authentication</h5>
                    <p className="text-sm py-6 px-2">This backend server section focuses on the implementation of authentication and authorization in a GraphQL-Postgres-NodeJS stack. The server uses technologies such as bcrypt, cookie-parser, dotenv, express, jsonwebtoken, graphql, postgres, typeorm, expressjs, and apollo-server to handle user authentication and authorization. </p>
                    <h5 className='font-medium text-left text-lg'>Features -</h5>
                    <ul className='text-left list-disc list-inside ml-4'>
                        <li><span className='text-primary'>Register Resolver:</span> This resolver allows users to register by creating a new account in the system. The user's password is securely hashed using bcrypt, and the account details are stored in a PostgreSQL database using TypeORM.</li>
                        <li><span className='text-primary'>Login Resolver:</span> This resolver allows users to log in to the system using their registered email and password. If the email and password match a record in the database, a JWT (JSON Web Token) is created and stored as a cookie on the user's device.</li>
                        <li><span className='text-primary'>Login Authentication:</span> Users can log in using their email and password.</li>
                        <li><span className='text-primary'>JWT Token Generation:</span> JSON Web Tokens (JWT) are generated and sent to the client for subsequent API calls after successful login.</li>
                        <li><span className='text-primary'>User Resolvers:</span> These resolvers allow users to view and update their own account details. They also provide a way for administrators to view and manage user accounts.</li>
                        <li><span className='text-primary'>Product Resolver:</span> This resolver provides a way for users to get, add, delete, and update products in the system. The resolver is protected by authentication and authorization checks to ensure that only authorized users can perform these operations.</li>
                    </ul>
                    <h3 className='text-left text-green-400 mt-4'> <span className='font-semibold text-white'>Technologies used:</span> Node.js, Express.js, GraphQL, Postgres, JSON Web Token (jsonwebtoken), Apollo Server, TypeORM, dotenv, cookie-parser, bcrypt </h3>
                </div>
                <div className='absolute top-2 right-2'>
                    <a href='https://github.com/Khalidprithy/GraphQL-Postgres-React-Project' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 w-32 mx-auto bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Github</a>
                </div>
            </div>
            <div className="relative text-white bg-neutral text-center rounded-lg p-2">
                <p className='absolute top-2 left-2 text-xl font-semibold'>Backend</p>
                <div className="flex flex-col justify-between mt-10">
                    <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-red-400">Secure Authentication</h4>
                    <h5 className='text-green-600 font-medium'>Authentication with Node.js and MongoDB</h5>
                    <p className="text-sm py-6 px-2">Node.js and MongoDB are powerful tools for building robust backend servers. One of the most important features of any web application is user authentication and authorization. Node.js and MongoDB provide excellent tools and libraries for building secure authentication systems. Here are some of the features that the backend server built with Node.js and MongoDB provides: </p>
                    <h5 className='font-medium text-left text-lg'>Features -</h5>
                    <ul className='text-left list-disc list-inside ml-4'>
                        <li><span className='text-primary'>User Registration:</span> Users can create accounts with their email and password.</li>
                        <li><span className='text-primary'>Password Hashing:</span> Passwords are securely stored in the database using bcrypt.</li>
                        <li><span className='text-primary'>Login Authentication:</span> Users can log in using their email and password.</li>
                        <li><span className='text-primary'>JWT Token Generation:</span> JSON Web Tokens (JWT) are generated and sent to the client for subsequent API calls after successful login.</li>
                        <li><span className='text-primary'>Authorization:</span> JWT tokens are used to authorize access to protected resources.
                            Cookie-Based Authentication: Cookies are used to securely store JWT tokens in the client-side.</li>
                        <li><span className='text-primary'>Environment Variables:</span> Environment variables are used for storing sensitive information such as the database connection string, JWT secret, and other configurations.</li>
                    </ul>
                    <h3 className='text-left text-green-400 mt-4'> <span className='font-semibold text-white'>Technologies used:</span> Node.js, Express.js, Mongoose, JSON Web Token (jsonwebtoken), dotenv, cookie-parser, bcrypt </h3>
                </div>
                <div className='absolute top-2 right-2'>
                    <a href='https://github.com/Khalidprithy/BackendDeveloper' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 w-32 mx-auto bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Github</a>
                </div>
            </div>

            <div className="relative text-white bg-neutral text-center rounded-lg p-2">
                <p className='absolute top-2 left-2 text-xl font-semibold'>Backend</p>
                <div className="flex flex-col justify-between mt-10">
                    <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-red-400">PERN Todo Server</h4>
                    <h5 className='text-green-600 font-medium'> Node Postgres CRUD Application</h5>
                    <p className="text-sm py-6 px-2">The PERN (PostgreSQL, Express, React, Node.js) stack is a powerful combination of technologies that can be used to build robust web applications. With Node.js, Express, and PostgreSQL, you can create a backend server with CRUD functionality for managing todo lists. Here are some of the features that the PERN Todo Server provides: </p>
                    <h5 className='font-medium text-left text-lg'>Features -</h5>
                    <ul className='text-left list-disc list-inside ml-4'>
                        <li><span className='text-primary'>CURD:</span> Users can create, read, update, and delete todo items from the database.</li>
                        <li><span className='text-primary'>PostgreSQL Database:</span> PostgreSQL is a powerful and open-source relational database that provides excellent performance and scalability.</li>
                        <li><span className='text-primary'>Environment Variables:</span> Environment variables are used for storing sensitive information such as the database connection string and other configurations.</li>
                        <li><span className='text-primary'>JWT Token Generation:</span> JSON Web Tokens (JWT) are generated and sent to the client for subsequent API calls after successful login.</li>
                        <li><span className='text-primary'>Cross-Origin Resource Sharing (CORS):</span> CORS is used to allow cross-domain communication between the client and server.</li>
                        <li><span className='text-primary'>Nodemon:</span> Nodemon is a utility that automatically restarts the server when changes are made to the code.</li>
                    </ul>
                    <h3 className='text-left text-green-400 mt-4'> <span className='font-semibold text-white'>Technologies used:</span> Node.js, Express.js, PostgreSQL, CORS, Nodemon </h3>
                </div>
                <div className='absolute top-2 right-2'>
                    <a href='https://github.com/Khalidprithy/PERN-Todo-Server' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 w-32 mx-auto bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Github</a>
                </div>
            </div>

            <div className="relative text-white bg-neutral text-center rounded-lg p-2">
                <p className='absolute top-2 left-2 text-xl font-semibold'>Backend</p>
                <div className="flex flex-col justify-between mt-10">
                    <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-red-400"> Object Detection App</h4>
                    <h5 className='text-green-600 font-medium'>Tensorflow.js Object Detection with Video Annotation</h5>
                    <p className="text-sm py-6 px-2">Object detection is an essential task in computer vision, with applications ranging from self-driving cars to security systems. With Tensorflow.js and the COCO-SSD model, you can create an object detection app that detects objects in real-time video streams. Here are some of the features that the Object Detection App provides: </p>
                    <h5 className='font-medium text-left text-lg'>Features -</h5>
                    <ul className='text-left list-disc list-inside ml-4'>
                        <li><span className='text-primary'>Real-Time Object Detection:</span> The app can detect multiple objects in real-time video streams.</li>
                        <li><span className='text-primary'>Video Object Detection: </span> The app can also detect objects in local video files.</li>
                        <li><span className='text-primary'>COCO-SSD Model:</span> The app uses the COCO-SSD model, a pre-trained object detection model trained on the Common Objects in Context (COCO) dataset.</li>
                        <li><span className='text-primary'>Video Annotation:</span> The app annotates the detected objects in the video stream with bounding boxes and labels.</li>
                        <li><span className='text-primary'>Tensorflow.js:</span> Tensorflow.js is a JavaScript library for building and training machine learning models in the browser and on Node.js.</li>
                    </ul>
                    <h3 className='text-left text-green-400 mt-4'> <span className='font-semibold text-white'>Technologies used:</span> Tensorflow.js, COCO-SSD Model</h3>
                </div>
                <div className='absolute top-2 right-2'>
                    <a href='https://github.com/Khalidprithy/Object-detection-with-annotation-for-video' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 w-32 mx-auto bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Github</a>
                </div>
            </div>

        </div>


    );
};

export default BackendProjects;