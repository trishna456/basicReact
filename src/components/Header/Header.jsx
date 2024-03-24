import './Header.css'

const text = ["Fundamental", "Core", "Crucial"]

function getRandom(maxLen){
    return Math.floor(Math.random()*maxLen)
}

export default function Header(){
    return (
      <header>
          <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {text[getRandom(3)]} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    )
  }