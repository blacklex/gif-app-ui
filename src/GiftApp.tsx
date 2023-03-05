import { FC, useState } from 'react'
import AddCategory from './components/AddCategory'
import GiftGrid from './components/GiftGrid'
import './GiftApp.css'

const GiftApp: FC = () => {
  const [categories, setCategories] = useState<string[]>([])

  const onAddCategory = (category: string) => {
    if (!categories.includes(category)) {
      setCategories([category, ...categories])
    }
  }

  const onRemoveCategory = (category: string) => {
    setCategories(categories.filter((e) => e !== category))
  }

  return (
    <div>
      <h2>Gift App</h2>

      <AddCategory onAddCategory={onAddCategory}></AddCategory>

        {categories.map((category) => (
          <GiftGrid
            key={category}
            category={category}
            onRemoveCategory={onRemoveCategory}
          ></GiftGrid>
        ))}
    </div>
  )
}

export default GiftApp
