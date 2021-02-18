import React from 'react';
import Menu from './components/Menu';
import FirstSection from './components/FirstSection';


class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <FirstSection />
            </div>
        );
    }
}
export default App