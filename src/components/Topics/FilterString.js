import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredArray: ['Liam', 'Noah', 'William', 'James', 'Logan', 'Benjamin', 'Mason', 'Elijah', 'Oliver', 'Jacob', 'Lucas', 'Michael', 'Alexander', 'Ethan', 'Daniel', 'Matthew', 'Aiden', 'Henry', 'Joseph', 'Jackson', 'Samuel', 'Sebastian', 'David', 'Carter', 'Wyatt', 'Jayden', 'John', 'Owen', 'Dylan', 'Luke', 'Gabriel', 'Anthony', 'Isaac', 'Grayson', 'Jack', 'Julian', 'Levi', 'Christopher', 'Joshua', 'Andrew', 'Lincoln', 'Mateo', 'Ryan', 'Jaxon', 'Nathan', 'Aaron', 'Isaiah', 'Thomas', 'Charles', 'Caleb', 'Josiah', 'Christian', 'Hunter', 'Eli', 'Jonathan', 'Connor', 'Landon', 'Adrian', 'Asher', 'Cameron', 'Leo', 'Theodore', 'Jeremiah', 'Hudson', 'Robert', 'Easton', 'Nolan', 'Nicholas', 'Ezra', 'Colton', 'Angel', 'Brayden', 'Jordan','Dominic', 'Austin', 'Ian', 'Sara', 'Joe', 'Elliot', 'Ivan', 'Rowan', 'Molly'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({ userInput: val })
    }

    assignFilteredString(){
        let newArr = []
        
        for(let i=0;i<this.state.unFilteredArray.length;i++){
            // let fullName = this.state.unFilteredArray[i]
            // let partName = fullName.startsWith(val)
            if(this.state.unFilteredArray[i].startsWith(this.state.userInput)){
                // this.setState({filteredArray: this.state.unFilteredArray[i]})
                newArr.push(this.state.unFilteredArray[i])
            }
        }
        this.setState({filteredArray: newArr})
    }
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={
                    (e) => this.assignFilteredString(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString