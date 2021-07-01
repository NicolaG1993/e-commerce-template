import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "./redux/actions";
// import { commerce } from "./lib/commerce";
import { Header, Footer } from "./components";
import { Home, About, Contact, Shop } from "./components";
import "./styles/App.css";

function App(props) {
    const [state, setState] = useState({});
    console.log(setState, state);

    useEffect(() => props.dispatch(loadData()), []);

    console.log("redux state in app: ", props.state);
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

function mapStateToProps(state) {
    return { state };
}
export default connect(mapStateToProps)(App);

// 🥑🍄
// settare slider 🥑
// settare .env (no webpack) 🥑
// settare redux 🥑
// sistemare dark-light mode 🍄

// creare nuovo shop su commerce.js 🍄
// settare .env per deploy 🍄
