import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(val){
        this.setState({ userInput: val })
    }

    assignTrueFalse(){
        let inputArr = this.state.userInput.split('')
        let filteredInputArr = inputArr.filter(i => i !==' ')
        for(let i=0;i<filteredInputArr.length;i++){
            if(filteredInputArr[i].toUpperCase()===filteredInputArr[filteredInputArr.length-1-i].toUpperCase()){
                this.setState({palindrome: 'true'})
            } else{
                return this.setState({palindrome: 'false'})
            }
        }
        
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={(e)=>this.assignTrueFalse()}>Check</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome