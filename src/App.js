import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './components/main';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Menu />
            </Router>

        );
    }
}
export default App