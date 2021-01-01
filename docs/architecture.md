# Architecture

## Technology
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Design

### Notes
- WordisApp is a React Native App;
- WordisGame is an object encapsulating pure and decoupled game logic;

### UML class diagram
```mermaid
classDiagram

class WordisApp{
    -WordisGame game
    -GameSettings settings
    +render()
}
WordisApp --> WordisGame

class GameObject{
    
}

class CharObject{
    +Char char
}
GameObject <|-- CharObject

class WordisGame{
    -TextGenerator textGenerator
    +GameSettings settings
    +GameObject[] matrix
    +Int score
    +next(Input input) WordisGame
}
WordisGame --> TextGenerator
WordisGame --> GameSettings
GameObject --* WordisGame

class GameSettings{
    +Int height
    +Int width
    +Int speed
}

class TextGenerator{
    +next() Char
}

class Input{
    +Direction
}

```
