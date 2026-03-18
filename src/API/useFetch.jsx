import { useRef, useState } from 'react';

export function useCopy() {
  const [btnText, setBtnText] = useState('Копировать');
  const timerRef = useRef(null);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText('FastCraft.me:19132');
      setBtnText('Скопировано!');
    } catch {
      alert('Не удалось скопировать текст');
    } finally {
      if (timerRef.current) clearTimeout(timerRef.current); //очищаем таймер если он существует
      timerRef.current = setTimeout(() => { //устанавливаем таймер на 2 секунды
        setBtnText('Копировать');
        timerRef.current = null;
      }, 2000);
    }
  }

  return { btnText, handleCopy };
}