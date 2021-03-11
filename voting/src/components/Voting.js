import React,{Component} from 'react';
import '../App.css';

class Voting extends Component{

    constructor(props) {
        super(props);
        this.state = {
            languages: [
                {id: 1, language: "Javascript", votes: 0},
                {id: 2, language: "Python", votes: 0},
                {id: 3, language: "Go", votes: 0},
                {id: 4, language: "Java", votes: 0},
                {id: 5, language: "Typescript", votes: 0},
                {id: 7, language: "Ruby", votes: 0},
                {id: 6, language: "Elixir", votes: 0},
            ]
        };
    }

    incrementVote = id => {
        const newVotes = this.state.languages.map(language => {
            if (language.id === id) {
                return ++language.votes;
            }
        });
        this.setState({votes: newVotes})
    }
	render(){
		return(
			<div className="languages">
                <ul>
                    {
                        this.state.languages.map(language =>
                            <li className="language" key={language.id}>
                                <p className="voteCount">{language.votes}</p> {language.language} 
                                <button onClick={() => this.incrementVote(language.id)} className="btn-vote">vote 🤘🏻</button>
                            </li>)
                    }
                </ul>
            </div>
		);
	}
}
export default Voting;