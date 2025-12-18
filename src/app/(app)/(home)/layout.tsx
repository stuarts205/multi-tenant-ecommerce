import React from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { SearchFilters } from './search-filter'
import configPromise from '@payload-config'
import { getPayload } from'payload'
import { Category } from '@/payload-types'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = async ({ children }: LayoutProps) => {
  const payload = await getPayload({
    config: await configPromise,
  })

  const data =await payload.find({
    collection: 'categories',
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false
      }
    }
  })

  const formattedData = data.docs.map((doc: any) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc: Category) => ({
      ...doc,
      subcategories: undefined,
    }))
  }))

  console.log({
    data,
    formattedData
  })

  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <SearchFilters data={data} />
        <div className='flex-1 bg-[#F4F4F0]'>
          {children}
        </div>        
        <Footer />
    </div>
  )
}

export default Layout