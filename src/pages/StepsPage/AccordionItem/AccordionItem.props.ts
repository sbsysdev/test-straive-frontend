/* types */
import { SectionListItem } from '@shared/types';

export interface AccordionItemProps {
    value: SectionListItem;
    isAvailable?: boolean;
    onExpand?: () => void;
    isLast?: boolean;
}
