import React from 'react';
// import './Navbar.css'; // Import CSS for Navbar component

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar" style={{ backgroundColor: '#000' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ color: '#FF69B4' }}>
              On-Chain-Radio
            </a>
            <div className="search-bar">
              <form className="d-flex">
              <span className="search-icon">&#128269;</span>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="What do you want to listen to?"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
