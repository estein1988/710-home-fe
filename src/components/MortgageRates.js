import React, { Component } from "react";
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';
import 'hammerjs'
import '@progress/kendo-theme-default/dist/all.css'
import {Link} from 'react-router-dom'

class MortageRates extends Component {

    state = {
        mortgageRates: [],
        zipCode: 80202,
        calculator: [],
        calculator_split: [],
        hoi: 180,
        tax_rate: 0.55,
        down_payment: 25000,
        price: 410000,
        term: 30,
        rate: 2.967,
        hoi_split: 90,
        tax_rate_split: 0.30,
        down_payment_split: 50000,
        price_split: 410000,
        term_split: 30,
        rate_split: 2.75
    }

    componentDidMount(){
        this.getMortgageRates()
        this.getCalculator()
        this.getCalculatorSplit()
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
        this.getCalculator()
        this.getCalculatorSplit()
    }

    getMortgageRates = () => {
        const url = `https://rapidapi.p.rapidapi.com/finance/rates?loc=${this.state.zipCode}`
        fetch(url,{method: 'GET', headers: {
            'x-rapidapi-key': "",
            "x-rapidapi-host": "realtor.p.rapidapi.com"
        },
    })
        .then(response =>  response.json())
        .then(result => this.setState({mortgageRates: result.rates}))
    }

    getCalculator = () => {
        const url = `https://rapidapi.p.rapidapi.com/mortgage/calculate?hoi=${this.state.hoi}&tax_rate=${this.state.tax_rate}&downpayment=${this.state.down_payment}&price=${this.state.price}&term=${this.state.term}&rate=${this.state.rate}`
        fetch(url, {"method": "GET", headers: {
            "x-rapidapi-key": "",
            "x-rapidapi-host": "realtor.p.rapidapi.com"
        }
    })
        .then(response =>  response.json())
        .then(result => this.setState({calculator: result.mortgage}))
    }

    getCalculatorSplit = () => {
        const url = `https://rapidapi.p.rapidapi.com/mortgage/calculate?hoi=${this.state.hoi_split}&tax_rate=${this.state.tax_rate_split}&downpayment=${this.state.down_payment_split}&price=${this.state.price_split}&term=${this.state.term_split}&rate=${this.state.rate_split}`
        fetch(url, {"method": "GET", headers: {
            "x-rapidapi-key": "",
            "x-rapidapi-host": "realtor.p.rapidapi.com"
        }
    })
        .then(response =>  response.json())
        .then(result => this.setState({calculator_split: result.mortgage}))
    }

