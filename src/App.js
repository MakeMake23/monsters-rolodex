import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((m) =>
            m.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="search monsters"
                    handleChange={this.onSearchBoxChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }

    onSearchBoxChange = (e) => this.setState({ searchField: e.target.value });
}

export default App;
