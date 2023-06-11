import { memo } from 'react';
import { PageWithNavigation } from '@components';
import { ValidationDescription } from './ValidationDescription';
import { ObservationDescription } from './ObservationDescription';
import { InitializationDescription } from './InitializationDescription';
import { PresentationDescription } from './PresentationDescription';

const Examples = memo(() => (
  <PageWithNavigation>
    <ValidationDescription />
    <ObservationDescription />
    <InitializationDescription />
    <PresentationDescription />
  </PageWithNavigation>
));

export default Examples;
