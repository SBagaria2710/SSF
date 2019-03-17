import React from 'react';

import { ReportCard } from '../components/ReportCard'
import Loader from '../components/Loader'

import { API_HOST } from '../constants/config'
import { IOptions } from '../interfaces/options'
import { ReportData } from '../interfaces/types'
import { IReports } from '../interfaces/reports'

class Reports extends React.Component<IOptions, IReports> {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            filtered: []
        }
    }

    componentDidMount() {
        fetch(API_HOST + 'reports')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    handleSearch(term) {
        return function(x) {
            return x.title.toLowerCase().includes(term.toLowerCase()) 
                || x.description.toLowerCase().includes(term.toLowerCase()) 
                || x.month.toLowerCase().includes(term.toLowerCase()) 
                || x.cost === term ? true : false
                || !term
        }
    }

    mapItems = (items) => {
        return items.filter(this.handleSearch(this.props.searchText)).map((item) => <ReportCard data={item} key={item.id} />)
    }

    render() {
        const { error, isLoaded, items } = this.state
        const { searchText, filterOption, sortOption } = this.props
        if (error) {
            return <div>Error: {error}</div>;
        } else if (!isLoaded) {
            return <Loader />;
        } else {
            const reportData = this.mapItems(items)
            return (
                <div className='container-fluid m-top' style={{transition: 'all 0.3s ease-out'}}>
                    <div className='row' style={{ justifyContent: 'space-evenly' }}>
                        {reportData}
                    </div>
                </div>
            );
        }
    }
}

export default Reports;