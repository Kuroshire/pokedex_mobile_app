--------------------------------------

How To Install & Use: 
This project uses React Native and Typescript, and retrieve data from the open-API PokeAPI (https://pokeapi.co/api/v2/).
This project was made with Expo.
To use this project, you first need to have it installed on your device (for example by cloning the repo + npm install for the packages) and start it with `npx expo start`. You will also need the Expo app on your phone.
Once the app started a QR Code will appear in your console and you can directly access the project by scanning the QR Code with your phone.



The idea behind the architecture used (modules | version of Hexagonale Architecture):

When you are trying to access the API, you must go through the dedicated Service with a limited amount of usable function. 
Each function will do one task and access the API data through an adapter. 
The Adapter will always return the module app type (example - for the Pokemon module, every Adapter which reads and retrieves data from the API can only return a Pokemon object, and not a PokeAPIPokemon object). Adapters will go through a mapper before returning the data it collected.

Current Features:

1/ From the Pokedex end point, we can retrieve a list of pokemon names and pokedex number. This allws us to have the list of all the pokemons from a given pokedex and scroll through it.

2/ By clicking on a Pokemon Card, a modal will open showing basic informations about the pokemon. Informations given are the Name, Pokedex Number, the types, Height, Weight. Additioanlly, it shows the pokemon front sprite. By clicking on this sprite, you will rotate the pokemon and see its back. You can also click on the buttons below to see the pokemon's shiny form. By clicking on the colorful area on the top side of the screen when the modal is open, you will leave the detailed view and return to the pokedex. The modal background color is based on the current pokemon main type.

3/ Search mode - On the header, you can see a search bar which will loosely search for matching pokemon names. (Example - Blbsr will find Bulbasaur as the letters are in the proper order even if some are missing) This features was implemented using Zustand to store the search string input. By accessing this user input and filtering the data before rendering it, we manage to have a functional search feature.

4/ When it comes to the API interactions, every data fetch passes through the FetchingService which uses axios within a function and will clean up the data before returning it. By going through this service, the data is structure within an object holding informations about the query sucess. Additionally, types have been created to represent the data object retrieved from the API for each end point, making it easier to work with. Notably, every API object also possess a mapper to its application equivalent.


--- POSSIBLE IMPROVEMENTS ---

Features I couldn't finish in time:
- Possible to switch between Pokedex (an attempt was made at creating a select which would give the user a way to switch Pokedex, but the interaction was messy...).
- Some parts of the design are made with styled-components, while other parts are still using React-Native's StyleSheet. Ideally, everything should be under the same design framework.
- Adding a way to go to the next and previous pokemon from the modal directly. The issue with this feature came from the fact the modal can't really know which pokemons are neighboring the current selection, and would require to be passed down callback functions for this feature. However this makes the code look messy and out of place. The idea was to implement a zustand store to manage the Pokedex object as well as the current selection. By doing as such, it would reduce the amount of dependencies between all the components and simplify the project overall. However, i didn't manage to apply it in time for the review.

Current issue with the API interactions: 

Errors are properly handled by FetchingService.
However, if the API object retrieved doesn't match the API type assumed by the module (currently hand written from observations on the API), it may cause issues when used in components, as some fields might be undefined when expect to always have a value.

Interesting feature to add in the future:

Light/Dark Mode, Translation (use zustand to store the settings and access it from anywhere)
Unit Testing & Component Testing.
Add EsLint to the project.

Note: this project is not finished yet, and i'll keep trying to improve it slightly.


---------------------------------------------------------------------------
