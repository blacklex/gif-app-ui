import { FC } from 'react'
import GiftCardItem from './GiftCardItem'

interface GiftGridProps {
  category: string
  onRemoveCategory: (category: string) => void
}

const GiftGrid: FC<GiftGridProps> = ({ category, onRemoveCategory }) => {
  return (
    <div>
      <div style={{ display: 'block' }}>
      {category}
      <button
        onClick={(e) => {
          onRemoveCategory(category)
        }}
      >
        X
      </button>
      </div>
      <GiftCardItem></GiftCardItem>
    </div>
  )
}

export default GiftGrid
