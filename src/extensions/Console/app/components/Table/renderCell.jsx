import React from 'react';
import { TwoLineTableCell } from 'azure-devops-ui/Table';

import { Pill, PillSize, PillVariant } from 'azure-devops-ui/Pill';

export const renderCell = (
  rowIndex,
  columnIndex,
  tableColumn,
  tableItem,
) => (
  <TwoLineTableCell
    columnIndex={columnIndex}
    className="fontWeightSemiBold fontSizeM scroll-hidden"
    key={`col-${columnIndex}`}
    tableColumn={tableColumn}
    line1={<span className="fontSizeM text-ellipsis">{tableItem.name}</span>}
    line2={
      <Pill
        size={PillSize.compact}
        variant={PillVariant.colored}
        onClick={() => alert(tableItem.webUrl)}
      >
        {tableItem.webUrl}
      </Pill>
      }
  />
);
