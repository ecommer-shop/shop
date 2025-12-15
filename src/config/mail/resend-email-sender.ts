import { Logger } from '@vendure/core';
import { EmailDetails, EmailSender } from '@vendure/email-plugin';
import { Resend } from 'resend';

export class ResendEmailSender implements EmailSender {
  protected resend: Resend | null;

  constructor(apiKey?: string) {
    const maskedKey = apiKey ? apiKey.slice(0, 4) + '...' : 'undefined';
    Logger.debug(
      `ResendEmailSender constructor() - API Key: ${maskedKey}`,
      'ResendEmailSender'
    );

    if (apiKey && apiKey.trim()) {
      this.resend = new Resend(apiKey);
    } else {
      this.resend = null;
      Logger.warn(
        'ResendEmailSender initialized without API key. Emails will be logged but not sent.',
        'ResendEmailSender'
      );
    }
  }

  async send(email: EmailDetails) {
    Logger.debug(
      `ResendEmailSender.send() called with: ${JSON.stringify(email)}`,
      'ResendEmailSender'
    );

    if (!this.resend) {
      Logger.warn(
        `Email not sent (RESEND_API_KEY not configured): To: ${email.recipient}, Subject: ${email.subject}`,
        'ResendEmailSender'
      );
      return;
    }

    try {
      const response = await this.resend.emails.send({
        to: email.recipient,
        from: email.from,
        subject: email.subject,
        html: email.body,
      });
      Logger.debug(
        `Resend API full response: ${JSON.stringify(response)}`,
        'ResendEmailSender'
      );
      const { error, data } = response;
      if (error) {
        Logger.error(
          `Resend API error: ${JSON.stringify(error)}`,
          'ResendEmailSender'
        );
      } else {
        Logger.info(
          `Resend sent email successfully. ID: ${data?.id}`,
          'ResendEmailSender'
        );
      }
    } catch (err: any) {
      Logger.error(
        `Exception in ResendEmailSender.send: ${JSON.stringify(err)}`,
        'ResendEmailSender'
      );
    }
  }
}
