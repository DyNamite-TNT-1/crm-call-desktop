import { sentence } from 'txtgen';

import { HistoryRow } from '../types/history';
import { UserRow } from '../types/user';

const generateUsers = (): UserRow[] => {
  return Object.values({
    mem1: {
      id: 'mem1',
      avatarSrc: '',
      userName: 'DyNamite',
      company: 'Hanbiro',
      phone: '09xxxxxx72',
    },
  });
};

const generateCallHistories = (): HistoryRow[] => {
  return Array(50)
    .fill(0)
    .map((e, pIndex: number) => {
      const historyId = `history_${pIndex}`;
      const randomSubject = sentence();

      return {
        id: historyId,
        customerId: 'mem1',
        subject: randomSubject,
        authorName: 'Author',
      };
    });
};

export const ALL_MEMBERS = generateUsers();
export const ALL_CALL_HISTORIES = generateCallHistories();
