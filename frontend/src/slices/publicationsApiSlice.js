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
    })
  })
});

export const { useGetPublicationsQuery, useGetPublicationByIdQuery } = publicationsApiSlice;
