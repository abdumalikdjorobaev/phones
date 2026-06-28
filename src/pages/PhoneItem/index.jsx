import React from "react";

export const PhoneItem = ({ item }) => {
    return (
        <div className="todo_item">
            <div style={{ width: "100%" }}>
                <div className="phones">
                    <div className="phone">{item?.phone || "No Phone"}</div>
                    <div className="phone">{item?.date || "No Date"}</div>
                    <div className="phone">{item?.price || "No Price"}</div>
                </div>
            </div>
        </div>
    );
};