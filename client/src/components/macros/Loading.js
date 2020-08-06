import React from "react";
import loader from "../../loadersm.gif";
export const Loading = ({ loading }) => (loading ? <div className="app-loader">
    <img src={loader} alt="Loding----"/>
</div> : null);
