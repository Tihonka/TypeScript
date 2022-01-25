export interface SearchFormData{
    checkin?: string,
    checkout?: string,
    price?: number
}

export const search = (formData: SearchFormData): void => {
  console.log(formData)
}