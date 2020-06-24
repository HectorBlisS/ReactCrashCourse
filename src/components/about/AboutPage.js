import React, {Component} from 'react'
import Author from './Author'
import Year from './Year'

//TAREA: 

class AboutPage extends Component{ // container

    state = {
        author:"Blissito",
        year:2020,
        logo:"https://m.media-amazon.com/images/G/33/shazam/DSKT-babyregistry-980x55--CB453409753--Nyt2q._V468246206_.jpg"
    }

    onChange = () => {} // comportamiento

    render(){
        return(
            <div>
               <h1>Sobre nosotros...</h1> 
               <Author name={this.state.author} />
               <Year year={this.state.year} />
            </div>
        )
    }
}

export default AboutPage