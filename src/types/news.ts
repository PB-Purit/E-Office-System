export interface NewsItem {
  NewsId: number
  NameNews: string
  Detail: string
  Status: 0 | 1
  UpdatedDate: string
  ButtonView: 0 | 1
  ButtonEdit: 0 | 1
  ButtonDelete: 0 | 1
}

export type ModalMode = 'create' | 'edit' | 'view'

export interface ModalState {
  mode: ModalMode
  item: NewsItem | null
}

export interface ToastState {
  msg: string
  type: 'success' | 'error' | 'info'
}

export type NewsFormData = Pick<
  NewsItem,
  'NameNews' | 'Detail' | 'Status' | 'ButtonView' | 'ButtonEdit' | 'ButtonDelete'
>