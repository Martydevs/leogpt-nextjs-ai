export interface BaseResponse<T> {
  data: T
  isSuccess: boolean
  message: string
}