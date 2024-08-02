#Namaste React

#Pacel does the following taks for you

- Dev Build
- Local Server (1234)
- HMR - Hot Module Replacement (automatically updates the page on any changes)
- Parcel uses file watching algorithm - written in c++

  * Header
  *   - Logo
  *   - Nav Item
  * Body
  *   - Search
  *   - Restaurant Container
  *       - Restaurant Card
  *           - Images
  *           - Name of Restaurant, Star Rating, Cuisine, Delivery Time
  * Footer
  *   - Copy Right
  *   - Links
  *   - Address
  *   - Contact

# Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our Store
  - Connect our store to our app
  - Create a slice, slice(cartSlice)
  - Dispatch an action, dispatch(action)
  - Read the data, selector()

# Types of testing (test cases) that Developer can write
  - Unit Testing
  - Integration Testing
  - End to End Testing || e2e testing

# Setting up testing in our app
  - Installed React Testing Library
  - Installed jest
  - Installed Babel dependencies
  - Configure Babel => babel.config.js
  - Configure Parcel Config file to disable default Babel transpilation
  - Jest Configuration
  - Jest npx jest --init
  - Install jsdom library
  - Install -D @babel/preset-react => to make JSX work in test cases (Important)
  - Now include the @babel/preset-react inside my Babel config
  - Intall @testing-library/jest-dom and @testing-library/dom (to resolve toBeInTheDocument() is not a function issue)