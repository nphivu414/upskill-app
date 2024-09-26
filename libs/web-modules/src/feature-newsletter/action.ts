'use server';

import { env } from '@upskill-app/web-env';
import { Resend } from 'resend';

import { checkRateLimit } from './rateLimit';
import {
  addSubscriberToFile,
  findSubscriberByEmail,
} from './subscriberStorage';

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
    // const existingSubscriber = await findSubscriberByEmail(email)

    // await resend.contacts.create({
    //   email,
    //   firstName: preferredName,
    //   unsubscribed: true,
    //   audienceId: '5a279168-7bb8-4e20-8150-bc979f991ac1',
    // });

    // await resend.emails.send({
    //   from: 'Upskills <news@upskills.dev>',
    //   to: [email],
    //   subject: 'Welcome to Upskills Newsletter!',
    //   html: `<p>Hello ${preferredName || 'there'},</p>
    //          <p>Thank you for subscribing to our newsletter. We're excited to share our latest tutorials and coding tips with you!</p>
    //          <p>Best regards,<br>The Upskills Team</p>`,
    // });

    // return {
    //   success: true,
    //   message: 'Subscription successful! Check your email for confirmation.',
    // };

    // Check if the subscriber already exists
    const existingSubscriber = await findSubscriberByEmail(email);

    if (existingSubscriber) {
      // Check Resend API for the current status
      const { data: resendData } = await resend.contacts.get({
        audienceId: DEFAULT_AUDIENCE_ID,
        id: existingSubscriber.resendId,
      });
      console.log('🚀 ~ resendData:', resendData);

      if (!resendData?.unsubscribed) {
        return {
          success: false,
          message: 'You are already subscribed to our newsletter.',
        };
      } else {
        // Re-subscribe the user
        // await resend.contacts.update(existingSubscriber.resendId, { unsubscribed: false })
        await resend.contacts.update({
          audienceId: DEFAULT_AUDIENCE_ID,
          id: existingSubscriber.resendId,
          unsubscribed: false,
        });
        await addSubscriberToFile(
          email,
          existingSubscriber.resendId,
          'subscribed'
        );
        return {
          success: true,
          message:
            'Welcome back! You have been re-subscribed to our newsletter.',
        };
      }
    }

    // If the subscriber doesn't exist or was not found in Resend, proceed with new subscription
    const { data: newContact } = await resend.contacts.create({
      audienceId: DEFAULT_AUDIENCE_ID,
      email,
      firstName: preferredName,
    });

    if (!newContact || !newContact.id) {
      throw new Error('Failed to create contact in Resend');
    }

    // Send welcome email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Upskills <news@upskills.dev>',
      to: [email],
      subject: 'Welcome to Upskills Newsletter!',
      html: `<p>Hello ${preferredName || 'there'},</p>
             <p>Thank you for subscribing to our newsletter. We're excited to share our latest tutorials and coding tips with you!</p>
             <p>Best regards,<br>The Upskills Team</p>`,
    });

    if (emailError) {
      console.error('Error sending email:', emailError);
      return {
        success: false,
        message:
          'Failed to send welcome email, but subscription was successful.',
      };
    }

    // Add subscriber to JSON file
    await addSubscriberToFile(email, newContact.id, 'subscribed');

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
