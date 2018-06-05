import React from 'react'
import ReactDOM from 'react-dom'

import Button from '@material-ui/core/Button';

const App = (props) => {
    return (
        <div>
            <Button variant="raised" color="primary">
                Hello World
            </Button>
        </div>
    )
}

const root = document.getElementById('root')

ReactDOM.render(<App/>, root)
