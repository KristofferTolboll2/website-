import React, { ReactElement } from 'react'
import * as _ from 'lodash'
import { Badge } from '@chakra-ui/layout'
interface Props {
    badgeType: "personal" | "tech"
}


const getBadgeColor = (badgeType: Props['badgeType']) => {
    switch (badgeType) {
        case "personal":
            return "yellow"
        case "tech":
            return "green"
        default:
            return "badge-primary"
    }
}

export default function HighLightBadge({badgeType}: Props): ReactElement {
    const badgeColor = getBadgeColor(badgeType);
    const badgeText = _.upperFirst([badgeType].toString())
    return (
        <span>
            <Badge ml="1" colorScheme={badgeColor}>
                {badgeText}
            </Badge>
        </span>
    )
}
