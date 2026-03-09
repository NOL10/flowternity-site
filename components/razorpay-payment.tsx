"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface RazorpayPaymentProps {
  amount: number
  currency?: string
  name?: string
  description?: string
  email?: string
  contact?: string
  onSuccess?: (response: any) => void
  onFailure?: (error: any) => void
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export function RazorpayPayment({
  amount,
  currency = "INR",
  name = "Summer Camp",
  description = "Payment for summer camp registration",
  email,
  contact,
  onSuccess,
  onFailure,
}: RazorpayPaymentProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [razorpayLoaded, setRazorpayLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    script.onload = () => setRazorpayLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handlePayment = async () => {
    if (!razorpayLoaded) {
      toast.error("Razorpay SDK not loaded")
      return
    }

    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
      toast.error("Razorpay key not configured")
      return
    }

    setIsLoading(true)

    try {
      // Create order on server
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Razorpay expects amount in paise
          currency,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to create order")
      }

      const order = await response.json()

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name,
        description,
        order_id: order.id,
        prefill: {
          email,
          contact,
        },
        handler: function (response: any) {
          // Verify payment on server
          verifyPayment(response)
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false)
            toast.error("Payment cancelled")
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error("Payment error:", error)
      toast.error("Payment failed")
      setIsLoading(false)
      onFailure?.(error)
    }
  }

  const verifyPayment = async (paymentResponse: any) => {
    try {
      const response = await fetch("/api/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_signature: paymentResponse.razorpay_signature,
        }),
      })

      if (!response.ok) {
        throw new Error("Payment verification failed")
      }

      const result = await response.json()
      toast.success("Payment successful!")
      onSuccess?.(result)
    } catch (error) {
      console.error("Verification error:", error)
      toast.error("Payment verification failed")
      onFailure?.(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handlePayment}
      disabled={isLoading || !razorpayLoaded}
      className="w-full"
    >
      {isLoading ? "Processing..." : `Pay ₹${amount}`}
    </Button>
  )
}
