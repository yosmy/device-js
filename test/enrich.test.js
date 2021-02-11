import {enrich} from '../src';

test('Enrich devices on empty list', () => {
    return enrich.enrichDevices(
        [],
        () => {},
        () => {},
        () => {},
        () => {}
    )
        .then((items) => {
            expect(
                items
            ).toStrictEqual([]);
        })
});

test('Enrich devices on normal list', () => {
    return enrich.enrichDevices(
        [
            {
                type: "type-1",
                device: "device-1"
            },
            {
                type: "type-2",
                device: "device-2"
            }
        ],
        (item) => {
            return item.type === "type-2"
        },
        (item) => {
            return item.device;
        },
        async () => {
            return [
                {
                    id: "device-1",
                    data: {
                        device: {
                            modelName: "Model 1",
                            osInternalBuildId: "Internal 1"
                        }
                    }
                },
                {
                    id: "device-2",
                    data: {
                        device: {
                            modelName: "Model 2",
                            osInternalBuildId: "Internal 2"
                        }
                    }
                }
            ];
        },
        (item, device) => {
            return {
                ...item,
                device: device
            }
        }
    )
        .then((items) => {
            expect(
                items
            ).toStrictEqual([
                {
                    type: "type-1",
                    device: "device-1"
                },
                {
                    type: "type-2",
                    device: {
                        id: "device-2",
                        title: "Model 2 Internal 2",
                    }
                }
            ]);
        })
});