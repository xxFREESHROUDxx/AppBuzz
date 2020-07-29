import React from "react";
import loader from "../../loader.gif";
export const Loading = ({ loading }) => (loading ? <div className="app-loader">
    <img src={loader} />
</div> : null);
