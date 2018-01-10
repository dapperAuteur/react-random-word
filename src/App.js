import React, { Component } from 'react';
import './App.css';
import ChooseList from './Components/ChooseList.js';
import RandomWord from './Components/RandomWord.js';
import RandomWordDefinition from './Components/RandomWordDefinition.js';
import SpanishWords from './data/spanish_words.js';

class App extends Component {
  state = {
    currentList: "Spanish",
    lists: [
      { name: "CSS", id: 1 },
      { name: "Elixir", id: 2 },
      { name: "JavaScript", id: 3 },
      { name: "ReactJS", id: 4 },
      { name: "Spanish", id: 5 }
    ],
    spanishWords : SpanishWords,
    word: "aprender",
    translation: "to learn",
    definition: "gain or acquire knowledge of or skill in (something) by study, experience, or being taught.",
    showDefinition: false
  }

// original working
  // changeListHandler = (listIndex) => {
  //   const lists = this.state.lists;
  //   let currentList = lists[listIndex];
  //   // console.log(currentList);
  //   this.setState({ currentList: currentList.name });
  // }
  changeListHandler = (name) => {
    this.setState({ currentList: name });
  }

  toggleShowDefinitionHandler = () => {
    const showStatus = this.state.showDefinition;
    console.log(this.state.showDefinition);
    console.log(showStatus);
    this.setState({ showDefinition: !showStatus })
  }

  componentDidUpdate = () => {
    console.log(this.state);
  }

  getRandomWordHandler = () => {
    const spanishWords = this.state.spanishWords;
    const id = Math.floor(Math.random() * spanishWords.length);
    const nextRandomWord = spanishWords[id];
    console.log(nextRandomWord);
    console.log(this.state.showDefinition);
    this.setState({
      word: nextRandomWord.spanish,
      translation: nextRandomWord.english,
      showDefinition: false
    })
  }

  render() {
    let wordDef = null;

    if (this.state.showDefinition) {
      wordDef = (
        <RandomWordDefinition
          translation={ this.state.translation }
          showDef={ this.state.showDefinition }/>
      )
    }

// original working
    // const lists = (
    //   <div>
    //     { this.state.lists.map((list, index) => {
    //       return <ChooseList
    //         key={ list.id }
    //         click={() => this.changeListHandler(index)}
    //         name={ list.name } />
    //     })}
    //   </div>
    // )

    const lists = (
      <div>
        { this.state.lists.map((list, index) => {
          return <ChooseList
            key={ list.id }
            name={ list.name }
            click={(event) => this.changeListHandler(list.name)} />
        })}
      </div>
    )

    return (
      <div className="App">
        { lists }
        <RandomWord word={ this.state.word }/>
        <h2>First Random Word Definition</h2>
        { wordDef }
        <button
          onClick={ this.toggleShowDefinitionHandler }>
          Show Definition
        </button>
        <button
          onClick={ this.getRandomWordHandler }>
          Next Random Word
        </button>
      </div>
    );
  }
}

export default App;
