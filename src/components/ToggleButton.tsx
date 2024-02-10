import { useState, useEffect } from "react";

type Switch = {
    action: (state: boolean) => void;
};

function Switch({ action }: Switch) {
    const [status, setStatus] = useState(false);
    function toggleStatus() {
        setStatus((status) => !status);
    }

    useEffect(() => {
        action(status);
    }, [status]);
    return (
        <div
            className={status ? "switch is-active" : "switch"}
            onClick={toggleStatus}
        >
            <div className="switch-circle"></div>
        </div>
    );
}

export default Switch;
