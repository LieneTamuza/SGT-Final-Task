import { useState } from 'react';
import axios from 'axios';

function MessageForm({ reloadMessagesList }) {

    const [saving, setSaving] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newMessage, setNewMessage] = useState('');

    const updateNewUsername = (event) => {
        setNewUsername(event.target.value);
    }

    const updateNewMessage = (event) => {
        setNewMessage(event.target.value);
    }

    const createNewMessage = async (event) => {
        if (newUsername === '' || newMessage === '') {
            event.preventDefault();
            alert('Please enter your name and message!');
            return;
        };
        setSaving(true);
        const url = 'http://localhost:8072/messages';
        const data = {
            username: newUsername,
            message: newMessage,
        };

        try {
            await axios.post(url, data);
            setSaving(false);
            setNewMessage('');
            setNewUsername('');
            reloadMessagesList();
        } catch (error) {
            alert('Something went wrong when talking to the server');
            setSaving(false);
        }
    }

    let nameInput = <input value={newUsername} onChange={updateNewUsername} type="text" className="form-control" id="inputName" />;
    let messageInput = <textarea value={newMessage} onChange={updateNewMessage} type="text" className="form-control" id="inputMessage" />;
    let submitButton = <button onClick={createNewMessage} type="submit" className="btn btn-primary btn-md px-4">Send</button>;
    if (saving) {
        nameInput = <input type="text" className="form-control" id="inputName" disabled={true} />;
        messageInput = <textarea type="text" className="form-control" id="inputMessage" disabled={true} />;
        submitButton = <button type="submit" className="btn btn-primary btn-md px-4" disabled={true}>Sending...</button>;
    }

    return (
        <div className="container mb-5">
            <form>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Name:</label>
                            {nameInput}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputMessage" className="form-label">Message:</label>
                            {messageInput}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        {submitButton}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default MessageForm;