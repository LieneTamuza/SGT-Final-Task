import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Components/Footer";

function App() {
    return (
        <div>
            <Router>
                <Footer />
            </Router>
        </div>
    );
}

export default App;