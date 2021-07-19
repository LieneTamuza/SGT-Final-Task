import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Page404 from './Views/Page404';

function App() {
    return (
        <div>
            <Router>
                <Header />

                <Switch>
                    <Route path=''>
                        <Page404 />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;