import React from "react";
import './styleComponent/standardInput.css'

export default function StandardInput({message, label, color, border, backgroundColor, displayText, textContent, colorLabel, paddingPlaceHolder, myIcon, pdTop, pdLeft, pdRigth, value, myWidth}){

    const styleButton = {
        borderColor: String(color),
        color: String(color),
        border: String(border),
        backgroundColor: String(backgroundColor),
        padding: String(paddingPlaceHolder)
    }

    const textElement = {
        color: String(color),
        display: String(displayText)
    }

    const colorLabel1 = {
        color: String(colorLabel)
    }

    const iconStyle = {
        position: 'absolute',
        top: String(pdTop),
        left: String(pdLeft),
        rigth: String(pdRigth),
        color: String(color)
    }

    const widthStyle = {
        width: String(myWidth)
    }

    return (
        <div className="row col-md-4 fullWidth align-items-center" style={widthStyle}>
            <p className="message_label col-12">{message}</p>
            <label className="standardLabel col-12" style={colorLabel1}>{label}</label>
            <div className="div_input p-0">
                <i className={myIcon} style={iconStyle}></i>
                <input type="text" className="standardInput col-md-12" style={styleButton} placeholder="Placeholder" value={value} readOnly></input>
            </div>
            <p className="someText" style={textElement}>{textContent}</p>
        </div>
    );
}