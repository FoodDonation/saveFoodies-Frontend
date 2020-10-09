import React, { Component } from "react";

export default class AddBeneficiary extends Component {
    render() {
        return (
            <form>
                <h3>Add Beneficiary</h3>

                <div className="form-group">
                    <label>Name of Organization / Orphanage</label>
                    <input type="text" className="form-control" placeholder="Organization / Orphanage" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}