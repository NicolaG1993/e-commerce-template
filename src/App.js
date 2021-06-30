// import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About, Contact, Shop } from "./components";
import "./styles/App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className={"main"}>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/shop" render={() => <Shop />} />
                    <Route exact path="/about" render={() => <About />} />
                    <Route exact path="/contact" render={() => <Contact />} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;

// 🥑🍄
// settare redux 🍄
// settare .env (no webpack) 🍄
// settare slider 🍄
// creare nuovo shop su commerce.js 🍄
// sistemare dark-light mode 🍄
