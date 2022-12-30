import { Routes, Route } from 'react-router-dom'

import { FavouritePages, HomePage } from '../../pages'

export enum PATH {
  HOME = '/',
  FAVOURITE_PAGES = '/favourite-pages',
}

export const PagesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={PATH.FAVOURITE_PAGES} element={<FavouritePages />} />
      </Routes>
    </>
  )
}
