import { html } from 'lit';
import './skeleton-loader-table';
import '../../../src/lib/components/table/table';
import '../../../src/lib/components/skeleton-loader/skeleton-loader';

export default {
  title: 'Recipes/Skeleton loader table',
  component: 'skeleton-loader-table',
  tags: ['autodocs'],
};

export const Default = () =>
  html`<skeleton-loader-table>
    <pds-table>
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
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
          </tr>
          <tr>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
          </tr>
          <tr>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
          </tr>
          <tr>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
            <td><pds-skeleton-loader></pds-skeleton-loader></td>
          </tr>
        </tbody>
      </table> </pds-table
  ></skeleton-loader-table>`;
