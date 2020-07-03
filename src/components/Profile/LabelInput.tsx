import React from "react"
import "../../assets/styles/App.css";
import "../../assets/styles/Profile.css";

type Props = {
    label: string;
    defaultValue?: string;
    type?: string;
    style?: object;
}
export const LabelInput: React.FC<Props> = (props) => {
    const { label, defaultValue, type, style } = props
    return (
        <div style={style}>
            <div className="d-flex" style={{ flexFlow: "row wrap" }}>
                <div className="profile-input-label content-text-small my-auto">{label}</div>
                <div className="profile-input-container my-auto" >
                    <input type={type || "text"} defaultValue={defaultValue}
                        required className="profile-input" />
                </div>
            </div>
        </div>
    )
}