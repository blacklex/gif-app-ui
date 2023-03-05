import { FC, useState } from 'react'

interface AddCategoryProps {
  onAddCategory: (category: string) => void
}

const AddCategory: FC<AddCategoryProps> = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSubmitCategory = (event: any) => {
    event.preventDefault()

    if (inputValue.length >= 1) {
      onAddCategory(inputValue)
      setInputValue('')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitCategory}>
        <input
          type={'text'}
          name="category"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Add Category"
        ></input>
      </form>
    </div>
  )
}

export default AddCategory
