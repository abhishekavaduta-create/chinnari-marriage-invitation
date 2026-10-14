export type Language = 'te' | 'en';

export interface CoupleAndFamily {
  brideName: { te: string; en: string };
  groomName: { te: string; en: string };
  brideFather: { te: string; en: string };
  brideMother: { te: string; en: string };
  groomFather: { te: string; en: string };
  groomMother: { te: string; en: string };
  hosts: { te: string; en: string };
  hostRelation: { te: string; en: string };
}

export interface ExtendedFamilyMember {
  id: string;
  names: {
    en: string;
    te: string;
  };
}

export type EventId = 'engagement' | 'haldi' | 'marriage';

export interface CalendarEventData {
  title: string;
  description: string;
  location: string;
  startIso: string; // e.g. 2026-11-01T11:15:00+05:30
  endIso: string;   // e.g. 2026-11-01T14:00:00+05:30
  startUtc: string; // 20261101T054500Z
  endUtc: string;   // 20261101T083000Z
}

export interface WeddingEvent {
  id: EventId;
  icon: string;
  titleKey: string;
  tagKey: string;
  dateKey: string;
  timeKey: string;
  lagnaKey?: string;
  venueNameKey: string;
  venueAddressKey: string;
  mapsUrl: string;
  hasVerifiedDirections: boolean;
  calendarData: CalendarEventData;
}
