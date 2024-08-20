import { resend } from '@/lib/resend';
import VerificationEmail from '@/emails/verificaionEmail';

import { ApiResponse } from '@/types/ApiResponse';
import { log } from 'console';

export async function sendVerificationEmail (
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'you@example.com',
            to: email,
            subject: 'AnMessage Verification Code',
            react: VerificationEmail({
                username,
                otp: verifyCode
            }),
          });
            return {
                success: true,
                message: 'Verification email sent'
            };

    } catch (emailError) {
        log('Verification email error: ' + emailError);
        return {
            success: false,
            message: 'Verification email failed to send'
    }
}
}