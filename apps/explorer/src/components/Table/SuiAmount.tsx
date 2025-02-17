// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useFormatCoin } from '@mysten/core';
import { SUI_TYPE_ARG } from '@mysten/sui.js';

import { Text } from '~/ui/Text';

export function SuiAmount({
    amount,
}: {
    amount?: bigint | number | string | null;
}) {
    const [formattedAmount, coinType] = useFormatCoin(amount, SUI_TYPE_ARG);
    if (!amount) return <Text variant="bodySmall/medium">--</Text>;

    return (
        <div className="leading-1 flex items-end gap-0.5">
            <Text variant="bodySmall/medium">{formattedAmount}</Text>
            <Text variant="captionSmall/normal" color="steel-dark">
                {coinType}
            </Text>
        </div>
    );
}
