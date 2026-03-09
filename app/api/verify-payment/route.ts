import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await request.json()

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing payment details" },
        { status: 400 }
      )
    }

    const key_secret = process.env.RAZORPAY_KEY_SECRET!

    const generated_signature = crypto
      .createHmac("sha256", key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex")

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      )
    }

    // Payment is verified, you can save details to database here
    const paymentDetails = {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      status: "success",
      verified_at: new Date().toISOString(),
    }

    // TODO: Save payment details to your database
    console.log("Payment verified:", paymentDetails)

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      paymentDetails,
    })
  } catch (error) {
    console.error("Error verifying payment:", error)
    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 }
    )
  }
}
