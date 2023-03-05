import { FC } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GiftCardItemProps {
  id: string
  title: string
  url: string
}

const GiftCardItem: FC<GiftCardItemProps> = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  )
}

export default GiftCardItem
