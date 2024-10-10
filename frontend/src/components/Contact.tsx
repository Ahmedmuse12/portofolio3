import React, { useState } from 'react';

interface ContactProps {
  email: string;
}

export function Contact({ email }: ContactProps) {
  // State for skjema felter
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [error, setError] = useState('');

  // Håndtere innsending av skjema
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Enkel validering
    if (name.trim() === '' || message.trim() === '') {
      setError('Begge feltene må fylles ut');
      return;
    }

    // Resette feilmelding
    setError('');

    // Lagre innsendingen i state (kan sende dataen til en API her)
    const data = {
      name,
      message,
      email
    };
    setSubmittedData(data);

    // Resette feltene
    setName('');
    setMessage('');
  };

  return (
    <div>
      <p>Kontakt studenten: {email}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Navn:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message">Melding:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Send melding</button>
      </form>

      {/* Vise innsendingen */}
      {submittedData && (
        <div>
          <h3>Innsendt data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}