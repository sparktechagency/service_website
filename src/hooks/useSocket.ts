/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState, useRef } from "react"
import { io, type Socket } from "socket.io-client"

interface UseSocketOptions {
  serverUrl: string
  userId: string
  autoConnect?: boolean
}

export function useSocket({ serverUrl, userId, autoConnect = true }: UseSocketOptions) {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [connectionError, setConnectionError] = useState<string | null>(null)
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    if (!autoConnect) return

    const newSocket = io(serverUrl, {
      query: { id: userId },
      transports: ["websocket"],
    })

    socketRef.current = newSocket

    newSocket.on("connect", () => {
      console.log("Socket connected")
      setIsConnected(true)
      setConnectionError(null)
    })

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected")
      setIsConnected(false)
    })

    newSocket.on("connect_error", (error) => {
      console.error("Socket connection error:", error)
      setConnectionError(error.message)
      setIsConnected(false)
    })

    setSocket(newSocket)

    return () => {
      newSocket.close()
      socketRef.current = null
    }
  }, [serverUrl, userId, autoConnect])

  const emitInitialMessage = (receiverId: string, page = 1) => {
    if (socket && isConnected) {
      socket.emit("all-message", {
        receiverId,
        page,
      })
    }
  }

  const emit = (event: string, data: any) => {
    if (socket && isConnected) {
      socket.emit(event, data)
    }
  }

  const on = (event: string, callback: (...args: any[]) => void) => {
    if (socket) {
      socket.on(event, callback)
    }
  }

  const off = (event: string, callback?: (...args: any[]) => void) => {
    if (socket) {
      socket.off(event, callback)
    }
  }

  return {
    socket,
    isConnected,
    connectionError,
    emitInitialMessage,
    emit,
    on,
    off,
  }
}
