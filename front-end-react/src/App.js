import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Footer />
            </Router>
        </div>
    );
}

export default App;