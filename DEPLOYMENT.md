# Deployment Guide

This guide walks you through deploying the Queue System with Supabase backend.

## Prerequisites

- Supabase account and project set up (see SUPABASE_SETUP.md)
- Vercel, Netlify, or another Next.js-compatible hosting account
- Twilio account for SMS notifications (optional)

## Deployment Steps

### 1. Set Up Supabase Backend

Follow the [SUPABASE_SETUP.md](SUPABASE_SETUP.md) guide to:
- Create a Supabase project
- Set up the database schema
- Configure environment variables

### 2. Deploy to Vercel (Recommended)

Vercel provides the best experience for Next.js applications:

1. **Connect Your Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your Git repository

2. **Configure Environment Variables**
   - Add your Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ```
   - Add Twilio credentials (if using SMS):
     ```
     TWILIO_ACCOUNT_SID=your_account_sid
     TWILIO_AUTH_TOKEN=your_auth_token
     TWILIO_PHONE_NUMBER=your_phone_number
     ```

3. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your app will be live at `https://your-app.vercel.app`

### 3. Alternative: Deploy to Netlify

1. **Connect Your Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Set Environment Variables**
   - Add the same Supabase and Twilio variables as above

4. **Deploy**
   - Click "Deploy site"
   - Your app will be live at `https://your-app.netlify.app`

## Custom Domain

To use a custom domain:

### For Vercel:
1. Go to your project Settings > Domains
2. Add your custom domain
3. Configure DNS according to Vercel's instructions
4. SSL certificate is automatically provisioned

### For Netlify:
1. Go to Domain settings
2. Add your custom domain
3. Configure DNS according to Netlify's instructions
4. SSL certificate is automatically provisioned

## Important Notes

### Real-time Features

The application uses Supabase real-time subscriptions to automatically update the admin dashboard. This works out of the box with no additional configuration.

### Environment Variables

**Never commit `.env.local` to version control!** Always use environment variable management from your hosting platform:

- **Vercel**: Project Settings > Environment Variables
- **Netlify**: Site Settings > Environment Variables

### Database Setup

Before deploying, ensure you've:
1. Created the Supabase database schema (see SUPABASE_SETUP.md)
2. Configured Row Level Security policies
3. Tested the connection locally

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Verify environment variables are set correctly
- Check build logs in your deployment platform
- Clear cache and rebuild

### Database Connection Issues
- Verify Supabase URL and anon key are correct
- Check that database schema is created
- Review Supabase logs for errors
- Ensure RLS policies allow the required operations

### Real-time Not Working
- Verify real-time is enabled in Supabase for the tickets table
- Check browser console for WebSocket errors
- Ensure client has proper permissions

## Local Testing

To test the production build locally:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

Then open http://localhost:3000

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

- **Push to main branch** → Automatic production deployment
- **Push to other branches** → Preview deployments
- **Pull requests** → Preview deployments for testing

## Monitoring and Analytics

### Supabase Dashboard
- Monitor database usage
- View real-time connections
- Check API logs and errors

### Vercel/Netlify Analytics
- Track page views and performance
- Monitor build times
- View deployment history

## Updating the Deployment

Simply push changes to your repository:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

Your hosting platform will automatically rebuild and redeploy.
