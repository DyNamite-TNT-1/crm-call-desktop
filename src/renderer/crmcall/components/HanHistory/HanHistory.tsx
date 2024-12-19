import { ALL_CALL_HISTORIES } from '@renderer/crmcall/Samples/sample';
import HanHistoryHeader from './HanHistoryHeader';
import { List, ListItem } from '@mui/material';
import HistoryItemView from './HistoryItemView/HistoryItemView';

const _col_max = 16;
const _colSizeNum = [5, 2, 2.5, 6.5];
export const historyColSize = _colSizeNum.map(
  (c) => `${(c / _col_max) * 100}%`,
);

export const historyHeaderHeight = 50;

const HanHistory = () => {
  return (
    <div className="h-flex-col h-fill-h h-fill-w">
      <HanHistoryHeader colSize={historyColSize} />
      <List
        sx={{
          height: `calc(100% - ${historyHeaderHeight}px)`,
          overflow: 'auto',
        }}
      >
        {ALL_CALL_HISTORIES.map((e, index) => {
          return (
            <ListItem key={e.id ?? index} disablePadding>
              <HistoryItemView history={e} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default HanHistory;
