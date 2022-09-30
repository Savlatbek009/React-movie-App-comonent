import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "avengers",
  };

  searchHandle = (e) => {
    if (e.key === "Enter") {
      this.props.searchPanel(this.state.search);
    }
  };

  render() {
    return (
      <div className="row w-100">
        <div className="search-box col-md-6 col-sm-12">
          <div class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.searchHandle}
            />
            <div className="col-md-3 col-sm-6">
              <button
                onClick={() => this.props.searchPanel(this.state.search)}
                className="btn btn-outline-success"
              >
                Search
              </button>
            </div>
          </div>

          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

export default Search;
