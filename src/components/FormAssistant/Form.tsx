import { memo, useState, FormEvent } from 'react';
import type { FC } from 'react';
import { TextField, Button, Alert } from '@mui/material';
import axios from 'axios';
import classes from './Form.module.css';
import Typography from '@mui/material/Typography';
interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}

type HistoryEntry = {
  question: string;
  response: string;
};


export const Form: FC<Props> = memo(function Form(props = {}) {
  const [formData, setFormData] = useState({ question: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [response, setResponse] = useState('');
  const [conversationId, setConversationId] = useState('');
  const [conversationHistory, setConversationHistory] = useState<HistoryEntry[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAlert(true);
    setResponse('');

    try {
      const res = await axios.post('http://localhost:3001/api/assistant/message', {
        message: formData.question,
        conversation_id: conversationId
      });

      if (res.data) {
        setResponse(res.data.reply);
        setConversationId(res.data.conversation_id);
        const newHistoryEntry = { question: formData.question, response: res.data.reply };
        setConversationHistory([...conversationHistory, newHistoryEntry]);
        setFormData({ ...formData, question: '' });

      }
    } catch (error) {
      console.error('Error while sending message:', error);
      setResponse('There was an error processing your request.');
    }

    setShowAlert(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.box}>
        <div className={classes.messageContainer}>
          {conversationHistory.map((entry, index) => (
            <div key={index} className={classes.singleMessage}>
              <Alert severity="info" className={classes.questionAlert}>
              <Typography variant="h6">{entry.question}</Typography>
                
              </Alert>
              <Alert severity="success" className={classes.responseAlert}>
              <Typography variant="h6" className={classes.typ}>{entry.response}</Typography>
                
              </Alert>
            </div>
          ))}
        </div>

        <div className={classes._1}>
          <div className={classes.yourName}>Enter your question </div>
          <TextField
            fullWidth
            label="e.g. How do I test my product?"
            value={formData.question}
            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
            className={classes.rectangle463} />
        </div>

        <Button
          type="submit"
          className={classes.button}
        >
          Send
        </Button>
        {showAlert && (
          <Alert severity="info" className={classes.alert}>
            Your answer is on the way, please wait!
          </Alert>
        )}

      </div>

      <div className={classes.newRestaurantCoverageRequest}>Ask Leap Assistant</div>
    </form>
  );
});
