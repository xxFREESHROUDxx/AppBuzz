import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../macros/Loading";
const Convert = () => {
    const [loading, setLoading] = useState(true);
    const [from, setFrom] = useState('AED');
    const [to, setTO] = useState('AED');
    const [amount, setAmount] = useState('');
    const [countryRates, setCR] = useState([]);
    const [data, setData] = useState('');

    useEffect(() => {
        Data();
    }, []);

    async function Data() {
        setLoading(true);
        await axios({
            method: 'get',
            url: `https://v1.nocodeapi.com/xxfreeshroudxx/cx/cRuvAfBLrqlMKyBY/rates`,
        }).then(function (response) {
            // handle success
            setCR(response.data.rates);
            localStorage.setItem("currencyData", JSON.stringify(response.data.rates))
            //    const info = {
            //        date: response.data.date,
            //        timestamp:response.data.timestamp
            //    }
        }).catch(function (error) {
            setCR(JSON.parse(localStorage.getItem("currencyData")));

            // handle error
            console.log(error);
            if (!localStorage.getItem("currencyData")) {

                setTimeout(() => {
                    alert("Couldn't find required data for currency.")
                }, 5000)
            }
        })
        if (!!localStorage.getItem("currencyData")) {
            setLoading(false);
        }
    }
    async function Convert() {
        await axios({
            method: 'get',

            url: `https://v1.nocodeapi.com/xxfreeshroudxx/cx/cRuvAfBLrqlMKyBY/rates/convert?amount=${amount}&from=${from}&to=${to}
`,
        }).then(function (response) {
            // handle success
            setData(response.data);
            console.log(response);
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    const assignFrom = (event) => {
        setFrom(event.target.value);
    }
    const assignTo = (event) => {
        setTO(event.target.value);
    }
    const assignAmnt = (event) => {
        setAmount(event.target.value);
    }
    const convertF = (e) => {
        e.preventDefault();
        Convert();
    }


    return (
        <div className="container-fluid">
            <Loading loading={loading} />
            <form onSubmit={convertF}>
                <div className="form-group">
                    <label>From</label>
                    <select onChange={assignFrom} value={from} className="form-control">
                        {Object.keys(countryRates).map((key, i) => <option value={key} key={i}>{key}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label>To</label>
                    <select onChange={assignTo} value={to} className="form-control">
                        {Object.keys(countryRates).map((key, i) => <option value={key} key={i}>{key}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" className="form-control" value={amount} onChange={assignAmnt} />
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-dark btn-block" value="Convert" />
                </div>
            </form>
            <h4>{data.text || ""}</h4>
        </div>
    )
}
export default Convert;