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
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
            </div>
            <div className="px-4">
                <p>Do you have a question or a request?</p>
                <p>Fill in the following fields or write to us via info@ozonsok.lv.</p>
            </div>
            <div className="row mt-4">
                <div className="col-12 col-lg-6">
                    <MessageForm reloadMessagesList={reloadMessageList} />
                </div>
                <div className="col-12 col-lg-6">
                    <MessageList reloadMessagesList={reloadMessageList} counter={counter} />
                </div>
            </div>
        </div>
    );
}

export default Forum;