interface IItem {
  name: string
  quantity: number
}

interface ISim {
  skills: string[]
  needs: string[]
  inventory: IItem[]
}