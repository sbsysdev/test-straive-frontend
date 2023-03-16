/* react */
import { forwardRef, memo } from 'react';
/* props */
import { AccordionLayoutProps } from './Accordion.props';
/* utils */
import { classNames, content } from '@shared/utils';
/* styles */
import AccordionStyles from './Accordion.module.scss';

const AccordionLayout = forwardRef<HTMLDivElement, AccordionLayoutProps>(
    ({ className, header, body, isBodyVisible, ...rest }, ref) => {
        return (
            <div className={classNames(AccordionStyles.Wrapper, className)} ref={ref} {...rest}>
                {content(header, { slot: 'header' })}

                {content(body, { slot: 'body', visible: isBodyVisible })}
            </div>
        );
    }
);

export default memo(AccordionLayout);
