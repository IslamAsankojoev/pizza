import React from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "hooks/useTypedSelector"
import { useActions } from "hooks/useActions"

interface CategoriesProps {
  items: string[]
}

const Categories: React.FC<CategoriesProps> = ({ items }) => {
  const categoryId = useTypedSelector((state) => {
    return state.category.categoryId
  })
  const dispatch = useDispatch()
  const {setCategoryId} = useActions()

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            dispatch(setCategoryId(0))
          }}
          className={categoryId === 0 ? "active" : ""}
        >
          Все
        </li>
        {items?.map((item, index) => {
          return (
            <li
              className={categoryId === index + 1 ? "active" : ""}
              onClick={() => {
                dispatch(setCategoryId(index + 1))
              }}
              key={index + 1}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Categories
