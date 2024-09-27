'use server';

import { env } from '@upskill-app/web-env';
import { Resend } from 'resend';

import { checkRateLimit } from './rateLimit';
import { WelcomeEmail } from './welcome-email';

const resend = new Resend(env.RESEND_API_KEY);

const DEFAULT_AUDIENCE_ID = '5a279168-7bb8-4e20-8150-bc979f991ac1';

export async function subscribeToNewsletter(
  email: string,
  preferredName: string
) {
  try {
    if (!checkRateLimit()) {
      return {
        success: false,
        message: 'Too many subscription attempts, please try again later.',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'Too many subscription attempts, please try again later.',
    };
  }

  try {
    const { data: newContact } = await resend.contacts.create({
      audienceId: DEFAULT_AUDIENCE_ID,
      email,
      firstName: preferredName,
    });

    if (!newContact || !newContact.id) {
      throw new Error('Failed to create contact in Resend');
    }

    // Send welcome email
    const { error: emailError } = await resend.emails.send({
      from: 'Upskills <news@upskills.dev>',
      to: [email],
      subject: 'Welcome to Upskills!',
      react: <WelcomeEmail email={email} preferredName={preferredName} />,
    });

    if (emailError) {
      console.error('Error sending email:', emailError);
      return {
        success: false,
        message:
          'Failed to send welcome email, but subscription was successful.',
      };
    }

    return {
      success: true,
      message:
        'Subscription successful! Check your email for a welcome message.',
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      message: 'Failed to subscribe. Please try again later.',
    };
  }
}
