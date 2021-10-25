import Header from "./Header";
import Dashboard from "./Dashboard";
import configureStore from "../store/configureStore";
import StoreContext from "../contexts/storeContext";

const store = configureStore();

function App() {

    return (
        <div>
            <StoreContext.Provider value={store}>
                <Header/>
                <br/>
                <Dashboard/>
            </StoreContext.Provider>
        </div>
    );
}

export default App;
