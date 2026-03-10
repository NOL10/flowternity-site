import { Helmet } from 'react-helmet-async';

export function CampSEO() {
  return (
    <Helmet>
      {/* Title */}
      <title>Summer Sports Camps 2026 | Flowternity Sports | Basketball, Skating, Futsal | Bengaluru</title>
      <meta name="description" content="Join Flowternity's Summer Sports Camps 2026! Professional basketball, skating, and futsal training for kids and teens. Multi-sport facility in Horamavu, Bengaluru. Register now for early bird discounts!" />
      
      {/* Keywords */}
      <meta name="keywords" content="summer sports camps, basketball camp, skating camp, futsal camp, kids sports, Bengaluru sports, Horamavu, multi-sport facility, Flowternity, summer camp 2026, basketball training, skating classes, futsal coaching" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Summer Sports Camps 2026 | Flowternity Sports" />
      <meta property="og:description" content="Professional summer sports camps in Bengaluru. Basketball, skating, and futsal training for kids and teens with expert coaches." />
      <meta property="og:image" content="https://flowternity.com/images/camp-hero.jpg" />
      <meta property="og:url" content="https://flowternity.com/summer-camp" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Flowternity Sports" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Summer Sports Camps 2026 | Flowternity Sports" />
      <meta name="twitter:description" content="Join our summer sports camps in Bengaluru. Basketball, skating, futsal training for kids." />
      <meta name="twitter:image" content="https://flowternity.com/images/camp-hero.jpg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://flowternity.com/summer-camp" />
      
      {/* Additional SEO Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Flowternity Sports" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="Karnataka" />
      <meta name="geo.placename" content="Bengaluru" />
      <meta name="geo.position" content="13.0352392;77.6679704" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          "name": "Flowternity Summer Sports Camps 2026",
          "description": "Professional summer sports camps offering basketball, skating, and futsal training for kids and teens in Bengaluru.",
          "url": "https://flowternity.com/summer-camp",
          "startDate": "2026-04-06",
          "endDate": "2026-05-14",
          "location": {
            "@type": "Place",
            "name": "Flowternity Sports",
            "address": "1456, Old Flour Mill Road, Dodda Kempaih Layout, Kalkere, Horamavu, Bengaluru, Karnataka 560043",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.0352392,
              "longitude": 77.6679704
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "3999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-03-01"
          },
          "organizer": {
            "@type": "Organization",
            "name": "Flowternity Sports",
            "url": "https://flowternity.com",
            "logo": "https://flowternity.com/images/logo.png"
          },
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "performer": {
            "@type": "Organization",
            "name": "Flowternity Sports Coaching Staff"
          }
        })}
      </script>
    </Helmet>
  )
}
