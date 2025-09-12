export type ItemId = 'wegovy' | 'mounjaro';

export type Availability = 'available' | 'unavailable' | 'unknown';

export interface Item {
  id: ItemId;
  displayNameKo: string;
  color: string;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  mapPosition: { 
    top: string;
    left: string;
  };
  geohash: string;
  district: string;
  phone?: string;
  website?: string;
  status: {
    wegovy: Availability;
    mounjaro: Availability;
  };
  price: {
    wegovy?: number;
    mounjaro?: number;
  };
  lastUpdated: string;
  confidenceScore: number;
}

export interface Report {
  id: string;
  clinicId: string;
  clinicName: string;
  item: ItemId;
  availability: 'available' | 'unavailable';
  priceKRW?: number;
  note?: string;
  reportedBy: string;
  reportedAt: string;
  _date: Date;
  sourceType: 'phone' | 'visit' | 'sms' | 'kakao' | 'other';
  verification: 'unverified' | 'community-verified' | 'admin-verified';
  votes: number;
}

export interface CommunityPost {
    id: string;
    title: string;
    author: string;
    createdAt: string;
    _date: Date;
    votes: number;
    commentsCount: number;
    category: string;
    content: string;
}
