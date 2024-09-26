'use server';

import fs from 'fs/promises';
import path from 'path';

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

interface Subscriber {
  email: string;
  resendId: string;
  status: 'subscribed' | 'unsubscribed';
}

export async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const fileContent = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.log('No existing subscribers file found or error reading file.');
    return [];
  }
}

export async function addSubscriberToFile(
  email: string,
  resendId: string,
  status: 'subscribed' | 'unsubscribed'
): Promise<void> {
  try {
    const subscribers = await getSubscribers();

    const existingSubscriberIndex = subscribers.findIndex(
      (sub) => sub.email === email
    );
    if (existingSubscriberIndex !== -1) {
      subscribers[existingSubscriberIndex] = { email, resendId, status };
    } else {
      subscribers.push({ email, resendId, status });
    }

    await fs.mkdir(path.dirname(SUBSCRIBERS_FILE), { recursive: true });
    await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));

    console.log(
      `Subscriber ${email} ${
        status === 'subscribed' ? 'added' : 'updated'
      } successfully.`
    );
  } catch (error) {
    console.error('Error adding/updating subscriber in file:', error);
    throw new Error('Failed to add/update subscriber in storage');
  }
}

export async function findSubscriberByEmail(
  email: string
): Promise<Subscriber | undefined> {
  const subscribers = await getSubscribers();
  return subscribers.find((sub) => sub.email === email);
}
