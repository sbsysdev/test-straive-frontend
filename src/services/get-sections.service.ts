/* types */
import { SectionListItem } from '@shared/types';
/* assets */
import { EggsSrc, FrogletSrc, FrogSrc, TadpolesSrc } from '@assets/index';

export function getSectionsService(): SectionListItem[] {
    return [
        {
            title: {
                value: 'Step 1: Eggs',
            },
            panel: {
                value: 'Frogs begin life as fertilized eggs. Female frogs lay thousands of eggs at one time in a pond. The eggs float on water in a jelly mass or cluster. Soon, the eggs will hatch into tadpoles!',
                image: {
                    src: EggsSrc,
                    title: 'frog eggs in various stages of development, starting with an olive-colored ball and ending with a visible tail',
                },
            },
        },
        {
            title: {
                value: 'Step 2: Tadpoles',
            },
            panel: {
                value: 'When a tadpole hatches, it looks more like a fish than a frog. A tadpole doesn\u0026rsquo;t have any legs. It has gills that allow it to breathe underwater. A tadpole swims, eats and grows for several weeks. Nutrients are stored in the tadpole\u0027s tail, as hind legs begin to grow.',
                image: {
                    src: TadpolesSrc,
                    title: 'tadpoles in various stages of development, ending with an organism with a small frog head with eyes and newly-formed back legs',
                },
            },
        },
        {
            title: {
                value: 'Step 3: Froglet',
            },
            panel: {
                value: 'As a tadpole grows two front legs, its long tail becomes shorter. The tadpole uses stored nutrients as food, so until its tail is completely gone, it doesn\u0026rsquo;t need anything else to eat! When just a little stub of its tail is left, the tadpole has now become a young frog. It can hop right out of the water and onto dry land for the first time.',
                image: {
                    src: FrogletSrc,
                    title: '3 phases of the froglet\u0027s development',
                },
            },
        },
        {
            title: {
                value: 'Step 4: Adult Frog',
            },
            panel: {
                value: 'The frog\u0026rsquo;s tail eventually disappears and the frog will begin eating insects instead of plants from the water. A young frog continues to grow for about 2-4 years until it becomes an adult. Adult frogs then lay their own eggs and more tadpoles hatch and begin the cycle again!',
                image: {
                    src: FrogSrc,
                    title: 'two adult frogs: the left frog is younger and smaller, the right frog is a full-grown adult',
                },
            },
        },
    ];
}
