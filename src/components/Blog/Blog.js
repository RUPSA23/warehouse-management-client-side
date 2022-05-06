import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>1. Difference between javascript and nodejs?</h2>
            <p>Answer:  Javascript is a programming language that is used for writing scripts on the website. But NodeJS is a Javascript runtime environment</p>

<h2> When should you use nodejs and when should you use mongodb?</h2>
<p>Answer: There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database</p>

<h2>Differences between sql and nosql databases?</h2> 
<p>Answer: SQL databases are primarily called as Relational Databases (RDBMS). whereas NoSQL database are primarily called as non-relational or distributed database.</p>

        </div>
    );
};

export default Blog;