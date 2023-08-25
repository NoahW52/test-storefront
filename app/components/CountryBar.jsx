import React from "react";

export default function CountryBar({ country }) {
    return(
        <div className="topbar">
            <span>
                <img
                    style={{
                        width: 20,
                        height: 20
                    }}
                    src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>
            </span>
        </div>
    )
}