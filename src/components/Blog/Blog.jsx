import React from 'react'
import { BlogContainer, BlogList } from './Blog.Styled'
import BlogCard from './BlogCard'

import usePagination from '../../Hooks/usePagination'
import BlogHeader from './BlogHeader'

// DE PRUEBA ARRAY DE OBJETO
const event = [
  {
    fecha: '02/45/24',
    text: '10 señales de que tu grupo de apoyo no esta funcionando',
  },
  {
    fecha: '02/45/24',
    text: '7 señales de que tu grupo de apoyo no esta funcionando',
  },
  {
    fecha: '02/45/24',
    text: '8 señales de que tu grupo de apoyo no esta funcionando',
  },
  {
    fecha: '02/45/24',
    text: '10 señales de que tu grupo de apoyo no esta funcionando',
  },
  {
    fecha: '02/45/1999',
    text: '7 señales de que tu grupo de apoyo no esta funcionando',
  },
  {
    fecha: '02/45/24',
    text: '8 señales de que tu grupo de apoyo no esta funcionando',
  },
]
const Blog = () => {
  // usamos un useHook perzonalizado para la paginacion tipo slider
  const { currentPage, totalPages, paginatedData, NextPage, PreviousPage } =
    usePagination(event, 3)
  return (
    <BlogContainer>
      <BlogHeader
        currentPage={currentPage}
        totalPages={totalPages}
        NextPage={NextPage}
        PreviousPage={PreviousPage}
      />
      <BlogList>
        {paginatedData.map((data, index) => (
          <BlogCard key={index} text={data.text} fecha={data.fecha} />
        ))}
      </BlogList>
    </BlogContainer>
  )
}

export default Blog