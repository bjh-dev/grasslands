import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    ...,
    overview,
    title,
    pageHeader {
      ...,
      cta {
        ...,
       reference->{
          ...,
          "slug": slug.current
        }
      }
    },
    pageContent[] {
      ...,
    }
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    overview,
    slug,
    title,
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    slug,
    overview,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
   ...,
    menuItems[] {
      ...,
      reference->{
        _type,
        title,
        "slug": slug.current,
      }
    }
  }
`
