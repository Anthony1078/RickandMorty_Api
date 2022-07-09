import React, {Fragment} from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './main.sass'
import './components/Header.css'
import './components/Characters.css'

const App = () => {
    return ( 
        <Fragment>
            <Header
                title="API Rick and Morty"
                text="Usando la API de Rick and Morty"
            />
            <Characters />
        </Fragment>
     );
}
 
export default App;