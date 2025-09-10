import { useEffect } from 'react';
import useMessageStore from '../store/messageStore';

function Snackbar() {
  const { message, messageType, clearMessage } = useMessageStore();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  if (!message) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 
        ${messageType === 'success' ? 'bg-green-700' : 'bg-red-700'} 
        bg-opacity-70 p-4 rounded text-white shadow-lg`}
    >
      <p>{message}</p>
    </div>
  );
}

export default Snackbar;
