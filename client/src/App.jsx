import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Officers from "./components/Officers/Officers";

const httpLink = createHttpLink({
    uri: '/graphql',
  });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
// get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
// return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
        authorization: token ? `Bearer ${token}` : '',
         },
};
});

const client = new ApolloClient({
// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
link: authLink.concat(httpLink),
cache: new InMemoryCache(),
});

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginOpen(true);
    };

    const handleCloseClick = () => {
        setIsLoginOpen(false);
    };

    return (
      <ApolloProvider client={client}>
        <Router>
            <div>
                <Nav onLoginClick={handleLoginClick} />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>

                                <Landing />
                                {isLoginOpen && <Login onCloseClick={handleCloseClick} />}

                            </>
                        }
                    />
                    <Route
                        exact
                        path="/officer"
                        element={
                            <Officers />
                        }
                    />
                </ Routes>
            </ div>
        </ Router>
    </ ApolloProvider>
    );
}

export default App;
