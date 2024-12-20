import { sentence } from 'txtgen';

import {
  CallDirectionType,
  HistoryRow,
  PhoneType,
  PriorityType,
} from '../types/history';
import { UserRow } from '../types/user';
import { getRandomIntBetween } from '../utils/number';

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
      const duration = getRandomIntBetween(0, 60);

      return {
        id: historyId,
        direction: CallDirectionType.INCOMING,
        duration: duration,
        phone: '09xxxxx123',
        phoneType: PhoneType.TELEPHONE,
        company: 'Guest',
        authorName: 'DyNamite',
        regDate: Date.now(),
        priority: PriorityType.NORMAL,
        assignedName: 'Michael',
        subject: randomSubject,
        content: '',
      };
    });
};

export const ALL_MEMBERS = generateUsers();
export const ALL_CALL_HISTORIES = generateCallHistories();
