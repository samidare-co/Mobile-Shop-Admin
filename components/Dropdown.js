import Link from 'next/link'
import { useContext, useState } from 'react'
import sites from './sites.json'
import { SiteContext } from './SiteContext'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  function handleSiteClick(newSite) {
    changeSite(newSite)
    setIsOpen(false)
  }

  const { selectedSite, changeSite } = useContext(SiteContext)
  return (
    <div>
      <div
        className={
          isOpen
            ? ' bg-highlight flex gap-1 p-1 cursor-pointer'
            : 'flex p-1 gap-1 cursor-pointer'
        }
      >
        {!isOpen ? (
          <svg
            onClick={() => setIsOpen((prev) => !prev)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isOpen ? 'blue' : 'currentColor'}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setIsOpen((prev) => !prev)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isOpen ? 'blue' : 'currentColor'}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={isOpen ? 'flex text-black' : 'flex'}
        >
          {selectedSite}
        </button>
      </div>

      {isOpen && (
        <div>
          {sites.map((item, i) => (
            <div
              key={i}
              className="p-1 pl-0 text-left hover:cursor-pointer hover:text-primary transition-all hover:duration-400  hover:font-semibold"
            >
              <button onClick={() => handleSiteClick(item.Name)}>
                {item.Name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
