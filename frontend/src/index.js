import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from './components/SearchBar';

function App() {
    const handleSearch = (searchTerm) => {
        console.log(`Search for: ${searchTerm}`);
    }
    return(
        <div>
            <h1> Search Bar Testing</h1>
            <SearchBar onSearch = {handleSearch} />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);