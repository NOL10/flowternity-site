import { NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

// Debug: Check if environment variables are loaded
console.log("Environment check:")
console.log("KEY_ID:", process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ? "SET" : "MISSING")
console.log("KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET ? "SET" : "MISSING")

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = "INR" } = await request.json()

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      )
    }

    const options = {
      amount: amount.toString(),
      currency,
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1,
    }

    const order = await razorpay.orders.create(options)

    return NextResponse.json(order)
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    )
  }
}
