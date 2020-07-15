import React from 'react';

import Table from './Table';
import data from '../../data/people';

const Stats = () => (
  <div>
    <Table
      data={data}
    />
  </div>
);

export default Stats;
