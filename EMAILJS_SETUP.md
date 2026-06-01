# EmailJS Setup Guide for Contribution Form

## Overview
The contribution form now uses EmailJS to send contributor emails. Follow these steps to configure it.

## Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Create an Email Service
1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use the default **Gmail**
4. Follow the prompts to connect your email service
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create an Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contribution from {{from_name}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}

Message:
{{message}}
```

**Template Fields:**
- `{{from_name}}` - Contributor's name
- `{{from_email}}` - Contributor's email
- `{{phone}}` - Phone number
- `{{message}}` - Contribution details

4. Copy your **Template ID** after saving

## Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

## Step 5: Configure Environment Variables
Create/update `.env.local` in `apps/docs/`:

```env
# Required (API route reads either EMAILJS_* or NEXT_PUBLIC_EMAILJS_*)
EMAILJS_SERVICE_ID=your_service_id_here
EMAILJS_TEMPLATE_ID=your_template_id_here
EMAILJS_PUBLIC_KEY=your_public_key_here

# Optional but recommended for server-side auth
EMAILJS_PRIVATE_KEY=your_private_key_here

# Backward-compatible alias for private key (supported by the API route)
# EMAILJS_API_KEY=your_private_key_here
```

## Step 6: Install Dependencies
From the root directory:

```bash
# Using Bun
bun install

# Or using npm
npm install

# Or using yarn
yarn install
```

## Step 7: Test the Form
1. Start the development server:
   ```bash
   bun run --filter=docs dev
   ```

2. Navigate to the home page
3. Fill out the contribution form
4. Click "Submit contribution"
5. You should receive an email at the address configured in your EmailJS service

## Troubleshooting

**"Email send error" message appears:**
- Verify required environment variables are set correctly
- Check that your Service ID and Template ID match those in EmailJS
- Ensure your email service is verified and active

**Emails not arriving:**
- Check your email spam/junk folder
- Verify the email service is connected in EmailJS dashboard
- Review EmailJS email activity logs for errors

**CORS errors in console:**
- This is normal - EmailJS handles CORS internally
- The form should still work despite browser console warnings

## Field Mapping
Form fields are mapped to template variables via `name` attributes:
- `from_name` → Contributor's name
- `from_email` → Contributor's email
- `phone` → Phone number
- `message` → Contribution details

## Security Notes
- `EMAILJS_PRIVATE_KEY` should never use the `NEXT_PUBLIC_` prefix.
- The API route supports `EMAILJS_*` and `NEXT_PUBLIC_EMAILJS_*`, but prefer `EMAILJS_*` values in production.
- For production, consider rate-limiting or adding CAPTCHA.

## Support
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Contact Form Guide](https://www.emailjs.com/docs/tutorial/creating-contact-form/)
