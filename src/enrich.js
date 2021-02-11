import PropTypes from "prop-types";

const DeviceProp = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
        data: PropTypes.object.isRequired,
    })
]);

const enrichDevices = async (items, filter, pick, collect, enrich) => {
    if (items.length === 0) {
        return items;
    }

    const ids = items
        .filter(filter)
        .map(pick);

    const devices = await collect(ids);

    items = items.map((item) => {
        if (!filter(item)) {
            return item;
        }

        const device = devices.find((device) => {
            return device.id === pick(item);
        });

        return enrich(
            item,
            {
                id: device.id,
                data: device.data,
            }
        );
    })

    return items;
};

export default {
    DeviceProp,
    enrichDevices
}