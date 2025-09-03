import { Logger } from '@vendure/core'
import { EmailDetails, EmailSender } from '@vendure/email-plugin'
import { Resend } from 'resend'

export class ResendEmailSender implements EmailSender {
  protected resend: Resend

  constructor(apiKey: string) {
    this.resend = new Resend(apiKey)
    Logger.debug('ResendEmailSender constructor()', 'ResendEmailSender')
  }

  async send(email: EmailDetails) {
    Logger.debug(`ResendEmailSender.send() called with: ${JSON.stringify(email)}`, 'ResendEmailSender');
    try {
      const { error, data } = await this.resend.emails.send({
        to: email.recipient,
        from: email.from,
        subject: email.subject,
        html: email.body,
      });
      if (error) {
        Logger.error(`Resend API error: ${error.message}`, 'ResendEmailSender');
      } else {
        Logger.info(`Resend sent email successfully. ID: ${data?.id}`, 'ResendEmailSender');
      }
    } catch (err: any) {
      Logger.error(`Exception in ResendEmailSender.send: ${err?.message || err}`, 'ResendEmailSender');
    }
  }
}