import { useState } from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import ChatMessagesList from '../Components/Chat/ChatMessagesList';
import NewMessageForm from '../Components/Chat/NewMessageForm';

function Chat() {
    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Chat' }
    ];

    const [counter, setCounter] = useState(0);

    const reloadMessagesList = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Do you have a question or a request? Then get in touch with us. Simply fill in the following fields or write to us via info@ozonsok.lv.</p>
                    <NewMessageForm reloadMessagesList={reloadMessagesList} />
                </div>
                <div className="col">
                    <ChatMessagesList reloadMessagesList={reloadMessagesList} counter={counter} />
                </div>
            </div>
        </div>
    );
}

export default Chat;