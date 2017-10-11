import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <section className="App container">
                <h1>Hello World</h1>
                <p>I'm hosted with GitHub Pages.</p>
                <p>
                    <a href="https://github.com/startupdetroit/startupdetroit.github.io">
                        View the source code to this website
                    </a>. Made with <span style={{ color: '#ff6032' }}>
                        ♥
                    </span>{' '}
                    by <a href="https://tedserbinski.com/">Ted Serbinski</a> and{' '}
                    <a href="http://www.shriyash.io/">Shriyash Jalukar</a> and{' '}
                    <a href="http://mager.co">Andrew Mager</a> in Detroit,
                    Michigan.
                </p>
            </section>
        );
    }
}

export default App;
