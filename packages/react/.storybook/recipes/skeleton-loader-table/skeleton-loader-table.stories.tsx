import * as React from 'react';
import { PdsTable } from '../../../src/lib/components/table/table';
import { PdsSkeletonLoader } from '../../../src/lib/components/skeleton-loader/skeleton-loader';

export default {
  title: 'Recipes/Skeleton loader table',
  component: 'skeleton-loader-table',
  parameters: {
    options: { showPanel: false },
  },
  tags: ['autodocs'],
  argTypes: null,
};

export const Default = () => (
  <PdsTable>
    <table>
      <thead>
        <tr>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
        </tr>
        <tr>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
        </tr>
        <tr>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
        </tr>
        <tr>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
          <td aria-label="loading">
            <PdsSkeletonLoader />
          </td>
        </tr>
      </tbody>
    </table>
  </PdsTable>
);
