import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-5 p-4 '>
            <h3>Difference between Authentication and Authorization</h3>
            <p >
                <span className='fw-bold'>Authentication:</span> The use of a key for authentication. In the same way that a system only permits access to users who have the necessary credentials, the lock on the door only allows entrance to those who have the correct key.
            </p>
            <p >
                <span className='fw-bold'>Authorization:</span> Permissions are a form of authorization. Once inside, the individual has the authority to enter the kitchen and open the pet food cabinet. It's possible that the individual does not have authorization to enter the bedroom for a little nap.
            </p>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>In the database, Firebase maintains all data in real time. As a result, data transfer to and from the database is simple and speedy. As a result, Firebase can be used to construct mobile apps such as live streaming, chat messaging, and so on.</p>
            <p>A user name and password are typically used to authenticate a server. Cards, retina scans, voice recognition, and fingerprints are some of the other ways to authenticate.</p>
            <h3>What other services does firebase provide other than authentication</h3>
            <p> There are many services which Firebase provides, Most useful of them are:
            </p>
            <p>1. Cloud Firestore.</p>
            <p>2. Cloud Functions.</p>
            <p>3. Authentication.</p>
            <p>4. Hosting.</p>
            <p>5. Cloud Storage.</p>
            <p>6. Google Analytics.</p>
            <p>7. Predictions. </p>
            <p>8. Cloud Messaging. </p>
        </div>
    );
};

export default Blogs;