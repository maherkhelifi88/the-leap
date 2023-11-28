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
        const res = await axios.post('https://leapback-d796b66e0016.herokuapp.com/api/assistant/message', {
            message: formData.question,
            conversation_id: conversationId
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.data && res.data.status === 'processing') {
            setConversationId(res.data.conversation_id);
            pollForResponse(res.data.conversation_id);
        }
    } catch (error) {
        console.error('Error while sending message:', error);
        setResponse('There was an error processing your request.');
        setShowAlert(false);
    }
};

const pollForResponse = async (conversationId: string) => {
    const intervalId = setInterval(async () => {
        try {
            const res = await axios.get(`https://leapback-d796b66e0016.herokuapp.com/api/assistant/check-status?conversation_id=${conversationId}`);

            if (res.data.status === 'completed') {
                clearInterval(intervalId);
                setResponse(res.data.responses); // Assuming responses are stored as an array
                const newHistoryEntry = { question: formData.question, response: res.data.responses };
                setConversationHistory([...conversationHistory, newHistoryEntry]);
                setFormData({ ...formData, question: '' });
                setShowAlert(false);
            }
        } catch (error) {
            console.error('Error while polling for response:', error);
            clearInterval(intervalId);
            setResponse('There was an error retrieving the response.');
            setShowAlert(false);
        }
    }, 5000); // Poll every 5 seconds
};

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.box}>
        <div className={classes.messageContainer}>
          {conversationHistory.map((entry, index) => (
            <div key={index} className={classes.singleMessage}>
              <Alert severity="info" className={classes.questionAlert}>
              <Typography variant="h6" className={classes.typ} >{entry.question}</Typography>
                
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
  <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>

      <div className={classes.newRestaurantCoverageRequest}>Ask Leap Assistant</div>
    </form>
    
  );
});
