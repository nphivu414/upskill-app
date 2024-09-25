'use server';

import { env } from '@upskill-app/web-env';
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_API_KEY);

export async function subscribeToNewsletter(
  email: string,
  preferredName: string
) {
  try {
    const data = await resend.emails.send({
      from: 'Upskills <news@upskills.dev>',
      to: [email],
      subject: 'Welcome to Upskills Newsletter!',
      html: `<p>Hello ${preferredName || 'there'},</p>
             <p>Thank you for subscribing to our newsletter. We're excited to share our latest tutorials and coding tips with you!</p>
             <p>Best regards,<br>The Upskills Team</p>`,
    });

    return {
      success: true,
      message: 'Subscription successful! Check your email for confirmation.',
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      message: 'Failed to subscribe. Please try again later.',
    };
  }
}