    render() {

        const series = [
            { category: 'Homeowners Insurance', value: this.state.calculator.monthly_home_insurance },
            { category: 'Mortage Insurance', value: this.state.calculator.monthly_mortgage_insurance},
            { category: 'Monthly Property Taxes', value: this.state.calculator.monthly_property_taxes},
            { category: 'Principal and Interest', value: this.state.calculator.principal_and_interest}
        ];

        const seriesSplit = [
            { category: 'Homeowners Insurance', value: this.state.calculator_split.monthly_home_insurance},
            { category: 'Mortage Insurance', value: this.state.calculator_split.monthly_mortgage_insurance},
            { category: 'Monthly Property Taxes', value: this.state.calculator_split.monthly_property_taxes},
            { category: 'Principal and Interest', value: this.state.calculator_split.principal_and_interest}
        ];
        
        const labelContent = (props) => {
            let formatedNumber = Number(props.dataItem.value / this.state.calculator.monthly_payment).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
            return `${props.dataItem.category}: ${formatedNumber}`;
        }

        const labelContentSplit = (props) => {
            let formatedNumber = Number(props.dataItem.value / this.state.calculator_split.monthly_payment).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
            return `${props.dataItem.category}: ${formatedNumber}`;
        }
        
        const ChartContainer = () => (
            <Chart title="World Population by Broad Age Groups">
                <ChartLegend position="bottom" />
                <ChartSeries>
                    <ChartSeriesItem type="pie" data={series} field="value" categoryField="category" labels={{ visible: true, content: labelContent }} />
                </ChartSeries>
            </Chart>
        );

        const ChartContainerSplit = () => (
            <Chart title="World Population by Broad Age Groups">
                <ChartLegend position="bottom" />
                <ChartSeries>
                    <ChartSeriesItem type="pie" data={seriesSplit} field="value" categoryField="category" labels={{ visible: true, content: labelContentSplit }} />
                </ChartSeries>
            </Chart>
        );

        return (
            <div>
                <div className="ui inverted blue secondary pointing menu">
                    <div className="header item">
                    {/* {this.props.user.username}  */}
                    </div>
                <div className="blue header item">
                    <i className="home icon"></i>
                    <Link to='/'>Home</Link>
                </div>
                <div className="header item">
                    <i className="calculator icon"></i>
                    <Link to='/rates'>Mortgage Calculator</Link>
                </div>
                <div className="header item">
                    <i className="user icon"></i>
                    <Link to='/user-profile'>My Profile</Link>
                </div>
            </div>
                
                <div class="ui centered grid">
                    <div class="three wide column">
                        <div className="individual-calculator">        
                            <form className="ui form" onSubmit={this.handleSubmit}>

                                <div className="field">
                                    <label>HOI / Month</label>
                                    <input type="number" name="hoi" value={this.state.hoi} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Tax Rate</label>
                                    <input type="number" name="tax_rate" value={this.state.tax_rate} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Your Cont. to Down Payment</label>
                                    <input type="number" name="down_payment" value={this.state.down_payment} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Purchase Price</label>
                                    <input type="number" name="price" value={this.state.price} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Term</label>
                                    <input type="number" name="term" value={this.state.term} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Mortgage Rate:</label>
                                    <input type="number" name="rate" value={this.state.rate} onChange={this.handleChange} />
                                </div>

                                <input className="ui black button" type="submit" value="Calculate Payments"/>
                            </form>
                        </div>
                        <h3 className='chartHeader'>Monthly Payment On Your Own: ${this.state.calculator.monthly_payment}</h3>
                        <h3 className='chartHeader'>Suggested Income: ${this.state.calculator.monthly_payment * 12 * 3.5}</h3>
                    </div>
                
                    <div class="three wide column">
                        <div className="split-calculator">        
                            <form className="ui form" onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <label>HOI / Month</label>
                                    <input type="number" name="hoi_split" value={this.state.hoi_split} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Tax Rate</label>
                                    <input type="number" name="tax_rate_split" value={this.state.tax_rate_split} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>2x Down Payment</label>
                                    <input type="number" name="down_payment_split" value={this.state.down_payment_split} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Purchase Price</label>
                                    <input type="number" name="price_split" value={this.state.price_split} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Term</label>
                                    <input type="number" name="term_split" value={this.state.term_split} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Mortgage Rate:</label>
                                    <input type="number" name="rate_split" value={this.state.rate_split} onChange={this.handleChange} />
                                </div>

                                <input className="ui black button" type="submit" value="Calculate Split Payments"/>
                            </form>
                        </div>
                        <h3 className='chartHeader'>Monthly Payment 710 Split: ${this.state.calculator_split.monthly_payment / 2 }</h3>
                        <h3 className='chartHeader'>Suggested Income: ${this.state.calculator_split.monthly_payment * 12 * 3.5}</h3>
                    </div> 

                    <div class="nine wide column">
                        <h2 className='chartHeader'>Individual Mortgage</h2>
                        <ChartContainer />
                        <h2 className='chartHeader'>7-10 Split</h2>
                        <ChartContainerSplit />
                    </div>

                </div>

                <div class="ui three column grid">
                    <div className='rates-container'>
                        <div className="mortgage-rates">        
                            <form className="ui form" onSubmit={this.handleSubmit}>
                                <div className="field">
                                <input type="number" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} />
                            </div>
                                <input className="ui black button" type="submit" value="Lookup Current Rates"/>
                            </form>
                        </div>
                        <div className="rates">
                            <h4>10-year: {this.state.mortgageRates.average_rate_10_year}</h4> 
                            <h4>15-year: {this.state.mortgageRates.average_rate_15_year}</h4> 
                            <h4>20-year: {this.state.mortgageRates.average_rate_20_year}</h4> 
                            <h4>30-year: {this.state.mortgageRates.average_rate_30_year}</h4> 
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MortageRates;