# Website Customization Guide
## Mattb Rains Engineers Limited Company

This guide will help you customize the website with your actual company information. Below are all the sections and fields that contain placeholder data or need to be updated with your specific details.

---

## 1. Company Branding

### Logo
**Current:** Blue box with "MR" initials
**To Update:**
- Replace the logo in `Header.tsx` and `Footer.tsx`
- Upload your company logo file and import it
- Update the logo div to use your actual logo image

### Brand Colors
**Current:** Default blue (#2563eb)
**To Update:**
- Modify the color scheme in `/src/styles/theme.css`
- Update all instances of `bg-blue-600`, `text-blue-600`, etc. if you have specific brand colors

---

## 2. Company Information to Add/Update

### About Section (`/src/app/components/About.tsx`)
- [x] Company name: Mattb Rains Engineers Limited Company
- [x] CEO name: Matthew Nketsiah
- [x] Year established: 2014 (please verify)
- [x] Company motto: "Adwen Ma Mpuntu"
- [ ] **Update statistics:**
  - Years of experience (currently: 10+)
  - Projects completed (currently: 200+)
  - Any other specific achievements
- [ ] **Add detailed company history** - Expand the "About Us" text with your actual company story

### Mission & Vision
**Location:** `/src/app/components/About.tsx`
- [ ] Review and customize the Mission statement to match your actual mission
- [ ] Review and customize the Vision statement to match your actual vision

---

## 3. Contact Information

### Current Information
**Location:** `/src/app/components/Contact.tsx` and `/src/app/components/Footer.tsx`

✅ **Already Added:**
- Phone: +233 24 683 6630
- Email: matthewenki.63@gmail.com
- WhatsApp: Same as phone number

⚠️ **Needs Update:**
- [ ] **Office Address:** Currently shows "Accra, Ghana (Exact address to be added)"
  - Update in Contact.tsx line ~195
  - Update in Footer.tsx
  - Add full street address, building name, landmarks
  
- [ ] **Google Maps Location:**
  - Get your Google Maps embed code
  - Replace the placeholder in Contact.tsx (line ~250-265)
  - Add actual coordinates

### Social Media Links
**Location:** `/src/app/components/Contact.tsx` and `/src/app/components/Footer.tsx`

Currently all social media links point to "#" (placeholder)
- [ ] Facebook page URL
- [ ] Instagram profile URL
- [ ] LinkedIn company page URL

**To update:** Replace `href="#"` with your actual social media URLs

---

## 4. Services

**Location:** `/src/app/components/Services.tsx`

Current services listed:
1. Civil Engineering Works
2. Building & Construction
3. Building & Renovation
4. Estate Development
5. P.O.P & Wall Cladding Works
6. Consultancy

- [ ] Review service descriptions and customize them to match your specific offerings
- [ ] Add any additional services if needed
- [ ] Update service descriptions with more specific details about what you offer

---

## 5. Projects Portfolio

**Location:** `/src/app/components/Projects.tsx`

Currently using placeholder project data with Unsplash images.

**To Update:**
- [ ] Replace with your actual completed projects
- [ ] Upload real project photos to replace Unsplash images
- [ ] Add actual project names
- [ ] Include real project descriptions
- [ ] Consider adding:
  - Project location
  - Project completion date
  - Client name (if allowed)
  - Project value/scale

---

## 6. Testimonials

**Location:** `/src/app/components/Testimonials.tsx`

Currently using placeholder testimonials.

**To Update:**
- [ ] Replace with real client testimonials
- [ ] Use actual client names (with permission)
- [ ] Add real client roles/companies
- [ ] Include genuine feedback from your projects
- [ ] Consider adding client photos if available

---

## 7. Certifications & Awards

**Location:** `/src/app/components/Certifications.tsx`

Current placeholder certifications:
- ISO 9001:2015 Certified
- Licensed Contractor
- Safety Certified
- Excellence Award 2023

**To Update:**
- [ ] Replace with your actual certifications
- [ ] Add business registration number
- [ ] Include real licenses and permits
- [ ] Add any industry awards or recognitions
- [ ] Upload certification documents/badges if available

---

## 8. Images & Media

### Current Image Sources
All current images are from Unsplash (stock photos).

**To Replace:**
- [ ] **Hero section background** - Use a photo of your actual projects or team
- [ ] **About section image** - Your office, team, or ongoing project
- [ ] **Project images** - Replace all with real project photos
- [ ] **Team photos** - Add if you want a team section

### How to Add Images:
1. Place your images in `/src/assets/` or `/public/` folder
2. Import them in the relevant component
3. Use the `ImageWithFallback` component to display them

---

## 9. Business Registration & Legal

**Location:** Consider adding to `/src/app/components/Certifications.tsx`

- [ ] Business registration number
- [ ] Tax identification number (if applicable)
- [ ] Professional licenses
- [ ] Insurance certifications
- [ ] Industry memberships

---

## 10. Additional Features to Consider

### Optional Sections You May Want to Add:
- [ ] **Team Members Section** - Photos and bios of key staff
- [ ] **Equipment Gallery** - Showcase your machinery and tools
- [ ] **Office Photos** - Help clients know what to expect
- [ ] **Process/How We Work** - Explain your workflow
- [ ] **FAQs** - Common questions from clients
- [ ] **Blog/News** - Company updates and industry insights
- [ ] **Career/Jobs** - If you're hiring

---

## 11. Form Functionality

### Contact Form
**Location:** `/src/app/components/Contact.tsx`

Currently using a mock submission (just shows success message).

**To Make Functional:**
- [ ] Set up email service (e.g., EmailJS, SendGrid, or backend API)
- [ ] Configure form to actually send emails
- [ ] Add form validation
- [ ] Set up auto-response emails
- [ ] Connect to CRM if applicable

---

## 12. SEO & Meta Information

**To Add:**
- [ ] Page title and meta description
- [ ] Open Graph tags for social sharing
- [ ] Favicon (company logo icon)
- [ ] Keywords
- [ ] Schema markup for business information

---

## 13. Analytics & Tracking

**To Add:**
- [ ] Google Analytics tracking code
- [ ] Facebook Pixel (if running ads)
- [ ] Conversion tracking
- [ ] Heat mapping tools

---

## Quick Start Checklist

### Priority Updates (Do These First):
1. [ ] Add exact office address
2. [ ] Add Google Maps location
3. [ ] Update social media links
4. [ ] Replace testimonials with real ones
5. [ ] Add actual certifications
6. [ ] Upload company logo
7. [ ] Replace project images with real photos
8. [ ] Make contact form functional
9. [ ] Verify all contact information is correct
10. [ ] Update company history and about text

---

## Technical Notes

### File Locations:
- **Components:** `/src/app/components/`
- **Styles:** `/src/styles/`
- **Main App:** `/src/app/App.tsx`

### To Update Content:
1. Open the relevant component file
2. Find the placeholder text/data
3. Replace with your actual information
4. Save and preview

---

## Support

If you need help customizing any section or adding new features, refer to the React and Tailwind CSS documentation, or contact your web developer.

**Website Features:**
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Click-to-call functionality
- ✅ WhatsApp integration
- ✅ Email links
- ✅ Contact form
- ✅ Social media integration
- ✅ Professional design
- ✅ Fast loading

---

**Last Updated:** May 21, 2026
**Website Version:** 1.0
