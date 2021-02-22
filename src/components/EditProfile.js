import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'

export default function EditProfile({user, updateProfile, fetchModels, handleToggle}) {
    const [budget, setBudget] = useState('')
    const [currentRent, setCurrentRent] = useState('')
    const [income, setIncome] = useState('')
    const [occupation, setOccupation] = useState('')
    const [lease_end, setLeaseEnd] = useState('')
    const [marital_status, setMaritalStatus] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        updateProfile(user, budget, currentRent, income, occupation, lease_end, marital_status)
        fetchModels()
    }

    return(
    <div>
        <div className="profile-card">
            <div className="column">
                <div className="ui two column centered grid">
                    <div className="ui card">
                        <img className="ui medium circular image" src={user.picture} alt=""></img>
                            <div className="content">
                                <form className='ui form' onSubmit={handleSubmit}>

                                    <div className="field">
                                    <label>Budget: {user.budget}</label>
                                        <select onChange={e => setBudget(e.target.value)}>
                                            <option value=''>Edit Budget</option>
                                            <option value="$299,999">$200,000 - $299,999</option>
                                            <option value="$399,999">$300,000 - $399,999</option>
                                            <option value="$499,999">$400,000 - $499,999</option>
                                            <option value="$599,999">$500,000 - $599,999</option>
                                            <option value="$699,999">$600,000 - $699,999</option>
                                            <option value="$799,999">$700,000 - $799,999</option>
                                            <option value="$899,999">$800,000 - $899,999</option>
                                            <option value="$999,999">$900,000 - $999,999</option>
                                            <option value="$2,999,999">$999,999+</option>
                                        </select>
                                    </div>
                                    
                                    <div className="field">
                                    <label>Rent: {user.current_rent}</label>
                                        <select onChange={e => setCurrentRent(e.target.value)}>
                                            <option value=''>Edit Rent</option>
                                            <option value="$600 - $699">$600 - $699</option>
                                            <option value="$700 - $799">$700 - $799</option>
                                            <option value="$800 - $899">$800 - $899</option>
                                            <option value="$900 - $999">$900 - $999</option>
                                            <option value="$1,000 - $1,099">$1,000 - $1,099</option>
                                            <option value="$1,100 - $1,199">$1,100 - $1,199</option>
                                            <option value="$1,200 - $1,299">$1,200 - $1,299</option>
                                            <option value="$1,300 - $1,399">$1,300 - $1,399</option>
                                            <option value="$1,400 - $1,499">$1,400 - $1,499</option>
                                            <option value="$1,500+">$1,500+</option>
                                        </select>
                                    </div>

                                    <div className="field">
                                    <label>Income: {user.income}</label>
                                        <select onChange={e => setIncome(e.target.value)}>
                                            <option value=''>Edit Income</option>
                                            <option value="$30,000 - $59,999">$30,000 - $59,999</option>
                                            <option value="$60,000 - $99,999">$60,000 - $99,999</option>
                                            <option value="$100,000 - $149,999">$100,000 - $149,999</option>
                                            <option value="$150,000+">$150,000+</option>
                                        </select>
                                    </div>

                                    <div className="field">
                                    <label>Marital Status: {user.marital_status}</label>
                                        <select onChange={e => setMaritalStatus(e.target.value)}>
                                            <option value=''>Edit Marital Status</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widowed">Widowed</option>
                                            <option value="Separated">Separated</option>
                                        </select>
                                    </div>

                                    <div className='field'>
                                        <label>Occupation: {user.occupation}</label>
                                        <input type='text' name='occupation' value={occupation} onChange={e => setOccupation(e.target.value)} />
                                    </div>

                                    <div className='field'>
                                        <label>Lease End Date: {user.lease_end}</label>
                                        <input type='text' name='leaseEnd' value={lease_end} onChange={e => setLeaseEnd(e.target.value)} />
                                    </div>

                                    <input className='ui black button' type='submit' id='submit' value='Submit' />
                                    <button className='ui green button' onClick={handleToggle}>Go Back</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}