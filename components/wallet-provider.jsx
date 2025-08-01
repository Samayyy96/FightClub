"use client"

import { createContext, useContext, useState } from "react"

const WalletContext = createContext(undefined)

export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

export function WalletProvider({ children }) {
  const [isConnected, setIsConnected] = useState(true) // Simulated connection
  const [address, setAddress] = useState("0xcv1234...5678")
  const [balance, setBalance] = useState(25.7)

  const connect = async () => {
    // Simulate wallet connection
    setIsConnected(true)
    setAddress("0xcv1234...5678")
    setBalance(25.7)
  }

  const disconnect = () => {
    setIsConnected(false)
    setAddress(null)
    setBalance(0)
  }

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address,
        balance,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
