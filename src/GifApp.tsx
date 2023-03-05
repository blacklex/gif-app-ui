import { FC, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
import './GifApp.css'

const GifApp: FC = () => {
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
      <h2>Gif App</h2>

      <AddCategory onAddCategory={onAddCategory}></AddCategory>

        {categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
            onRemoveCategory={onRemoveCategory}
          ></GifGrid>
        ))}
    </div>
  )
}

export default GifApp
