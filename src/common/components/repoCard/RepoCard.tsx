import { useState } from 'react'

import { useActions } from '../../../hooks/actions'
import { useAppSelector } from '../../../hooks/redux'
import { IRepo } from '../../types/types'

export const RepoCard = (repo: IRepo) => {
  const { favourites } = useAppSelector(state => state.github)

  const [isFavourite, setIsFavourite] = useState<boolean>(favourites.includes(repo.html_url))

  const { addFavourite, removeFavourite } = useActions()
  const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addFavourite(repo.html_url)
    setIsFavourite(true)
  }
  const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    removeFavourite(repo.html_url)
    setIsFavourite(false)
  }

  return (
    <div className="border py-3 px-5 rounded cursor-pointer mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target={'_blank'} rel="noreferrer">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>

        {!isFavourite ? (
          <button
            className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all active:bg-yellow-700"
            onClick={addToFavourite}
          >
            Add
          </button>
        ) : (
          <button
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all active:bg-red-700"
            onClick={removeFromFavourite}
          >
            Remove
          </button>
        )}
      </a>
    </div>
  )
}
