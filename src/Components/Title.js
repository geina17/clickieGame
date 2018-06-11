import React, {
    Component
} from 'react';

class Title extends Component {
    styles = {
        fontFamily: 'Erica One',
        color: 'white',
        stoke: 'black'
    }
}
render(){
     return(
         <div>
            <h2 className="animated fadeInLeft" style={this.styles.font}>Super Smash Brawl Memory Game</h2>
        </div>
     );
};

export default Title;