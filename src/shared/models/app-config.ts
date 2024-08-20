export interface AppConfig {
  navItems: NavItem[];
  annualReports: Report[];
  link: KeyValue;
  email: KeyValue;
  phone: KeyValue;
}

interface KeyValue {
  [key: string]: string;
}

interface NavItemProps {
  id: string;
  path: string;
  name: string;
  external: boolean;
}

interface NavItem extends NavItemProps {
  children?: NavItemProps[];
}

export interface Report {
  id: number;
  year: number;
  thumbnail: string;
  title: string;
  description?: string;
  link: string;
  latest?: boolean;
}

export interface Story {
  id: number;
  title: string;
  preview: string;
  followup: string;
  path: string;
  thumbnail: {
    src: string;
    position: string;
    credits?: {
      text: string;
      twBgColorClass?: string;
      twTextColorClass?: string;
    };
  };
}
