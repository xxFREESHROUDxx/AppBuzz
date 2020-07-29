import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

export const Darktoggle = ({checked, onClick}) =>{
    return(
        <BootstrapSwitchButton
        checked={checked}
        onlabel='Light'
        offlabel='Dark'
        onChange={onClick}
        width={60}
        onstyle="outline-primary"
        offstyle="outline-dark"
    />
    );
}