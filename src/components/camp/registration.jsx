import { useState } from "react"
import RazorpayPayment from '../RazorpayPayment.jsx'

const campOptions = [
  { id: "skating-1", label: "Skating - Camp 1", time: "6 Apr - 23 Apr, 7-8 AM" },
  { id: "skating-2", label: "Skating - Camp 2", time: "27 Apr - 14 May, 7-8 AM" },
  { id: "basketball-morning-1", label: "Basketball AM - Camp 1", time: "6 Apr - 23 Apr, 8-9 AM" },
  { id: "basketball-morning-2", label: "Basketball AM - Camp 2", time: "27 Apr - 14 May, 8-9 AM" },
  { id: "futsal-1", label: "Futsal - Camp 1", time: "6 Apr - 23 Apr, 9-10 AM" },
  { id: "futsal-2", label: "Futsal - Camp 2", time: "27 Apr - 14 May, 9-10 AM" },
  { id: "basketball-evening-1", label: "Basketball PM - Camp 1", time: "6 Apr - 23 Apr, 4-5 PM" },
  { id: "basketball-evening-2", label: "Basketball PM - Camp 2", time: "27 Apr - 14 May, 4-5 PM" },
]

export function CampRegistration() {
  const [selectedCamps, setSelectedCamps] = useState([])
  const [formData, setFormData] = useState({
    childName: "", age: "", parentName: "", email: "", phone: "",
  })
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState("")
  const [triggerPayment, setTriggerPayment] = useState(false)

  const toggleCamp = (id) => {
    setSelectedCamps((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const pricePerCamp = selectedCamps.length >= 2 ? 3599 : 3999
  const baseTotal = selectedCamps.length * pricePerCamp
  const multiCampSavings = selectedCamps.length >= 2 ? selectedCamps.length * 400 : 0
  const couponDiscount = couponApplied ? Math.round(baseTotal * 0.3) : 0
  const totalPrice = baseTotal - couponDiscount
  const totalSavings = multiCampSavings + couponDiscount

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(3)
  }

  const applyCoupon = () => {
    setCouponError("")

    // Validate coupon code (case-sensitive)
    if (couponCode.trim() === "ACADEMY30") {
      setCouponApplied(true)
    } else {
      setCouponError("Invalid coupon code")
      setCouponApplied(false)
    }
  }

  const removeCoupon = () => {
    setCouponCode("")
    setCouponApplied(false)
    setCouponError("")
  }

  const handlePaymentSuccess = async (paymentResponse) => {
    try {
      // Send data to Google Sheet
      const response = await fetch('https://script.google.com/macros/s/AKfycbyZhniqlVD_aC_xWd7982dM7Ru2Tv6HJ-Mlu0YU1g3VduulP3TcfEV4j9SwagmZzFYU/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          childName: formData.childName,
          age: formData.age,
          parentName: formData.parentName,
          email: formData.email,
          phone: String(formData.phone).replace(/[^\d+\s]/g, '').trim(), // Clean phone number - remove special chars except + and spaces
          camps: selectedCamps.map(id => {
            const camp = campOptions.find(c => c.id === id)
            return camp ? camp.label : id
          }).join(', '),
          amount: totalPrice,
          originalAmount: baseTotal,
          couponApplied: couponApplied,
          couponCode: couponApplied ? couponCode : '',
          discount: couponDiscount,
          paymentId: paymentResponse.razorpay_payment_id
        }),
        mode: 'no-cors' // Required for Google Apps Script
      })

      setSubmitted(true)
      console.log("Data sent to sheet successfully")
    } catch (error) {
      console.error("Error sending data to sheet:", error)
      // Still show success to user even if sheet update fails
      setSubmitted(true)
    }
  }

  const handlePaymentFailure = (error) => {
    console.error("Payment failed:", error)

    // Reset trigger payment state
    setTriggerPayment(false)

    // Handle different types of payment failures
    if (error.type === 'cancelled') {
      // User cancelled payment - stay on confirmation page
      // Don't show alert for cancellation, just let user try again
      console.log("Payment cancelled by user")
      setSubmitted(false);
      setStep(3);
    } else if (error.type === 'timeout') {
      // Payment timed out
      alert("Payment timed out. Please try again.")
    } else {
      // Other errors
      alert("Payment failed. Please try again.")
    }
  }

  if (submitted) {
    return (
      <section id="register" className="relative bg-background py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <div className="rounded-xl border border-primary/20 bg-card p-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold uppercase text-foreground">Registration Received</h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Thank you, {formData.parentName}. Your payment has been successfully processed for {selectedCamps.length} camp(s).
              We've sent a confirmation to {formData.email} and will reach out at {formData.phone} with further details.
            </p>
            <div className="mt-6 rounded-lg bg-secondary p-4">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Total Paid</span>
              <div className="font-[var(--font-heading)] text-3xl font-bold text-primary">&#x20B9;{totalPrice.toLocaleString("en-IN")}</div>
              {totalSavings > 0 && (
                <div className="mt-2 text-[11px] text-green-600">
                  You saved &#x20B9;{totalSavings.toLocaleString("en-IN")}
                </div>
              )}
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setSelectedCamps([]);
                setFormData({ childName: "", age: "", parentName: "", email: "", phone: "" });
                setCouponCode("");
                setCouponApplied(false);
                setCouponError("");
                setTriggerPayment(false);
              }}
              className="mt-5 text-[13px] font-semibold text-primary underline underline-offset-4"
            >
              Register another child
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="relative bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Registration</span>
        </div>
        <h2 className="mb-10 font-[var(--font-heading)] text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
          Book Your Spot
        </h2>

        {/* Step indicator */}
        <div className="mb-8 flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (s === 1) setStep(1)
                  if (s === 2 && selectedCamps.length > 0) setStep(2)
                }}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${step >= s ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
                  }`}
              >
                {s}
              </button>
              <span className={`hidden text-[12px] font-medium sm:inline ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
                {s === 1 ? "Select Camps" : s === 2 ? "Details" : "Confirm"}
              </span>
              {s < 3 && <div className={`mx-2 h-px w-8 ${step > s ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main form area */}
          <div className="lg:col-span-2">
            {/* Step 1: Select camps */}
            {step === 1 && (
              <div>
                <h3 className="mb-4 text-sm font-bold text-foreground">
                  Select your camps <span className="text-primary">*</span>
                </h3>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {campOptions.map((camp) => (
                    <button
                      key={camp.id}
                      type="button"
                      onClick={() => toggleCamp(camp.id)}
                      className={`flex items-start gap-3 rounded-lg border p-4 text-left transition-all ${selectedCamps.includes(camp.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground/30"
                        }`}
                    >
                      <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all ${selectedCamps.includes(camp.id) ? "border-primary bg-primary" : "border-muted-foreground/30"
                        }`}>
                        {selectedCamps.includes(camp.id) && (
                          <svg className="h-3 w-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-foreground">{camp.label}</span>
                        <span className="block text-[11px] text-muted-foreground">{camp.time}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={selectedCamps.length === 0}
                  className="mt-6 rounded-md bg-primary px-8 py-3 text-[13px] font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <form
                onSubmit={(e) => { e.preventDefault(); setStep(3); }}
                className="space-y-5"
              >
                <h3 className="text-sm font-bold text-foreground">Participant Details</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="childName" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Child&apos;s Name <span className="text-primary">*</span>
                    </label>
                    <input id="childName" type="text" required value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Age <span className="text-primary">*</span>
                    </label>
                    <input id="age" type="number" required min="6" value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Age (5+ years)"
                    />
                  </div>
                  <div>
                    <label htmlFor="parentName" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Parent&apos;s Name <span className="text-primary">*</span>
                    </label>
                    <input id="parentName" type="text" required value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone <span className="text-primary">*</span>
                    </label>
                    <input id="phone" type="tel" required value={formData.phone}
                      onChange={(e) => {
                        // Only allow exactly 10 digits
                        const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10)
                        setFormData({ ...formData, phone: cleaned })
                      }}
                      className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="XXXXXXXXXX"
                      maxLength={10}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input id="email" type="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="parent@example.com"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="rounded-md border border-border px-6 py-2.5 text-[13px] font-semibold text-muted-foreground hover:text-foreground">
                    Back
                  </button>
                  <button type="submit" className="rounded-md bg-primary px-8 py-2.5 text-[13px] font-semibold text-primary-foreground hover:bg-primary/90">
                    Review Order
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div>
                <h3 className="mb-4 text-sm font-bold text-foreground">Review & Confirm</h3>
                <div className="mb-6 space-y-3 rounded-xl border border-border bg-card p-5">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="text-[11px] uppercase tracking-wider text-muted-foreground">Child</span><p className="font-semibold text-foreground">{formData.childName}, {formData.age} yrs</p></div>
                    <div><span className="text-[11px] uppercase tracking-wider text-muted-foreground">Parent</span><p className="font-semibold text-foreground">{formData.parentName}</p></div>
                    <div><span className="text-[11px] uppercase tracking-wider text-muted-foreground">Phone</span><p className="font-semibold text-foreground">{formData.phone}</p></div>
                    <div><span className="text-[11px] uppercase tracking-wider text-muted-foreground">Email</span><p className="font-semibold text-foreground">{formData.email}</p></div>
                  </div>
                </div>

                <div className="mb-6 space-y-2">
                  {selectedCamps.map((id) => {
                    const camp = campOptions.find((c) => c.id === id)
                    return (
                      <div key={id} className="flex justify-between rounded-md bg-secondary/50 px-4 py-2.5 text-sm">
                        <span className="text-foreground">{camp.label}</span>
                        <span className="text-muted-foreground">&#x20B9;{pricePerCamp.toLocaleString("en-IN")}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="rounded-md border border-border px-6 py-2.5 text-[13px] font-semibold text-muted-foreground hover:text-foreground">
                    Back
                  </button>
                  <button
                    onClick={() => setTriggerPayment(true)}
                    className="rounded-md bg-primary px-8 py-2.5 text-[13px] font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Pay Now &#x20B9;{totalPrice.toLocaleString("en-IN")}
                  </button>
                  {triggerPayment && (
                    <RazorpayPayment
                      amount={totalPrice}
                      onSuccess={handlePaymentSuccess}
                      onFailure={handlePaymentFailure}
                      customerDetails={{
                        childName: formData.childName,
                        age: formData.age,
                        parentName: formData.parentName,
                        email: formData.email,
                        phone: formData.phone,
                        camps: selectedCamps
                      }}
                      triggerPayment={triggerPayment}
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar summary */}
          <div>
            <div className="sticky top-28 rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Summary</h3>

              {selectedCamps.length === 0 ? (
                <div className="rounded-lg border border-dashed border-border p-5 text-center">
                  <p className="text-[13px] text-muted-foreground">Select camps to begin</p>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    {selectedCamps.map((id) => {
                      const camp = campOptions.find((c) => c.id === id)
                      return (
                        <div key={id} className="flex items-start justify-between rounded-md bg-secondary/50 p-3">
                          <div>
                            <span className="text-[13px] font-semibold text-foreground">{camp.label}</span>
                            <span className="block text-[11px] text-muted-foreground">{camp.time}</span>
                          </div>
                          <button onClick={() => toggleCamp(id)} className="text-muted-foreground hover:text-foreground" aria-label={`Remove ${camp.label}`}>
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                        </div>
                      )
                    })}
                  </div>

                  {/* Coupon Section */}
                  <div className="mt-4 space-y-2">
                    {!couponApplied ? (
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Coupon Code (Optional)
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Enter code"
                            className="flex-1 rounded-md border border-border bg-input px-3 py-2 text-[13px] text-foreground outline-none transition-colors focus:border-primary"
                          />
                          <button
                            onClick={applyCoupon}
                            disabled={!couponCode.trim()}
                            className="rounded-md bg-primary px-4 py-2 text-[12px] font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Apply
                          </button>
                        </div>
                        {couponError && (
                          <p className="text-[11px] text-red-500">{couponError}</p>
                        )}
                      </div>
                    ) : (
                      <div className="rounded-md bg-green-50 border border-green-200 p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            <div>
                              <p className="text-[12px] font-semibold text-green-800">Coupon Applied!</p>
                              <p className="text-[10px] text-green-600">30% discount ({couponCode})</p>
                            </div>
                          </div>
                          <button
                            onClick={removeCoupon}
                            className="text-[10px] text-red-600 hover:text-red-800 underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 space-y-1.5 border-t border-border pt-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{selectedCamps.length} camp(s)</span>
                      <span className="text-foreground">&#x20B9;{baseTotal.toLocaleString("en-IN")}</span>
                    </div>
                    {multiCampSavings > 0 && (
                      <div className="flex justify-between text-primary">
                        <span>Multi-camp savings</span>
                        <span>-&#x20B9;{multiCampSavings.toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    {couponDiscount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Student discount (30%)</span>
                        <span>-&#x20B9;{couponDiscount.toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t border-border pt-3 font-bold">
                      <span className="text-foreground">Total</span>
                      <span className="font-[var(--font-heading)] text-lg text-primary">&#x20B9;{totalPrice.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </>
              )}

              <div className="mt-5 flex items-center gap-2 rounded-md bg-secondary/50 p-3">
                <svg className="h-3.5 w-3.5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-[11px] text-muted-foreground">Secure: UPI, Cards & Net Banking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
