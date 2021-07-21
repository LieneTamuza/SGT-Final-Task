import { useState } from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import MessageForm from '../Components/Forum/MessageForm';
import MessageList from '../Components/Forum/MessageList';

function Forum() {
    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Forum' }
    ];

    const [counter, setCounter] = useState(0);

    const reloadMessageList = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
            </div>
            <div>
                <p>Do you have a question or a request? Then get in touch with us.</p>
                <p>Simply fill in the following fields or write to us via info@ozonsok.lv.</p>
            </div>
            <div className="row">
                <div className="col">
                    <MessageForm reloadMessagesList={reloadMessageList} />
                </div>
                <div className="col">
                    <MessageList reloadMessagesList={reloadMessageList} counter={counter} />
                </div>
            </div>
        </div>
    );
}

export default Forum;