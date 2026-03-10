import { useEffect } from 'react';

const RazorpayPayment = ({
  amount,
  onSuccess,
  onFailure,
  customerDetails,
  prefill = {}
}) => {
  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        openRazorpayCheckout();
      };
    };

    const openRazorpayCheckout = () => {
      if (typeof window.Razorpay === 'undefined') {
        console.error('Razorpay SDK not loaded');
        onFailure({ error: 'Payment SDK not loaded' });
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amount * 100, // Razorpay expects amount in paise
        currency: 'INR',
        name: 'Flowternity Sports',
        description: amount === 1 ? 'TEST Payment - Summer Camp Registration' : 'Summer Camp Registration',
        image: '/images/hero-basketball.jpg',
        prefill: {
          name: prefill.name || customerDetails?.parentName || '',
          email: prefill.email || customerDetails?.email || '',
          contact: prefill.phone || customerDetails?.phone || '',
        },
        notes: {
          child_name: customerDetails?.childName || '',
          child_age: customerDetails?.age || '',
          camps: customerDetails?.camps?.join(', ') || '',
        },
        theme: {
          color: '#3B82F6',
        },
        modal: {
          escape: false,
          handleback: false,
          confirm_close: true,
          animation: 'slideFromBottom',
        },
        handler: function (response) {
          onSuccess(response);
        },
        ondismiss: function (reason) {
          if (reason === 'timeout') {
            onFailure({ error: 'Payment timeout' });
          } else {
            onFailure({ error: 'Payment cancelled' });
          }
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    };

    // Auto-trigger payment when component mounts
    const timer = setTimeout(() => {
      loadRazorpayScript();
    }, 100);

    return () => clearTimeout(timer);
  }, [amount, onSuccess, onFailure, customerDetails, prefill]);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-sm text-muted-foreground">Opening payment gateway...</p>
      </div>
    </div>
  );
};

export default RazorpayPayment;
