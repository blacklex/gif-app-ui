import { FC } from 'react'

interface GifCardItemProps {
  id: string
  title: string
  url: string
}

const GifCardItem: FC<GifCardItemProps> = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  )
}

export default GifCardItem
