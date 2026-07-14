import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Best Dog Grooming Services',
    short_name: 'Dog Grooming',
    description: 'Professional dog grooming services in your area',
    start_url: '/dog_grooming_website/',
    display: 'standalone',
    background_color: '#c3dec8',
    theme_color: '#c3dec8',
    icons: [
      {
        src: '/dog_grooming_website/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}