import React from "react";
import PropTypes from "prop-types";
import {Container, LinePlaceholder, Text} from "@yosmy/ui";

const Device = ({
    data,
    ...props
}) => {
    const title = !data.corrupted
        ? `${data.device.modelName} ${data.device.osInternalBuildId}`
        : "Corrupted"

    return <Container
        {...props} // key
    >
        <Text>
            {title}
        </Text>
    </Container>
};

const DeviceProps = {
    data: PropTypes.object.isRequired,
};

Device.propTypes = DeviceProps;

const DevicePlaceholder = ({
    ...props
}) => {
    return <LinePlaceholder
        {...props}
    />;
};

const DevicePlaceholderProps = {};

DevicePlaceholder.propTypes = DevicePlaceholderProps;

export {
    Device, DeviceProps,
    DevicePlaceholder, DevicePlaceholderProps
};