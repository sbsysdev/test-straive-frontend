/* react */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* types */
import { Slot } from '@shared/types';

export interface ContentProps {
    slot: 'header' | 'body';
    visible?: boolean;
}

export interface AccordionLayoutProps
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        'ref' | 'children'
    > {
    header?: Slot<ContentProps>;
    body?: Slot<ContentProps>;
    isBodyVisible?: boolean;
}
