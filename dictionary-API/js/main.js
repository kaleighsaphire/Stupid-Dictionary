
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const word = document.querySelector('input').value
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.status){
          // const item = new WordInfo(data[0])
          const chosenWord = new WordInfo(data[0].word)
          item.showInfo()
        }else if(data.title === 'No Definitions Found'){
          alert(`${word} could not be found. Please try another word.`)
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

class WordInfo {
    constructor(chosenWord){
      this.chosenWord = chosenWord
    
  // constructor(wordData){
  //   this.word = wordData.word
    // this.definition = wordData.meanings[0].definitions[0]
    // this.synonym = wordData.synonym
    // this.phonetic = wordData.phonetic
    // this.pronounce = wordData.pronounce
    }
  showInfo(){
    document.getElementById("chosenWord").innerText = this.chosenWord

    // document.getElementById("chosenWord").innerText = this.word
    // document.getElementById("define").innerText = this.definition
    // document.getElementById("twins").innerText = this.synonym
    // document.getElementById("say").innerText = this.phonetic
    // document.getElementById("audio").src = this.pronounce
  }
}

