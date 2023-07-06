interface IItem {
  name: string
  quantity: number
}

export interface ISim {
  skills: string[]
  needs: string[]
  inventory: IItem[]
}