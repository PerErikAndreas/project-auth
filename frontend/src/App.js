// //////////////////////////////////////////////////////////////////////// //
// /////////////////////////////// IMPORT ///////////////////////////////// //
// //////////////////////////////////////////////////////////////////////// //

import React from 'react'; // Import the React library
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import components from react-router-dom library
import { NotFound } from 'components/NotFound'; // Import the NotFound component from the 'components' directory
import { Main } from 'components/Main'; // Import the Main component from the 'components' directory
import { Login } from 'components/Login'; // Import the Login component from the 'components' directory
import { combineReducers, configureStore } from '@reduxjs/toolkit'; // Import functions from the '@reduxjs/toolkit' library
import { user } from 'reducers/user'; // Import the user reducer from the 'reducers/user' file
import { thoughts } from 'reducers/thoughts'; // Import the thoughts reducer from the 'reducers/thoughts' file
import { Provider } from 'react-redux'; // Import the Provider component from the 'react-redux' library

// //////////////////////////////////////////////////////////////////////// //
// //////////////////////////////// APP /////////////////////////////////// //
// //////////////////////////////////////////////////////////////////////// //

export const App = () => {

  const reducer = combineReducers({
    user: user.reducer,
    thoughts: thoughts.reducer
  }); // Combine the user and thoughts reducers into a single reducer using the combineReducers function

  const store = configureStore({ reducer }) // Create the Redux store using the combined reducer

// //////////////////////////////////////////////////////////////////////// //
// //////////////////////////////// RETURN JSX //////////////////////////// //
// //////////////////////////////////////////////////////////////////////// //

  return (
    <Provider store={store}> {/* Wrap the entire application with the Redux store using the Provider component */}
      <BrowserRouter> {/* Set up the BrowserRouter for handling routing */}
        <Routes> {/* Define the routes for the application */}
          <Route path="/login" element={<Login />} /> {/* Define a route for the '/login' path, rendering the Login component */}
          <Route path="/" element={<Main />} /> {/* Define a route for the root path '/', rendering the Main component */}
          <Route path="*" element={<NotFound />} /> {/* Define a catch-all route for any other paths, rendering the NotFound component */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );

}