export interface userType {
  id: number,
  name: string,
  username: string,
  email: string,
  address?: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: object,
  },
  phone?: string,
  website?: string,
  company?: object,
}
