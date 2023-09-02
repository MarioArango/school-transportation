import 'server-only'
import { Metadata } from "next"

/**
 * ---------------------------------------------
 * GENERATE DINAMYC METADATA FOR PAGES HEADERS
 * ---------------------------------------------
 */
type OptionsMetadata = {
    title: string
    description: string
    keywords?: string[] | []
    lng: string
}

export function generateCustomMetadata(options: OptionsMetadata): Metadata {
  return  {
    title: options.title,
    description: options.description,
    keywords: options?.keywords,
    applicationName: 'eCarpinteroExpress',
    category: 'technology',
    alternates: {
      languages: {
        [options.lng]: options.lng
      }
    }
  }
}