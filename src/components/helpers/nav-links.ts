import {cva} from 'class-variance-authority'

export const links = [
  {id: 1, url: '/', text: 'home'},
  {id: 2, url: '/about', text: 'about'},
]

export const linksWithDashBoard = [
  {id: 1, url: '/dashboard', text: 'home'},
  {id: 2, url: '/about', text: 'about'},
]

export const navLink = cva(
  'capitalize mx-4 px-3 py-2 rounded-md transition font-medium text-lg',
  {
    variants: {
      active: {
        true: 'bg-primary text-primary-foreground',
        false: 'hover:bg-muted',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)
