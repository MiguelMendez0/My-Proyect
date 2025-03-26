import { useState } from "react";

function Controls() {
    return (
        <div className="container">
            <div className="back">
                <div className="button_shadow">
                    <button>{"<"}</button>
                </div>
            </div>

            <div className="next">
                <div className="button_shadow">
                    <button>{">"}</button>
                </div>
            </div>
        </div>
    );
}
export default Controls;
