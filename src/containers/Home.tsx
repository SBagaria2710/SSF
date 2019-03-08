import React from 'react'

import { Navigation } from '../components/Navbar'

class Home extends React.Component {
    render() {
        return(
            <div>
                <Navigation />
                <div className='container'>
                    <div className='ml-auto'>
                        <h2>Hello There! <br />It's working, yay!</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;