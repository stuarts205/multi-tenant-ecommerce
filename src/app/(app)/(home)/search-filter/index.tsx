import React from 'react'
import { SearchInput } from './search-input'
import { Categories } from './categories'

interface SearchFiltersProps {
    data: any
}

export const SearchFilters = ({ data }: SearchFiltersProps) => {
  return (
    <div className='px-4 mg:px-12 py-8 border-b flex flex-col w-full gap-4'>
        <SearchInput />
        <Categories data={data} />
    </div>
  )
}
