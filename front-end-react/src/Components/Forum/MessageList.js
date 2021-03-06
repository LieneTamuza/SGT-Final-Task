import { useEffect, useState } from 'react';
import axios from 'axios';
import Messages from './Messages';

function MessageList({ counter }) {

    const [messages, setMessages] = useState({
        loading: true,
        items: [],
    });

    const loadMessages = async () => {
        setMessages({
            loading: true,
            items: [],
        });
        try {
            const url = 'http://localhost:8072/messages';
            const response = await axios.get(url);
            setMessages({
                loading: false,
                items: response.data,
            });
        } catch (e) {
            alert('Something went wrong');
            setMessages({
                loading: false,
                items: [],
            });
        }
    }

    useEffect(() => {
        loadMessages();
    }, [counter]);

    return (
        <ul className="list-group">
            <Messages messages={messages} />
        </ul>
    );
}

export default MessageList;