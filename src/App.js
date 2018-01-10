import React, { Component } from 'react';
import './App.css';
import RandomWord from './Components/RandomWord.js';
import RandomWordDefinition from './Components/RandomWordDefinition.js';
import SpanishWords from './data/spanish_words.js';

class App extends Component {
  state = {
    spanishWords : SpanishWords,
    word: "aprender",
    translation: "to learn",
    definition: "gain or acquire knowledge of or skill in (something) by study, experience, or being taught.",
    showDefinition: false
  }

  toggleShowDefinitionHandler = () => {
    const showStatus = this.state.showDefinition;
    console.log(this.state.showDefinition);
    console.log(showStatus);
    this.setState({ showDefinition: !showStatus })
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

    return (
      <div className="App">
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
