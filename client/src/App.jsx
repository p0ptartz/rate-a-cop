import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Officers from "./components/Officers/Officers";

const client = new ApolloClient({
    uri: '/graphql',
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
                </Routes>
            </div>
        </Router>
    </ApolloProvider>







    );
}

export default App;
