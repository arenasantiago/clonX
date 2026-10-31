import React from 'react'
import { mockUsers } from './mockUsers'

export default function getUserById(id: string) {
  return mockUsers.find((user)=> user.id === id)
}
