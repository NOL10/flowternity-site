import { Helmet } from 'react-helmet-async';

export function CampSEO() {
  return (
    <Helmet>
      {/* Title */}
      <title>Summer Sports Camps 2026 | Flowternity Sports | Basketball, Skating, Futsal | Bengaluru</title>
      <meta name="description" content="Join Flowternity's Summer Sports Camps 2026! Professional basketball, skating, and futsal training for kids and teens. Multi-sport facility in Horamavu, Bengaluru. Register now for early bird discounts!" />

      {/* Keywords */}
      <meta name="keywords" content="summer sports camps, basketball camp, skating Camp, futsal Camp, kids sports, Bengaluru sports, Horamavu, multi-sport facility, Flowternity, summer camp 2026, basketball training, skating classes, futsal coaching" />

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
    </Helmet>
  )
}
