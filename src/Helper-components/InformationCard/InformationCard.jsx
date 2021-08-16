import React from 'react'
import { RiSurgicalMaskFill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

import "./InformationCard.scss";

function Information_card() {
    return (
        <div className="info_card_container">
            <div className="info_card">
                <RiSurgicalMaskFill className="mask" />
                <div className="text_contains">
                    It is recommended to wear Mask
                </div>
            </div>
            <div className="info_card">
                <FaHome className="mask" />
                <div className="text_contains">
                    Member of sensitive groups must stay Indoors
                </div>
            </div>
            <div className="info_card">
                <AiFillPlusCircle className="mask" />
                <div className="text_contains">
                   Long term exposure to air can lead to health issues
                </div>
            </div>

        </div>
    )
}

export default Information_card
