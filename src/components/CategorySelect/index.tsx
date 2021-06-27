import React from 'react'

import { Container } from './styles'
import { categories } from '../../utils/categories'
import { Category } from '../Category'

type Props = {
  categorySelected: string
  setCategory: (categoryId: string) => void
  hasCheckBox?: boolean
}

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false
}: Props) {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}>
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </Container>
  )
}
