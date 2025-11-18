export interface FaqItem {
  question: string;
  answer: string;
}

export interface StepItem {
  label: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}