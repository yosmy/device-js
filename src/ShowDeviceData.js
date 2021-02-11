import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Json, LinePlaceholder} from "@yosmy/ui";

const ShowDeviceData = ({
    ui, api, id
}) => {
    const [device, setDevice] = useState(null);

    useEffect(() => {
        api.gatherDevice(
            id,
            (device) => {
                setDevice(device);
            }
        );
    }, [api]);

    return <ui.layout>
        {!device
            ? <LinePlaceholder />
            : <Json>
                {device.data}
            </Json>
        }
    </ui.layout>
};

export const Props = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
    }).isRequired,
    api: PropTypes.shape({
        gatherDevice: PropTypes.func.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired
};

ShowDeviceData.propTypes = Props;

export default ShowDeviceData;