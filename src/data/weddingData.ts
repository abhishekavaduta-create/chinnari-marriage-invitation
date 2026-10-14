import { WeddingEvent, ExtendedFamilyMember } from '../types/wedding';

export const DEITY_IMAGE_URL = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/assets/sri_lakshmi_narasimha_swamy.png`;

export const MANDAPAM_IMAGE_URL = "https://lh3.googleusercontent.com/aida/AEtjO1VprqN-QJUM7TeJTlhueELDDe9JoD51FYeMk5Ufw_-wGPDK_FbEnqhWpk9s-zFUo052MpnZ8WR7ImWLslr2Y9Ehc-x7-gvnBqlM3ztZTAKdsn8-SBUSVzBXquosR475ebQs-VOX_skUa5qciRcBDbD0rBplT8FsGmNEMyL4WDHqPg43fQDTDLEj4QM12jSO_O8d-0YuCip46aAicsxN4YJWzOy0E9Ty9UvnHcX5WT96kkY15oIbxxY9d16x";

export const WEDDING_MUHURTHAM_ISO = "2026-11-15T09:58:00+05:30";

export const weddingEvents: WeddingEvent[] = [
  {
    id: 'engagement',
    icon: '💍',
    titleKey: 'event_engagement_title',
    tagKey: 'event_engagement_tag',
    dateKey: 'engagement_date',
    timeKey: 'engagement_time',
    venueNameKey: 'engagement_venue_name',
    venueAddressKey: 'engagement_venue_address',
    mapsUrl: 'https://maps.app.goo.gl/YhbybkXombgG2kgM9?g_st=ac',
    hasVerifiedDirections: true,
    calendarData: {
      title: 'Engagement Ceremony - Avaduta Dhanlaxmi & Punna Shekar',
      description: 'Engagement ceremony at Peddabomma Residence, Padmashali Township, Dammaiguda',
      location: 'Peddabomma Residence, Padmashali Township, Dammaiguda, Hyderabad',
      startIso: '2026-11-01T11:15:00+05:30',
      endIso: '2026-11-01T14:00:00+05:30',
      startUtc: '20261101T054500Z',
      endUtc: '20261101T083000Z'
    }
  },
  {
    id: 'haldi',
    icon: '🌼',
    titleKey: 'event_haldi_title',
    tagKey: 'event_haldi_tag',
    dateKey: 'haldi_date',
    timeKey: 'haldi_time',
    venueNameKey: 'haldi_venue_name',
    venueAddressKey: 'haldi_venue_address',
    // Search location query for Family Residence at Aliyabad without hallucinated shortlink
    mapsUrl: 'https://maps.google.com/?q=18-3-747+Aliyabad+Hyderabad+500053',
    hasVerifiedDirections: true,
    calendarData: {
      title: 'Haldi & Mangala Snanam - Avaduta Dhanlaxmi & Punna Shekar',
      description: 'Haldi and Mangala Snanam ceremonies at Family Home, Aliyabad',
      location: '18-3-747, Beside Sanjeev Prasad Hospital, Aliyabad, Hyderabad – 500053, Telangana',
      startIso: '2026-11-13T16:00:00+05:30',
      endIso: '2026-11-13T19:00:00+05:30',
      startUtc: '20261113T103000Z',
      endUtc: '20261113T133000Z'
    }
  },
  {
    id: 'marriage',
    icon: '🪔',
    titleKey: 'event_marriage_title',
    tagKey: 'event_marriage_tag',
    dateKey: 'marriage_date',
    timeKey: 'marriage_time',
    lagnaKey: 'marriage_lagna',
    venueNameKey: 'marriage_venue_name',
    venueAddressKey: 'marriage_venue_address',
    mapsUrl: 'https://maps.app.goo.gl/cZ127p1HYurSvWrdA?g_st=ac',
    hasVerifiedDirections: true,
    calendarData: {
      title: 'Kalyana Mahotsavam (Marriage) - Avaduta Dhanlaxmi & Punna Shekar',
      description: 'Sumuhurtham: 9:58 AM (Vrischika Lagna Pushkaramsha Sumuhurtham) at Sri Venkateswara Temple, Laldarwaza',
      location: 'Sri Venkateswara Swamy Devasthanam, Laldarwaza, Hyderabad – 500053, Telangana',
      startIso: '2026-11-15T09:58:00+05:30',
      endIso: '2026-11-15T14:00:00+05:30',
      startUtc: '20261115T042800Z',
      endUtc: '20261115T083000Z'
    }
  }
];

export const extendedFamilyMembers: ExtendedFamilyMember[] = [
  {
    id: 'macha',
    names: {
      en: 'Macha Laxmi Narsimha & Macha Susheela',
      te: 'మాచ లక్ష్మీ నరసింహ & మాచ సుశీల'
    }
  },
  {
    id: 'jindam',
    names: {
      en: 'Jindam RamaLingam & Jindam Vijaya',
      te: 'జిందం రామలింగం & జిందం విజయ'
    }
  },
  {
    id: 'dontha',
    names: {
      en: 'Dontha Naesh & Dontha Vanitha',
      te: 'దొంత నయేష్ & దొంత వనిత'
    }
  },
  {
    id: 'kalyana',
    names: {
      en: 'Kalyana Darshan & Kalyana Padmini',
      te: 'కల్యాణ దర్శన్ & కల్యాణ పద్మిని'
    }
  },
  {
    id: 'mangalapalli',
    names: {
      en: 'Mangalapalli Chandra Mohan & Mangapalli Srikala',
      te: 'మంగళపల్లి చంద్ర మోహన్ & మంగపల్లి శ్రీకళ'
    }
  },
  {
    id: 'boga',
    names: {
      en: 'Boga Vikram & Boga Chandrika',
      te: 'బోగ విక్రమ్ & బోగ చంద్రిక'
    }
  }
];
