import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Device, DevicePlaceholder} from "./Device";

const ShowDevice = ({
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
        {device === null
            ? <DevicePlaceholder/>
            : <Device
                data={device.data}
            />
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

ShowDevice.propTypes = Props;

export default ShowDevice;