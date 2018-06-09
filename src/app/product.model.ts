export interface Product{
    groupName: string;
    rating: number;
    deviceSummary: [
        {
            deviceId: number;
            displayName: string;
            displayDescription: string;
            colourName: string;
            colourHex: string;
            memory: string;
            leadPlanId: number;
            merchandisingMedia: [
                {
                    id: number;
                    value: string;
                }
            ],
            priceInfo: {
                bundlePrice: {
                    bundleId: number;
                    monthlyPrice: {
                        gross: number;
                        net: number;
                        vat: number;
                    },
                    monthlyDiscountPrice: {
                        gross: number;
                        net: number;
                        vat: number;
                    }
                },
                hardwarePrice: {
                    hardwareId: number;
                    oneOffPrice: {
                        gross: number;
                        net: number;
                        vat: number;
                    },
                    oneOffDiscountPrice: {
                        gross: number;
                        net: number;
                        vat: number;
                    }
                }
            }
        }
    ]
}