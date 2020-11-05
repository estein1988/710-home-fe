import React, { Component } from "react";

class MortageRates extends Component {

    state = {
        mortgageRates: [],
        zipCode: 80202
    }

    componentDidMount(){
        this.getMortgageRates()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: +event.target.value
        })
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.getMortgageRates()
    }

    getMortgageRates = () => {
        const url = `https://rapidapi.p.rapidapi.com/finance/rates?loc=${this.state.zipCode}`
        fetch(url,{method: 'GET', headers: {
            'x-rapidapi-key': "0e99ac1a96msh59b4b37c3dadf3bp1b1955jsna0e69e46f75e",
            "x-rapidapi-host": "realtor.p.rapidapi.com"
        },
    })
        .then(response =>  response.json())
        .then(result => this.setState({mortgageRates: result.rates}))
    }

    render() {

        return (
            <div>
                <div class="ui two column centered grid">
                    <div className="LatLongSearch">        
                        <form className="ui form" onSubmit={this.handleSubmit}>
                            <div className="field">
                            <input type="number" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} />
                        </div>
                            <input className="ui black button" type="submit" value="Lookup Current Rates"/>
                        </form>
                    </div>
                </div>
                <h2>10-year: {this.state.mortgageRates.average_rate_10_year}</h2> 
                <h2>15-year: {this.state.mortgageRates.average_rate_15_year}</h2> 
                <h2>20-year: {this.state.mortgageRates.average_rate_20_year}</h2> 
                <h2>30-year: {this.state.mortgageRates.average_rate_30_year}</h2> 
            </div>
        )
    }
}

export default MortageRates;