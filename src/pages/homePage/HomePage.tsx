import { useEffect, useState } from 'react'

import { useDebounce } from '../../hooks/debounce'
import { useSearchUsersQuery } from '../../store/github/github.api'

export const HomePage = () => {
  const [search, setSearch] = useState<string>('')
  const [dropdown, setDropdown] = useState<boolean>(false)
  const debounced = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length <= 1,
  })

  useEffect(() => {
    setDropdown(debounced.length > 1 && data?.length! > 0)
  }, [debounced, data])

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-red">Something went wrong... Try one more time</p>}
      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder={'Search for Github username...'}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
            {isLoading && <p className="text-center">Loading...</p>}
            {data?.map(user => (
              <li
                key={user.id}
                className="py-2 px-4 hover:bg-gray-600 hover:text-white transition-colors cursor-pointer"
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
