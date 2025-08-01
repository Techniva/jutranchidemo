// Navigation types
export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

// News and Events types
export interface NewsItem {
  id: string
  title: string
  description: string
  date: string
  category?: string
}

export interface EventItem {
  id: string
  title: string
  description: string
  date: string
  location?: string
  category?: string
}

// Program types
export interface Program {
  id: string
  title: string
  degree: string
  description: string
  specializations: string[]
  color: string
}

// Feature types
export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

// Stats types
export interface Stat {
  value: string
  label: string
} 