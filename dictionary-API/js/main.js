
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const word = document.querySelector('input').value
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.title === 'No Definitions Found'){
          alert(`${word} could not be found. Please try another word.`)
        }else if (data){
          const chosenWord = new WordInfo(data[0])
          chosenWord.showInfo()
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

class WordInfo {
    constructor(chosenWord){
      this.chosenWord = chosenWord.word
      this.definition = chosenWord.meanings[0].definitions[0].definition
      this.synonym = chosenWord.meanings[0].synonyms[0]
      this.phonetic = chosenWord.phonetic
      this.pronounce = chosenWord.phonetics[0].audio
    
  // constructor(wordData){
  //   this.word = wordData.word
  //   this.definition = wordData.meanings[0].definitions[0]
  //   this.synonym = wordData.meanings[0].synonyms[0]
  //   this.phonetic = wordData.phonetic
  //   this.pronounce = wordData.phonetics[0].audio
    }
  showInfo(){
    document.getElementById("chosenWord").innerText = this.chosenWord.toUpperCase()

    // document.getElementById("chosenWord").innerText = this.word
    document.getElementById("define").innerText = this.definition
    document.getElementById("twins").innerText = this.synonym
    document.getElementById("say").innerText = this.phonetic
    document.getElementById("audio").src = this.pronounce
  }
}

