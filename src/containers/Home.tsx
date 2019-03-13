import React from 'react'

//Components and Containers
import { Navigation } from '../components/Navbar'
import Reports from './Reports'

//Functions, Interfaces and Styles
import { IHome } from '../interfaces/Home'
import '../styles/containers/Home.css'


class Home extends React.Component<{}, IHome> {
    constructor(props) {
        super(props)
        this.state = {
            showSortOption: false,
            showFilterOption: false,
            searchText: '',
            sortOption: {
                field: undefined,
                order: undefined
            },
            filterOption: {
                field: undefined,
                range: {
                    min: 0,
                    max: 0
                }
            }
        }
    }

    handleChange = (e): void => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        } as any);
    }

    handleShowSort = (e) => {
        e.preventDefault();
            this.setState(prevState => ({
                showSortOption: !prevState.showSortOption
            })
        );
    }

    handleSortOption = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        let sortOption = { ...this.state.sortOption, [name]: value };
        this.setState({ sortOption })
    }

    handleSortSubmit = (e) => {}

    handleShowFilter = (e) => {
        e.preventDefault();
            this.setState(prevState => ({
                showFilterOption: !prevState.showFilterOption
            })
        );
    }

    render() {
        const { searchText, sortOption, filterOption, showSortOption, showFilterOption } = this.state
        console.log(sortOption)
        return (
            <div>
                <Navigation />
                <div className='container-fluid'>
                    <div className='container form-group m-top'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search.."
                            name="searchText"
                            onChange={this.handleChange}
                            value={this.state.searchText}
                        />
                    </div>
                    <div className='container m-top'>
                        <div className='row'>
                            <div onClick={this.handleShowSort} className='col-6 search-option'>Sort</div>
                            <div onClick={this.handleShowFilter} className='col-6 search-option'>Filter</div>
                        </div>
                        {showSortOption &&
                            <form className='container' onSubmit={this.handleSortSubmit}>
                                <div className='col'>
                                    <p>Order</p> <br />
                                    <div className="row">
                                        <label htmlFor="Order for Sorting">
                                            <input
                                                type="radio"
                                                value="ASC"
                                                name="order"
                                                checked={sortOption.order === "ASC"}
                                                onChange={this.handleSortOption}
                                            />
                                            Ascending Order
                                        </label>
                                        <label htmlFor="Order for Sorting">
                                            <input
                                                type="radio"
                                                value="DSC"
                                                name="order"
                                                checked={sortOption.order === "DSC"}
                                                onChange={this.handleSortOption}
                                            />
                                            Decending Order
                                        </label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <p>Field</p> <br />
                                    <div className='row'>
                                        <label htmlFor="Field for Sorting">
                                            <input
                                                type="radio"
                                                value="PublishedDate"
                                                name="field"
                                                checked={sortOption.field === "PublishedDate"}
                                                onChange={this.handleSortOption}
                                            />
                                            Published Date
                                        </label>
                                        <label htmlFor="Field for Sorting">
                                            <input
                                                type="radio"
                                                value="Cost"
                                                name="field"
                                                checked={sortOption.field === "Cost"}
                                                onChange={this.handleSortOption}
                                            />
                                            Cost
                                        </label>
                                    </div>
                                </div>
                            </form>
                        }
                        {showFilterOption &&
                            <div>
                                FILTER
                            </div>}
                    </div>
                    <Reports searchText={searchText} sortOption={sortOption} filterOption={filterOption} />
                </div>
            </div>
        );
    }
}

export default Home;