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

interface WelcomeEmailProps {
  preferredName?: string;
  email: string;
}

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
  borderRadius: '100%',
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
            src="https://upskills.dev/app-logo.png"
            width="75"
            height="75"
            alt="Upskills"
            style={logo}
          />
          <Text style={paragraph}>Hi {name},</Text>
          <Text style={paragraph}>
            Welcome to Upskills, your go-to platform for learning to code. We
            are excited to have you on board!
          </Text>
          <Text style={paragraph}>
            Your coding journey is about to get even more exciting! We are
            packing your inbox with amazing tutorials and practical tips. Stay
            tuned!
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
