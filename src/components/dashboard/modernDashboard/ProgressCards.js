import React from 'react';
import { Row } from 'reactstrap';

import ProgressCardsData from './ProgressCardsData';

const ProgressCards = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Reviews                                                 */
    /*--------------------------------------------------------------------------------*/
    <Row>
      <ProgressCardsData
        title= "Today"
        income="120"
        icon= "arrow-down-short"
        pColor="success"
      />
      <ProgressCardsData
        title= "Yesterday"
        income="5,000"
        icon= "arrow-up-short"
        pColor="primary"
      />
      <ProgressCardsData
        title= "This Month"
        income="8,000"
        icon= "arrow-up-short"
        pColor="info"
      />
      <ProgressCardsData
        title= "Last Month"
        income="12,000"
        icon= "arrow-down-short"
        pColor="danger"
      />
    </Row>
  );
};

export default ProgressCards;
