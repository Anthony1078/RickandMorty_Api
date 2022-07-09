import React from 'react'


const Header = ({title},{text}) => {
    return ( 
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text">Usando la API de Rick and Morty</p>
                    <p className="text">React - Webpack - Sass</p>
                </div>
            </div>
        </header>
     );
}
 
export default Header;