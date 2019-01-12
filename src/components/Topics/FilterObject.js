import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            unfilteredArray: [
                {firstName: 'Bill', lastName: 'Underhill', age: 69, favFood: 'pizza'},
                {firstName: 'Jon', lastName: 'Blow', age: 17, birthMonth: 'June'},
                {firstName: 'Kevin', lastName: 'Dwingman', age: 40, president: true,},
                // {firstName: 'Hill', lastName: 'Underbill', age: 25, gender: 'male',},
                // {firstName: 'Sara', lastName: 'Aras', age: 19, favMovie: 'Walter Mitty'},
                // {firstName: 'Joey', lastName: 'Blowey', age: 32, favActivity: 'none'},
                // {firstName: 'Mike', lastName: 'Ekim', age: 23, middleName: 'Ikme'},
                // {firstName: 'Tom', lastName: 'Mot', age: 77, leastFavLetter: 'k'},
                // {firstName: 'Dany', lastName: 'D', age: 25, isItTrue: false},
                // {firstName: 'Sammy', lastName: 'T', age: 18, money: '$25'},
                // {firstName: 'Nathan', lastName: 'Nahtan', age: 0, middleName: 'Thanan'},
            ],
            userInput: '',
            filteredArray: [],
        }
    }
    
    handleChange(val){
        this.setState({ userInput: val })
    }

    assignFilteredObject(val){
        
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={
                    (e) => this.assignFilteredObject(e.target.value)}>Filter</button>
                <span className="resultsBox filterObjectRB">{this.state.filteredArray}</span>
            </div>
        )
    }
}

export default FilterObject