import { useState } from 'react';

const useVote = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const sendVote = async ({ votationId, candidateId }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${backendUrl}/api/vote/create-votation`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          votationId,
          candidateId,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el voto');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return { sendVote, loading, error, success };
};

export default useVote;