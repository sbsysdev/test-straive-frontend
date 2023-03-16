/* react */
import { memo, useCallback, useRef } from 'react';
/* props */
import { AccordionItemProps } from './AccordionItem.props';
/* hooks */
import { useActive } from '@shared/hooks';
/* layouts */
import { AccordionLayout } from '@shared/layouts';
/* components */
import { Icon } from '@shared/components';
/* utils */
import { classNames } from '@shared/utils';
/* assets */
import { mdiChevronDown, mdiChevronUp, mdiLock } from '@mdi/js';
/* styles */
import AccordionItemStyles from './AccordionItem.module.scss';

function AccordionItem({ value, isAvailable, onExpand, isLast }: AccordionItemProps) {
    const [isExpanded, , , toggleExpanded] = useActive(false);

    const ref = useRef<HTMLDivElement>(null);

    const handleExpand = useCallback(() => {
        if (!isAvailable) return;

        toggleExpanded();

        if (typeof onExpand === 'function') onExpand();
    }, [toggleExpanded, isAvailable, onExpand]);

    return (
        <AccordionLayout
            className={classNames(
                AccordionItemStyles.Wrapper,
                !isLast && AccordionItemStyles.Underlined
            )}
            isBodyVisible={isExpanded}
            header={(props) => (
                <header
                    className={classNames(isAvailable && AccordionItemStyles.Available)}
                    title={value.title.value}
                    onClick={handleExpand}
                    {...props}>
                    <h2>{value.title.value}</h2>

                    <button
                        onKeyDown={(event) =>
                            (event.code === 'Space' || event.code === 'Enter') && handleExpand
                        }
                        className={classNames(isAvailable && AccordionItemStyles.Available)}>
                        <i>
                            <Icon
                                path={
                                    isAvailable
                                        ? isExpanded
                                            ? mdiChevronUp
                                            : mdiChevronDown
                                        : mdiLock
                                }
                            />
                        </i>
                    </button>
                </header>
            )}
            body={(props) => (
                <div
                    slot={props?.slot}
                    style={{
                        maxHeight: props?.visible ? ref.current?.offsetHeight : 0,
                    }}>
                    <section ref={ref}>
                        <figure title={value.panel.image.title}>
                            <img src={value.panel.image.src} alt={value.panel.image.title} />

                            <figcaption>{value.panel.image.title}</figcaption>
                        </figure>

                        <p>{value.panel.value}</p>
                    </section>
                </div>
            )}
        />
    );
}

export default memo(AccordionItem);
