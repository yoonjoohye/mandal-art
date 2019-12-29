import React, {Component} from 'react';
import MandalArtTemplate from './components/MandalArtTemplate';
import MandalArtTable from './components/MandalArtTable';

class App extends Component {
    render() {
        return (
            <MandalArtTemplate>
                <MandalArtTable/>
            </MandalArtTemplate>
        );
    };
}

export default App;
