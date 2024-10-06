/**
 * Initializes a new instance of the Resend class using the API key from the environment variables.
 *
 * @remarks
 * This instance is used to interact with the Resend service for sending emails.
 *
 * @constant
 * @type {Resend}
 *
 * @see {@link https://resend.com/docs} for more information on how to use the Resend service.
 */
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
