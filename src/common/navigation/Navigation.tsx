import { Link } from 'react-router-dom'

import { PATH } from '../pagesRoutes/PagesRoutes'

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] text-white px-5 shadow-md bg-gray-600">
      <h2 className="font-bold">GitHub Search</h2>
      <span>
        <Link to={PATH.HOME} className="mr-5">
          Home
        </Link>
        <Link to={PATH.FAVOURITE_PAGES}>Favourite Pages</Link>
      </span>
    </nav>
  )
}
