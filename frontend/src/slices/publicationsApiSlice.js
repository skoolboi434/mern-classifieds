import { PUBLICATIONS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const publicationsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPublications: builder.query({
      query: () => ({
        url: PUBLICATIONS_URL
      }),
      keepUnusedDataFor: 5
    }),
    getPublicationById: builder.query({
      query: publicationId => ({
        url: `${PUBLICATIONS_URL}/${publicationId}`
      }),
      keepUnusedDataFor: 5
    }),
    getProductsByPublication: builder.query({
      query: publicationId => ({
        url: `${PUBLICATIONS_URL}/${publicationId}/products`
      }),
      keepUnusedDataFor: 5
    }),
    getProductById: builder.query({
      query: productId => ({
        url: `${PUBLICATIONS_URL}/products/${productId}`
      }),
      keepUnusedDataFor: 5
    }),
    getCategoryChildrenById: builder.query({
      query: categoryId => ({
        url: `${PUBLICATIONS_URL}/categories/${categoryId}/children`
      }),
      keepUnusedDataFor: 5
    }),
    getTopLevelCategoriesByProduct: builder.query({
      query: productId => ({
        url: `${PUBLICATIONS_URL}/products/${productId}/categories`
      }),
      keepUnusedDataFor: 5
    })
  })
});

export const {
  useGetPublicationsQuery,
  useGetPublicationByIdQuery,
  useGetProductsByPublicationQuery,
  useGetProductByIdQuery,
  useGetCategoryChildrenByIdQuery,
  useGetTopLevelCategoriesByProductQuery
} = publicationsApiSlice;
