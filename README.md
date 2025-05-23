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



POSSIBLE IMPROVEMENTS:

Current issue with the API interactions: 

Errors are properly handled by FetchingService.
However, if the API object retrieved doesn't match the API type assumed by the module (currently hand written from observations on the API), it may cause issues when used in components, as some fields might be undefined when expect to always have a value.

Interesting feature to add in the future:

Light/Dark Mode, Translation (use zustand to store the settings and access it from anywhere)
Multiple Pokedex (an attempt was made at creating a select which would give the user a way to switch Pokedex, but the interaction was messy...).
Unit Testing & Component Testing.


---------------------------------------------------------------------------
