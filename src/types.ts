export interface RsvpFormData {
  fullName: string;
  designation: string;
  companyName: string;
  industry: string;
  workEmail: string;
  phone: string;
  dietary: string;
  specialRequests?: string;
  topicsOfInterest: string[];
}

export interface Ticket {
  ticketId: string;
  formData: RsvpFormData;
  timestamp: string;
  status: 'Confirmed' | 'Waitlisted';
  seatNumber: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  speakerTitle?: string;
  category: 'Keynote' | 'Strategy' | 'Networking' | 'Arrival';
}

export interface TopicDetail {
  id: string;
  topicNumber: number;
  title: string;
  speaker?: string;
  strikethroughText?: string;
  subtitle: string;
  description: string;
  keyTakeaways: string[];
  speakers?: {
    name: string;
    role: string;
    company: string;
  }[];
}
