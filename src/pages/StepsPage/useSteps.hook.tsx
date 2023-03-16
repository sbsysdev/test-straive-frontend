/* react */
import { useCallback, useEffect, useMemo, useState } from 'react';
/* props */
import { AccordionItemProps } from './AccordionItem';
/* types */
import { SectionListItem } from '@shared/types';
/* serrvices */
import { getSectionsService } from '@services/index';

export function useSteps() {
    /* states */
    const [items, setItems] = useState<SectionListItem[]>([]);
    const [lastOpen, setLastOpen] = useState<number>(-1);

    const handleExpand = useCallback(
        (index: number) => () => {
            if (index < lastOpen) return;

            setLastOpen(index);
        },
        [lastOpen]
    );

    const accordionList = useMemo((): AccordionItemProps[] => {
        return items.map((item, index) => ({
            value: item,
            isAvailable: lastOpen + 1 >= index,
            isLast: index === items.length - 1,
            onExpand: handleExpand(index),
        }));
    }, [items, lastOpen]);

    /* reactivity */
    useEffect(() => {
        const sections = getSectionsService();
        setItems(sections);
    }, []);

    return { accordionList };
}
