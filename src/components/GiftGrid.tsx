import { FC, useEffect, useState } from 'react'
import GiftCardItem from './GiftCardItem'

interface GiftGridProps {
  category: string
  onRemoveCategory: (category: string) => void
}

const getGifts = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=L70bN6g1USOHalSl1fQ55SjChpuuDJgw&q=${category}&limit=10`
  const response = await fetch(url)
  const { data } = await response.json()

  const images: { id: string, title: string, url: string } = data.map(
    (e: {
      id: string
      title: string
      images: { downsized_medium: { url: string } }
    }) => ({ id: e.id, title: e.title, url: e.images.downsized_medium.url })
  )

  return images
}

const GiftGrid: FC<GiftGridProps> = ({ category, onRemoveCategory }) => {
  const [images, setImages] = useState<
  Array<{
    id: string
    title: string
    url: string
  }>
  >([])
  useEffect(() => {
    getGifts(category)
      .then((data) => {
        setImages(data)
      })
      .catch((e) => {
        console.log('error')
      })
  }, [category])

  return (
    <div className="gif-grid">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ direction: 'initial', flex: 1 }}>
          <span style={{ fontSize: '3rem' }}>{category}</span>
        </div>
        <div style={{ alignSelf: 'center' }}>
          <button
            onClick={(e) => {
              onRemoveCategory(category)
            }}
          >
            X
          </button>
        </div>
      </div>
      <div className="card-grid">
        {images.map((image) => (
          <GiftCardItem key={image.id} {...image}></GiftCardItem>
        ))}
      </div>
    </div>
  )
}

export default GiftGrid
