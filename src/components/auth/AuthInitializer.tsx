"use client"
import { useEffect } from "react"
import { getToken } from "@/helper/SessionHelper"
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks"
import { initializeAuth } from "@/redux/features/auth/authSlice"

export default function AuthInitializer() {
  const dispatch = useAppDispatch()
  const { isInitialized } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (!isInitialized) {
      const token = getToken()
      dispatch(initializeAuth(token))
    }
  }, [dispatch, isInitialized])

  return null
}
