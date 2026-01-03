import { Logger } from '@vendure/core'
import { EmailDetails, EmailSender } from '@vendure/email-plugin'
import { Resend } from 'resend'

export class ResendEmailSender implements EmailSender {
  protected resend?: Resend;
  protected apiKey?: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey;

    const maskedKey = apiKey ? apiKey.slice(0, 4) + '...' : 'undefined';
    Logger.debug(
      `ResendEmailSender constructed. API Key: ${maskedKey}`,
      'ResendEmailSender',
    );
  }

  private getClient(): Resend {
    if (!this.apiKey) {
      throw new Error('RESEND_API_KEY is not defined');
    }

    if (!this.resend) {
      this.resend = new Resend(this.apiKey);
    }

    return this.resend;
  }

  async send(email: EmailDetails) {
    Logger.debug(
      `ResendEmailSender.send() called`,
      'ResendEmailSender',
    );

    try {
      const client = this.getClient();

      const response = await client.emails.send({
        to: email.recipient,
        from: email.from,
        subject: email.subject,
        html: email.body,
      });

      const { error, data } = response;

      if (error) {
        Logger.error(
          `Resend API error: ${JSON.stringify(error)}`,
          'ResendEmailSender',
        );
      } else {
        Logger.info(
          `Resend sent email successfully. ID: ${data?.id}`,
          'ResendEmailSender',
        );
      }
    } catch (err: any) {
      Logger.error(
        `ResendEmailSender error: ${err?.message}`,
        'ResendEmailSender',
      );
    }
  }
}
