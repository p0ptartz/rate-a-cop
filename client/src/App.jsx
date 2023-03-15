import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Officers from "./components/Officers/Officers";
import Location from "./components/Location/Location";

const httpLink = createHttpLink({
    uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {

    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
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
                        <Route
                            exact
                            path="/location"
                            element={
                                <Location />
                            }
                        />
                    </ Routes>
                </ div>
            </ Router>
        </ ApolloProvider>
    );
}

export default App;
