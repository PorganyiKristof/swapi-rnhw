Project Setup Documentation
1. Project Initialization
    -Created an Expo project.
    -Removed the default pages and content to start fresh.
2. Layout Management
    -In the _layout.js file, included the Theme Builder for future use when required.
    -Deleted default Tab Layout to work freely on a single page.
    -Implemented a Safe Area to ensure optimal appearance on mobile devices.
    -Imported the Slot component to allow child elements to render properly within the layout.
3. API Fetching
    -Although I typically use Axios for network requests, I opted for the built-in fetch method since this API requires a single, simple fetch operation.
4. FlatListWithSearch Component
    -Created the FlatListWithSearch component, which contains:
        -A Search component for filtering results. It uses state and onChange methods 
        -A FlatList component to display the fetched data in a scrollable list.

5. Made a really simple design

6. Jest : I intalled 2 package for the testing
    - npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
    - created the TextFlatListSearch.test.js file and made 2 tests
        1. FlatListWithSearch : Test for the search input and the item list
        2. input = empty -> show all : When delete the text in the search bar u need to get back all the prev items

7.  