import { useNotification } from '@/components/ui/notification';
import ApiService from '@/service/apiService';
import React, { useState, useEffect, useCallback } from 'react';


interface ResendCodeButtonProps {
  disabled?: boolean;
}

export const ResendCodeButton: React.FC<ResendCodeButtonProps> = ({ disabled }) => {
  const [cooldown, setCooldown] = useState(0);
  const [isResending, setIsResending] = useState(false);
  const { showNotification } = useNotification();

  // Restore cooldown from localStorage if it exists
  useEffect(() => {
    const savedCooldownEnd = localStorage.getItem('otpCooldownEnd');
    if (savedCooldownEnd) {
      const cooldownEndTime = parseInt(savedCooldownEnd, 10);
      const now = Date.now();
      
      if (cooldownEndTime > now) {
        setCooldown(Math.ceil((cooldownEndTime - now) / 1000));
      } else {
        // Clear expired cooldown
        localStorage.removeItem('otpCooldownEnd');
      }
    }
  }, []);

  // Timer for cooldown
  useEffect(() => {
    if (cooldown <= 0) return;
    
    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          localStorage.removeItem('otpCooldownEnd');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [cooldown]);

  // Format seconds into mm:ss
  const formatTime = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const handleResendCode = async () => {
    if (cooldown > 0 || isResending || disabled) return;

    setIsResending(true);
    
    // try {
    //   const response = await ApiService.resendVerificationCode();

    //   if (response.success) {
    //     // Set cooldown (30 seconds)
    //     const newCooldown = 30;
    //     setCooldown(newCooldown);
        
    //     // Save cooldown end time in localStorage
    //     const cooldownEndTime = Date.now() + newCooldown * 1000;
    //     localStorage.setItem('otpCooldownEnd', cooldownEndTime.toString());

    //     showNotification(
    //       'success',
    //       'Código enviado',
    //       'Um novo código de verificação foi enviado.',
    //       'top-right'
    //     );
    //   } else {
    //     showNotification(
    //       'error',
    //       'Erro ao reenviar',
    //       response.error || 'Não foi possível enviar um novo código de verificação.',
    //       'top-right'
    //     );
    //   }
    // } catch (error) {
    //   console.error('Resend code error:', error);
    //   showNotification(
    //     'error',
    //     'Erro ao reenviar',
    //     'Ocorreu um erro ao tentar reenviar o código.',
    //     'top-right'
    //   );
    // } finally {
    //   setIsResending(false);
    // }
  };

  return (
    <button 
      type="button" 
      onClick={handleResendCode}
      disabled={cooldown > 0 || isResending || disabled}
      className={`text-indigo-400 hover:text-indigo-500 hover:underline transition-colors duration-200 ${
        (cooldown > 0 || isResending || disabled) ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {cooldown > 0 
        ? `Reenviar (${formatTime(cooldown)})` 
        : isResending 
          ? 'Enviando...' 
          : 'Reenviar'}
    </button>
  );
};