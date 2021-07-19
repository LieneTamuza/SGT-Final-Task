import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import News from './Views/News';
import Header from './Components/Header';
import Home from './Views/Home';
import Footer from './Components/Footer';
import Page404 from './Views/Page404';

function App() {
    return (
        <div>
            <Router>
                <Header />

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/news'>
                        <News />
                    </Route>
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