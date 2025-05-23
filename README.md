# Pokédex App (React Native + Expo)

A mobile Pokédex built with **React Native**, **TypeScript**, and **Expo**, leveraging the [PokeAPI](https://pokeapi.co/api/v2/) to fetch and display Pokémon data. Features include browsing, searching, and detailed Pokémon views — with a modular architecture.

Additionally, this project uses styled-components and Zustand. I chose Zustand because it is a light-weight, fast-to-implement version of Redux, making it more appropriate for smaller projects while being just as effective.

*Note: This projects currently uses 2 endpoints from PokeAPI : /pokemon & /pokedex*

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- Expo Go app on your smartphone

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/yourRepo.git
   cd yourRepo
   npm install
   ```

2. **Start the app**:
   ```bash
   npx expo start
   ```
   (Note: it seems like there is a depency conflict between react-native and styled-components I haven't fixed yet... You can still properly install node_modules with ```npm i --legacy-peer-deps```)

3. **Launch on device**:
   Scan the QR code in your terminal with the Expo Go app to open the project on your phone.

---

## 🧱 Project Architecture

Built using a modular approach inspired by the **Hexagonal Architecture** pattern:

- **Services**: Define a limited set of methods for accessing data.
- **Adapters**: Handle API calls and translate PokeAPI responses into internal app models (e.g., converting `PokeAPIPokemon` to `Pokemon`).
- **Mappers**: Ensure all data returned from adapters conforms to the expected app structure.

This separation makes the codebase clean, testable, and easy to scale.

---

## 🔍 Features

### 📜 Pokédex Browser
- Retrieves a list of Pokémon names and IDs from a given Pokédex.
- Displays scrollable cards for each Pokémon.

### 👀 Pokémon Detail Modal
- Tap a card to see detailed info:
  - Name, Pokédex Number, types, height, weight
  - Front and back sprites, and Shiny Form
- The modal color dynamically reflects the Pokémon's main type.

### 🔎 Fuzzy Search
- Search Pokémon by name using fuzzy matching (e.g., `Blbsr` will find `Bulbasaur`).
- Powered by Zustand for state management.

### 🔁 API Handling
- Centralized `FetchingService` using Axios for all API requests.
- All responses are validated, cleaned, and mapped to internal types for consistency.

---

## ✨ Planned Improvements

### Features
- Switch between different Pokédexes via a dropdown. (I didn't have time to properly implement this feature yet, as I ended up having interaction conflict between the dropdown and the Pokedex sliding...)
- Add navigation buttons in the modal to go to next/previous Pokémon. (adding the feature currently would make the code messier than it should. Creating a currentSelectionStore with Zustand first would be interesting for this feature)
- Unified styling (migrate all from `StyleSheet` to `styled-components`).

### Code Quality
- Use Zustand to manage global state like current selection and Pokédex data.
- Add ESLint for linting and code consistency.
- Implement unit and component tests.

### User Experience
- Light/Dark mode support.
- Multilingual support with Zustand-based settings.

---

## ⚠️ Known Issues

- Some inconsistencies between expected API structure and actual data might cause `undefined` fields.
- The modal cannot currently determine neighboring Pokémon without additional state logic (planned fix with Zustand).

---
