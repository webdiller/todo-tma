import { createCA, createCert } from "mkcert"

// Step 2: Create a Certificate Authority (CA)
const ca = await createCA({
  organization: "My Local CA", // Customize as needed
  countryCode: "US",
  state: "California",
  locality: "San Francisco",
  validity: 365, // Validity in days
})

// Step 3: Generate an SSL Certificate for the Custom Domain
const cert = await createCert({
  ca: { key: ca.key, cert: ca.cert },
  domains: ["myapp.local", "localhost", "127.0.0.1"], // Add custom domain and fallback domains
  validity: 365, // Validity in days
})

console.log("Certificate Key:\n", cert.key)
console.log("Certificate:\n", cert.cert)

// Optionally, save the certificates to files
import fs from "fs"
fs.writeFileSync("myapp.local-key.pem", cert.key)
fs.writeFileSync("myapp.local.pem", cert.cert)
fs.writeFileSync("ca.pem", ca.cert) // Optional, if you need the CA certificate
