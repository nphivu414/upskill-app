import React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { env } from '@upskill-app/web-env';

interface WelcomeEmailProps {
  preferredName?: string;
  email: string;
}

const baseUrl = env.NEXT_PUBLIC_APP_URL;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#006FEE',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};

export const WelcomeEmail = ({ preferredName, email }: WelcomeEmailProps) => {
  const name = preferredName || email;
  return (
    <Html>
      <Head />
      <Preview>
        Learn to code with fun and engaging tutorials from Upskills.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/app-logo.png`}
            width="170"
            height="50"
            alt="Upskills"
            style={logo}
          />
          <Text style={paragraph}>Hi {name},</Text>
          <Text style={paragraph}>
            Welcome to Upskills, your go-to platform for learning to code. We
            are excited to have you on board!
          </Text>
          <Text style={paragraph}>
            A wide range of tutorials and coding tips to help you get started on
            your coding journey is comming soon to your inbox. Stay tuned!
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://upskills.dev">
              Visit Upskills
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Upskills team
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
