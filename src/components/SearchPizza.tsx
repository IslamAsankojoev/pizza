import { SearchContext } from "App"
import _ from "lodash"
import { FC, useCallback, useContext, useEffect, useRef, useState } from "react"

const SearchPizza: FC = () => {
  const [value, setValue] = useState("")
  const { setSearchPizza, searchPizza } = useContext(SearchContext)

  const inputRef = useRef<HTMLInputElement | any>()

  const onClickClear = () => {
    setSearchPizza("")
    setValue("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // eslint-disable-next-line
  const updateSearchValue = useCallback(
    _.debounce((str: string): void => {
      setSearchPizza(str)
    }, 200),
    []
  )

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.target.value)
    setValue(e.target.value)
  }

  useEffect(() => {
    console.log(searchPizza, 12)
  }, [searchPizza])
  return (
    <>
      <span className="searchPizza">
        <svg
          className="icon"
          enableBackground="new 0 0 32 32"
          id="EditableLine"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="14"
            cy="14"
            fill="none"
            id="XMLID_42_"
            r="9"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></circle>
          <line
            fill="none"
            id="XMLID_44_"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="27"
            x2="20.366"
            y1="27"
            y2="20.366"
          ></line>
        </svg>
        <input
          ref={inputRef}
          placeholder="Поиск пиццы..."
          type="text"
          value={value}
          onChange={onChangeInput}
        />
        {value && (
          <div className="cart__item-remove">
            <div
              className="button button--outline button--circle"
              onClick={onClickClear}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E"
                />
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E"
                />
              </svg>
            </div>
          </div>
        )}
      </span>
    </>
  )
}

export default SearchPizza
