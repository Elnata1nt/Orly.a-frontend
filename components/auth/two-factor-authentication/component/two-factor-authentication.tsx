import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import ApiService from '@/service/apiService';
import { Notification, useNotification } from '@/components/ui/notification';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { ResendCodeButton } from './resend-code-button';


interface VerifyOTPResponse {
  success: boolean;
  message?: string;
}

export const TwoFactorAuthForm: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { notifications, showNotification, closeNotification } = useNotification();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length !== 6) {
      showNotification(
        'error',
        'Código inválido',
        'Por favor, insira o código de 6 dígitos completo.',
        'top-right'
      );
      return;
    }

    setIsLoading(true);

    try {
      // Call API endpoint for OTP verification
      const response = await ApiService.post<{ otp: string }, VerifyOTPResponse>(
        '/verify/otp',
        { otp },
        false
      );

      // For demo purposes, let's simulate a successful verification
      // In a real app, you would check response.success
      setIsVerified(true);
      
      showNotification(
        'success',
        'Verificação bem-sucedida!',
        'Você será redirecionado para a próxima etapa.',
        'top-right'
      );

      // Redirect after a short delay to show the success state
      setTimeout(() => {
        // In a real app, redirect to dashboard or next step
        // For this demo, we'll just clear the form
        window.location.href = '/dashboard';
      }, 2000);
    } catch (error) {
      console.error('API error:', error);
      
      let errorMessage = 'Código inválido. Tente novamente.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      showNotification(
        'error',
        'Erro na verificação',
        `Não foi possível verificar o código: ${errorMessage}`,
        'top-right'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          type={notification.type}
          title={notification.title}
          message={notification.message}
          isVisible={notification.isVisible}
          onClose={() => closeNotification(notification.id)}
          position={notification.position}
        />
      ))}

      <div className="flex min-h-screen">
        <div className="flex w-full items-center justify-center p-6">
          <div className="mx-auto max-w-sm w-full">
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl text-indigo-500 font-bold animate-slide-down">
                Verificação em duas etapas
              </h1>
              <p className="text-balance mb-8 text-sm text-gray-500 animate-slide-down">
                Digite o código de 6 dígitos enviado para o seu dispositivo
              </p>
            </div>
            <form className="space-y-8 animate-fade-in" onSubmit={handleVerify}>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <InputOTP 
                    maxLength={6}
                    value={otp}
                    onChange={setOtp}
                    disabled={isLoading || isVerified}
                    className="gap-3"
                  >
                    <InputOTPGroup className="">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPGroup className="">
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                
                <div className="flex justify-center mt-2">
                  <p className="text-sm text-gray-500">
                    Não recebeu o código?{" "}
                    <ResendCodeButton disabled={isLoading || isVerified} />
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                className={`w-full transition-all duration-300 ${
                  isVerified 
                    ? "bg-success-500 hover:bg-success-600" 
                    : "bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800"
                }`}
                disabled={isLoading || isVerified || otp.length !== 6}
              >
                {isVerified ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    Verificado
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Verificar
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Voltar para{" "}
                <a href="/" className="text-indigo-400 hover:text-primary-500 hover:underline transition-colors duration-200">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};