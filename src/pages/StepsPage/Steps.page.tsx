/* react */
import { memo } from 'react';
/* hooks */
import { useSteps } from './useSteps.hook';
/* components */
import { AccordionItem } from './AccordionItem';
/* styles */
import StepsStyles from './Steps.module.scss';

function StepsPage() {
    const { accordionList } = useSteps();

    return (
        <main className={StepsStyles.Wrapper}>
            <div className={StepsStyles.List}>
                {accordionList.map((item, index) => (
                    <AccordionItem key={`Frog_${index}`} {...item} />
                ))}
            </div>
        </main>
    );
}

export default memo(StepsPage);
