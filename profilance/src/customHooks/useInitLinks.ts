import React from 'react'
import { gql, useQuery } from "@apollo/client";

export const useInitLinks = (page: number) => {
    const newquery = gql`
    query ($page: Int) {
      short_urls (page: $page){
          paginatorInfo{
              count
              firstItem
              hasMorePages
              lastItem
              lastPage
              perPage
              total
          }
          data {
              id
              url
              short_url
              clicks
              created_at
              updated_at
          }
      }
  }`
    return useQuery(newquery, {variables: {page}})
};